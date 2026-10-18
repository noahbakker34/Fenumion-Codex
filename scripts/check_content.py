#!/usr/bin/env python3
"""Check identities, sources, routes, status, section metadata and protected public boundaries."""
import collections, json, re, sys
from html.parser import HTMLParser
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
class Links(HTMLParser):
 def __init__(self):super().__init__();self.ids=[];self.links=[];self.headings=[]
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if 'id'in a:self.ids.append(a['id'])
  if tag=='h2':self.headings.append(a.get('id',''))
  for key in ['data-article','data-record-article']:
   if a.get(key):self.links.append(a[key])
  if a.get('href','').startswith('#'):self.links.append(a['href'][1:])
def audit():
 records=[json.loads(p.read_text()) for p in sorted((ROOT/'content/records').glob('*.json'))];world=json.loads((ROOT/'content/reference/world.json').read_text());ids=[r['id'] for r in records];known=set(ids);aliases=dict(world['routeAliases']);errors=[];warnings=[]
 def require(condition,message):
  if not condition:errors.append(message)
 require(len(ids)==len(known),'Duplicate article IDs')
 for a in records:
  aid=a['id'];require(a['schemaVersion']==1,aid+': unsupported schema')
  require(a['protected']==(aid in world['restrictedArticleIds']),aid+': protected classification changed')
  require(not(a['protected'] and a.get('body')),aid+': protected body leaked')
  require(not a['protected'] or not a.get('brief'),aid+': protected summary leaked')
  parser=Links();parser.feed(a.get('body',''))
  duplicates=[key for key,count in collections.Counter(parser.ids).items() if count>1]
  for key in duplicates:errors.append(aid+': duplicate section ID '+key)
  for target in parser.links:
   target=target.split('?')[0]
   if target and target not in known and target not in aliases and target not in parser.ids:warnings.append(aid+': unresolved link '+target)
  sectionids=[section['id'] for section in a.get('sections',[])]
  require(len(sectionids)==len(set(sectionids)),aid+': duplicate section metadata')
  require(set(sectionids)==set(parser.headings),aid+': headings and evidence metadata differ')
  for section in a.get('sections',[]):
   evidence=section.get('evidence',{});require(evidence.get('kind') in {'mixed','quest','testimony','unresolved','canon','interpretation','reference','map','navigation'},aid+': missing evidence kind')
   require(bool(evidence.get('summary')),aid+': missing evidence explanation')
   if evidence.get('kind') in {'quest','testimony','canon'}:require(bool(evidence.get('sources')),aid+': authoritative label without source')
  for action in a.get('brief',{}).get('actions',[]):
   if action.get('section'):require(action['section'] in sectionids,aid+': broken summary section '+action['section'])
  if a.get('brief') and a.get('facts',{}).get('Status'):require(a['brief']['status']==str(a['facts']['Status']),aid+': summary contradicts explicit Status')
  if a.get('body') and not a.get('sources'):warnings.append(aid+': missing article references')
 for alias,target in aliases.items():require(target in known,'Unresolved route alias '+alias+' -> '+target)
 recordById={r['id']:r for r in records}
 for name in ['scene-review','claim-review','research-queue','source-recovery']:
  rows=json.loads((ROOT/'content/reference'/f'{name}.json').read_text())
  keys=[]
  for row in rows:
   aid=row.get('article');require(aid in known,name+': unknown article '+str(aid))
   require(not recordById.get(aid,{}).get('protected',True),name+': protected review target '+str(aid))
   if name=='scene-review':
    require(bool(row.get('limit')),name+': missing conclusion limit')
    require(bool(row.get('receipts')),name+': missing receipt')
    for receipt in row.get('receipts',[]):
     require(receipt.get('url','').startswith('https://discord.com/channels/') and receipt['url'].endswith('/'+receipt.get('message','')),name+': invalid receipt')
     require(bool(re.fullmatch(r'\d{4}-\d{2}-\d{2}',receipt.get('date',''))),name+': missing source date')
   elif name=='research-queue':
    keys.append(row['id'])
    require(all(row.get(k)for k in ['known','missing','nextSource']),name+': incomplete evidence question '+row['id'])
    require('id="question-'+row['id']+'"' in recordById['open-questions']['body'],name+': question not exposed '+row['id'])
   elif name=='claim-review':
    keys.append(row['id'])
    require(row.get('status')in {'reviewed','corrected','attributed','unresolved'},name+': invalid verdict')
    require(bool(row.get('limit'))and bool(row.get('basis')),name+': missing basis or limit')
   else:keys.append(aid)
  require(len(keys)==len(set(keys)),name+': duplicate identity')
 for chain in json.loads((ROOT/'content/reference/consequences.json').read_text()):
  for step in chain['steps']:require(any(e.get('title')==step['event'] and not e.get('vaultOnly') and e.get('article') not in world['restrictedArticleIds'] for e in world['archiveIndex']['timeline']),'Unknown/protected chain event: '+step['event'])
 for group in ['characters','npcs','islands']:
  seen=set()
  for item in world['archiveIndex'][group]:
   key=(item.get('title'),item.get('article'));require(key not in seen,'Duplicate directory identity '+group+': '+str(key));seen.add(key)
   require(item.get('article') in known,'Missing directory route '+str(key))
 expected=json.loads((ROOT/'content/reference/known-gaps.json').read_text()) if (ROOT/'content/reference/known-gaps.json').exists() else []
 for warning in warnings:
  if warning not in expected:errors.append(warning)
 for gap in expected:
  if gap not in warnings:errors.append('Resolved reference gap must be removed from known-gaps.json: '+gap)
 print(f'{len(records)} records, {sum(len(r.get("sections",[])) for r in records)} sections, {len(warnings)} explicitly tracked inherited gaps.')
 for error in errors:print('ERROR',error)
 if errors:sys.exit(1)
 print('PASS identity, status, references, routes, protected boundaries and consequence destinations')
if __name__=='__main__':audit()
