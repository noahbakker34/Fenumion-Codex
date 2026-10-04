#!/usr/bin/env python3
"""Split a DiscordChatExporter JSON archive into upload-friendly JSON chunks."""

from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path
from typing import Any


DEFAULT_MAX_BYTES = 4 * 1024 * 1024


def encoded(value: Any) -> bytes:
    return json.dumps(
        value,
        ensure_ascii=False,
        separators=(",", ":"),
    ).encode("utf-8")


def safe_stem(path: Path) -> str:
    stem = path.stem
    return "".join(character if character.isalnum() else "-" for character in stem).strip("-")


def chunk_document(
    source: dict[str, Any],
    messages: list[dict[str, Any]],
    chunk_number: int,
    total_chunks: int,
    source_name: str,
) -> dict[str, Any]:
    first = messages[0]
    last = messages[-1]
    return {
        "_chunk": {
            "sourceFile": source_name,
            "number": chunk_number,
            "total": total_chunks,
            "firstMessageId": first.get("id"),
            "lastMessageId": last.get("id"),
            "firstTimestamp": first.get("timestamp"),
            "lastTimestamp": last.get("timestamp"),
        },
        "guild": source.get("guild"),
        "channel": source.get("channel"),
        "dateRange": source.get("dateRange"),
        "exportedAt": source.get("exportedAt"),
        "messages": messages,
        "messageCount": len(messages),
        "sourceMessageCount": source.get("messageCount", len(source.get("messages", []))),
    }


def write_chunk(
    output_dir: Path,
    base_name: str,
    document: dict[str, Any],
) -> dict[str, Any]:
    number = document["_chunk"]["number"]
    total = document["_chunk"]["total"]
    filename = f"{base_name}--part-{number:03d}-of-{total:03d}.json"
    destination = output_dir / filename
    payload = encoded(document)
    destination.write_bytes(payload)
    return {
        "part": number,
        "file": filename,
        "bytes": len(payload),
        "sha256": hashlib.sha256(payload).hexdigest(),
        "messageCount": document["messageCount"],
        "firstMessageId": document["_chunk"]["firstMessageId"],
        "lastMessageId": document["_chunk"]["lastMessageId"],
        "firstTimestamp": document["_chunk"]["firstTimestamp"],
        "lastTimestamp": document["_chunk"]["lastTimestamp"],
    }


def split_archive(source_path: Path, output_dir: Path, max_bytes: int) -> None:
    with source_path.open("r", encoding="utf-8-sig") as handle:
        source = json.load(handle)

    messages = source.get("messages")
    if not isinstance(messages, list):
        raise ValueError("The source JSON does not contain a top-level messages array.")
    if not messages:
        raise ValueError("The source JSON contains no messages.")

    # Leave room for metadata and structural punctuation. Messages are serialized
    # compactly so the resulting files stay comfortably below the requested cap.
    payload_budget = max_bytes - 16 * 1024
    batches: list[list[dict[str, Any]]] = []
    current: list[dict[str, Any]] = []
    current_size = 0

    for message in messages:
        message_size = len(encoded(message)) + 1
        if current and current_size + message_size > payload_budget:
            batches.append(current)
            current = []
            current_size = 0
        current.append(message)
        current_size += message_size
    if current:
        batches.append(current)

    output_dir.mkdir(parents=True, exist_ok=True)
    base_name = safe_stem(source_path)
    manifest_parts: list[dict[str, Any]] = []
    total_chunks = len(batches)

    for index, batch in enumerate(batches, start=1):
        document = chunk_document(source, batch, index, total_chunks, source_path.name)
        part = write_chunk(output_dir, base_name, document)
        if part["bytes"] > max_bytes:
            raise ValueError(
                f"{part['file']} is {part['bytes']} bytes, exceeding the {max_bytes}-byte cap."
            )
        manifest_parts.append(part)

    source_hash = hashlib.sha256(source_path.read_bytes()).hexdigest()
    manifest = {
        "sourceFile": source_path.name,
        "sourceBytes": source_path.stat().st_size,
        "sourceSha256": source_hash,
        "sourceMessageCount": len(messages),
        "maximumChunkBytes": max_bytes,
        "chunkCount": total_chunks,
        "ordering": "Upload or process parts in ascending part number.",
        "parts": manifest_parts,
    }
    (output_dir / "manifest.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )

    groups = [manifest_parts[index : index + 10] for index in range(0, total_chunks, 10)]
    group_lines = []
    for group_number, group in enumerate(groups, start=1):
        filenames = "\n".join(f"- `{part['file']}`" for part in group)
        group_lines.append(f"### Upload group {group_number}\n\n{filenames}")

    readme = f"""# ChatGPT-ready quest archive chunks

- Source: `{source_path.name}`
- Messages: {len(messages):,}
- Parts: {total_chunks}
- Maximum part size: {max_bytes / (1024 * 1024):.1f} MiB

Every part is valid JSON and repeats the archive's guild, channel, date-range, and export metadata. Messages remain in original chronological order. The original export was not changed.

Upload only the chronological range needed for a question. If a task spans the whole archive, work through the groups below in order and ask ChatGPT to maintain a running findings document between groups.

Suggested prompt:

> These are consecutive chunks from one Discord quest archive. Read them in part-number order. Treat `_chunk` as provenance metadata, preserve exact dates and speakers, distinguish player statements from established canon, and list uncertainties instead of inventing missing events.

The checksums, byte sizes, message counts, IDs, and timestamps for every part are recorded in `manifest.json`.

{chr(10).join(group_lines)}
"""
    (output_dir / "README.md").write_text(readme, encoding="utf-8")

    print(f"Created {total_chunks} chunks in {output_dir}")
    print(f"Messages preserved: {sum(part['messageCount'] for part in manifest_parts):,}")
    print(f"Largest chunk: {max(part['bytes'] for part in manifest_parts):,} bytes")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("source", type=Path, help="DiscordChatExporter JSON file")
    parser.add_argument("output", type=Path, help="Directory for chunks and manifest")
    parser.add_argument(
        "--max-bytes",
        type=int,
        default=DEFAULT_MAX_BYTES,
        help=f"Maximum bytes per JSON chunk (default: {DEFAULT_MAX_BYTES})",
    )
    arguments = parser.parse_args()
    split_archive(arguments.source, arguments.output, arguments.max_bytes)


if __name__ == "__main__":
    main()
