#!/usr/bin/env python3
"""Validate selected public depictions without importing the raw review gallery."""
import hashlib, json, re, struct
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
review = json.loads((ROOT / 'content/reference/portrait-review-2026-10-22.json').read_text())
world = json.loads((ROOT / 'content/reference/world.json').read_text())
dimensions = json.loads((ROOT / 'content/reference/image-dimensions.json').read_text())
records = {p.stem: json.loads(p.read_text()) for p in (ROOT / 'content/records').glob('*.json')}
promoted = set(review['promotedExistingRecords'])
assert len(promoted) == 43
assert len(review['portraits']) == 57
assert len({p['article'] for p in review['portraits']}) == 57
excluded = {'discovery-004', 'discovery-007', 'discovery-059', 'discovery-118', 'discovery-121', 'discovery-187', 'discovery-209', 'discovery-239', 'discovery-240', 'discovery-245', 'discovery-251', 'discovery-280', 'discovery-301', 'discovery-311'}
assert not promoted & excluded
assert not {p['article'] for p in review['portraits']} & excluded
for portrait in review['portraits']:
    record = records[portrait['article']]
    assert not record['protected'] and record['image'] == portrait['asset']
    assert portrait['asset'].startswith('assets/characters/discord/')
    data = (ROOT / 'site' / portrait['asset']).read_bytes()
    assert hashlib.sha256(data).hexdigest() == portrait['sha256']
    assert data[:8] == b'\x89PNG\r\n\x1a\n'
    assert list(struct.unpack('>II', data[16:24])) == dimensions[portrait['asset']]
    assert re.fullmatch(r'https://discord\.com/channels/1177270231513694249/\d+/\d+', portrait['source'])
    assert any(portrait['source'] in reference for reference in record['sources'])
for aid in promoted:
    assert len([p for p in world['archiveIndex']['npcs'] if p['article'] == aid]) == 1
    assert all(next(e for e in registry if e['id'] == aid)['kind'] == 'npc' for registry in [world['npcDiscoveries']['entries'], world['windowData']['FENUMION_NPC_DISCOVERIES']['entries']])
    section = next(s for s in records[aid]['sections'] if s['id'] == aid + '-checked-history')
    assert section['evidence']['kind'] == 'quest' and section['evidence']['sources']
assert len([p for p in world['archiveIndex']['characters'] if p['title'] == 'Saelihn' and p['article'] == 'saelihn']) == 1
assert not any(p['title'] in {'Pin', 'Miri', 'Saelihn', 'Briar', 'Saturnia, Manifest Mind', 'Ascended Saturnia'} for p in world['archiveIndex']['npcs'])
assert 'not a shogun' in records['discovery-312']['body']
assert 'distinct from Vysaeth' in records['discovery-109']['body']
assert 'not her real name' in records['discovery-120']['body']
print('PASS 43 quest-supported NPC records, 57 sourced portrait placements/56 original assets, one existing player’s personal page, preserved aliases/forms and exclusion of generic/gag candidates')
