# Revert to the original static server or remove all Flask/email code, as Formsubmit does not require a backend.
from http.server import HTTPServer, SimpleHTTPRequestHandler
import sys


def run(port=8001):
    server_address = ("", port)
    httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
    print(f"Server running on port {port}")
    httpd.serve_forever()


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8001
    run(port)
