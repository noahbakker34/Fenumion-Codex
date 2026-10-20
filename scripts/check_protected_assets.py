#!/usr/bin/env python3
"""Check opaque encrypted assets without reading private keys or vault content."""
import hashlib, re
from pathlib import Path

root=Path(__file__).resolve().parents[1]/'site/assets/protected-media'
count=0
if root.exists():
 for p in root.iterdir():
  assert p.is_file() and re.fullmatch(r'[a-f0-9]{64}\.bin',p.name), 'Unexpected protected asset format'
  data=p.read_bytes()
  assert data and len(data)%16==0, 'Invalid encrypted block length'
  assert hashlib.sha256(data).hexdigest()==p.stem, 'Encrypted asset hash mismatch'
  assert data[4:8]!=b'ftyp' and not data.startswith((b'#EXTM3U',b'\xff\xd8\xff')), 'Plain media in encrypted asset directory'
  assert not all(data[i*188:i*188+1]==b'G' for i in range(5)), 'Plain transport stream in encrypted asset directory'
  count+=1
print(f'PASS {count} opaque encrypted assets; no playlists, keys or plain media in protected-media directory')
