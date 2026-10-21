#!/usr/bin/env python3
"""Check identities, sources, routes, status, section metadata and protected public boundaries."""
import collections, json, re, sys
from html.parser import HTMLParser
from pathlib import Path
from final_war_calendar import calendar_errors, posting_window
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
  require(not a['protected'] or not a.get('scenes'),aid+': protected scenes leaked')
  require('protectedHls' not in json.dumps(a),aid+': authenticated media descriptor leaked')
  if a.get('publicPreview'):
   preview=a['publicPreview'];base='assets/media/i-am-death/'
   require(aid=='death-dumuzi' and a['protected'],aid+': unapproved public preview')
   require(set(preview)=={'id','title','caption','poster','hls'},aid+': unexpected public preview fields')
   require(preview.get('id')=='i-am-death' and preview.get('title')=='I am Death',aid+': unapproved public film')
   require(preview.get('poster')==base+'poster.jpg' and preview.get('hls')==base+'index.m3u8',aid+': unexpected preview asset')
   for path in ['poster.jpg','key.bin','index.m3u8']:require((ROOT/'site'/base/path).is_file(),aid+': missing public film asset '+path)
   require((ROOT/'site'/base/'key.bin').stat().st_size==16,aid+': invalid public film key')
   manifest=(ROOT/'site'/base/'index.m3u8').read_text()
   require(manifest.startswith('#EXTM3U\n') and manifest.endswith('#EXT-X-ENDLIST\n'),aid+': invalid public manifest')
   objects=[line for line in manifest.splitlines() if not line.startswith('#')]
   require(len(objects)==47,aid+': public film segment count changed')
   for url in objects:
    require(bool(re.fullmatch(r'https://raw\.githubusercontent\.com/noahbakker34/Fenumion-Codex/ad0ea6b5a278bb6ef799ce339a64eb8f8611ac30/site/assets/protected-media/[a-f0-9]{64}\.bin',url)),aid+': unexpected public segment location')
    require((ROOT/'site/assets/protected-media'/url.rsplit('/',1)[-1]).is_file(),aid+': missing public segment')
   for line in manifest.splitlines():
    if line.startswith('#EXT-X-KEY:'):require(bool(re.fullmatch(r'#EXT-X-KEY:METHOD=AES-128,URI="key.bin",IV=0x[a-f0-9]{32}',line)),aid+': unexpected public key reference')
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
 for event in world['archiveIndex']['timeline']:
  if event.get('veiled') or event.get('vaultOnly') or event.get('article') in world['restrictedArticleIds']:
   require(not any(key in event for key in ['importance','importanceReason','regions','dating','reviewSources','aliases']), 'Protected timeline metadata leaked into public index')
  else:
   require(type(event.get('importance')) is int and 1 <= event['importance'] <= 5, 'Missing/invalid timeline importance: '+str(event.get('title')))
   require(isinstance(event.get('importanceReason'),str) and bool(event['importanceReason'].strip()), 'Missing importance explanation: '+str(event.get('title')))
   regionids={r['id'] for r in world['timelineRegions']}
   require(isinstance(event.get('regions'),list) and bool(event['regions']) and set(event['regions'])<=regionids, 'Missing/invalid timeline region: '+str(event.get('title')))
   require(event.get('dating',{}).get('kind') in {'canon','recorded','approximate','recollection','unresolved'} and bool(event.get('dating',{}).get('note')), 'Missing date basis: '+str(event.get('title')))
   day=event.get('dating',{}).get('finalWarDay')
   require(day is None or (type(day) is int and day>0), 'Invalid Final War day: '+str(event.get('title')))
   for error in calendar_errors(event.get('dating',{})):require(False,error+': '+str(event.get('title')))
   require(not posting_window(event) or event.get('dating',{}).get('postingWindow'), 'Missing recorded calendar window: '+str(event.get('title')))
   if event.get('reviewSources'):
    require(all(re.fullmatch(r'https://discord\.com/channels/\d+/\d+/\d+',ref) for ref in event['reviewSources']), 'Invalid timeline receipt: '+str(event.get('title')))
 calendar=world.get('timelineCalendar',{})
 origin=next((event for event in world['archiveIndex']['timeline'] if event.get('title')==calendar.get('originEvent')),None)
 require(calendar.get('originDay')==1 and origin and origin.get('dating',{}).get('finalWarDay')==1,'Final War Day 1 origin is missing')
 require(calendar.get('originDate')=='2024-03-04' and calendar.get('mode')=='posting-dates','Final War posting-date convention is missing')
 for alias,target in world.get('timelineAliases',{}).items():
  require(any(e.get('title')==target and not e.get('veiled') for e in world['archiveIndex']['timeline']), 'Broken event alias '+alias)

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
