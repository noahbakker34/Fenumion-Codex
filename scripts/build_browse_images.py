#!/usr/bin/env python3
"""Small, static previews of public artwork; originals remain the reading assets.

Regeneration needs Pillow. --check uses only the standard library for CI.
"""
import argparse, hashlib, json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / 'site'
MANIFEST = ROOT / 'content/reference/browse-images.json'
OUTPUT = SITE / 'assets/browse'
SETTINGS = {'maxEdge': 512, 'quality': 84, 'method': 5, 'frame': 0}
HUB_IMAGES = ['assets/archive/wrath.gif', 'assets/archive/abyss.png',
              'assets/archive/world-map.jpeg', 'assets/archive/fein-uaill.jpeg',
              'assets/archive/throne.png', 'assets/archive/pristinia.webp']


def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def sources():
    world = json.loads((ROOT / 'content/reference/world.json').read_text())
    records = {p.stem: json.loads(p.read_text()) for p in (ROOT / 'content/records').glob('*.json')}
    images = set(HUB_IMAGES)
    for person in world['archiveIndex']['characters'] + world['archiveIndex']['npcs']:
        record = records.get(person['article'], {})
        if record.get('protected'):
            continue
        image = person.get('image')
        if image:
            images.add(image)
    for image in images:
        path = (SITE / image).resolve()
        assert path.is_relative_to(SITE.resolve()) and path.is_file(), image
    return sorted(images)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    originals = sources()
    if args.check:
        manifest = json.loads(MANIFEST.read_text())
        assert manifest['settings'] == SETTINGS
        assert sorted(manifest['images']) == originals, 'Regenerate previews after changing directory artwork'
        for source, image in manifest['images'].items():
            assert digest(SITE / source) == image['sourceSha256'], source + ' changed'
            assert image['src'].startswith('assets/browse/') and '..' not in image['src']
            assert image['src'] == 'assets/browse/' + image['sha256'][:20] + '.webp'
            assert digest(SITE / image['src']) == image['sha256'], image['src'] + ' changed'
            assert 0 < image['width'] <= 512 and 0 < image['height'] <= 512
        assert {p.relative_to(SITE).as_posix() for p in OUTPUT.glob('*.webp')} == {i['src'] for i in manifest['images'].values()}, 'Stale browsing previews'
        print(f'PASS {len(originals)} public previews, original/output hashes, dimensions and coverage')
        return

    from PIL import Image, ImageOps
    from io import BytesIO
    OUTPUT.mkdir(parents=True, exist_ok=True)
    previews = {}
    for source in originals:
        path = SITE / source
        source_hash = digest(path)
        with Image.open(path) as original:
            original.seek(0)
            image = ImageOps.exif_transpose(original).convert('RGBA' if original.mode == 'RGBA' or 'transparency' in original.info else 'RGB')
            image.thumbnail((512, 512), Image.Resampling.LANCZOS)
            buffer = BytesIO()
            image.save(buffer, 'WEBP', quality=84, method=5)
            encoded = buffer.getvalue()
            name = hashlib.sha256(encoded).hexdigest()[:20] + '.webp'
            target = OUTPUT / name
            target.write_bytes(encoded)
            previews[source] = dict(src='assets/browse/' + name, width=image.width, height=image.height,
                                    sourceSha256=source_hash, sha256=digest(target))
    manifest = {'settings': SETTINGS, 'images': previews}
    MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n')
    keep = {image['src'] for image in previews.values()}
    for path in OUTPUT.glob('*.webp'):
        if path.relative_to(SITE).as_posix() not in keep:
            path.unlink()
    before = sum((SITE / source).stat().st_size for source in originals)
    after = sum((SITE / image['src']).stat().st_size for image in previews.values())
    print(f'{len(previews)} static public previews: {before:,} → {after:,} bytes; originals unchanged')


if __name__ == '__main__':
    main()
