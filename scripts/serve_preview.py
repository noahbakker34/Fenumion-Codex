#!/usr/bin/env python3
"""Serve the static Codex locally with enough queue capacity for browser asset bursts."""
import argparse
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

class PreviewServer(ThreadingHTTPServer):
    request_queue_size = 128

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=int, default=8880)
    args = parser.parse_args()
    handler = partial(SimpleHTTPRequestHandler, directory=str(Path(__file__).resolve().parents[1] / 'site'))
    with PreviewServer(('127.0.0.1', args.port), handler) as server:
        print(f'Codex preview: http://127.0.0.1:{server.server_port}/', flush=True)
        server.serve_forever()
