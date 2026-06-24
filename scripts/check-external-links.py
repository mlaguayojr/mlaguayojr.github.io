#!/usr/bin/env python3
"""Check staged HTML files for external links missing rel="noopener noreferrer"."""
import re
import subprocess
import sys

def get_staged_html_files():
    result = subprocess.run(
        ["git", "diff", "--cached", "--name-only", "--diff-filter=ACM"],
        capture_output=True, text=True
    )
    return [f for f in result.stdout.splitlines() if f.endswith(".html")]

def check_file(path):
    with open(path, encoding="utf-8") as f:
        content = f.read()
    issues = []
    for tag in re.findall(r"<a\b[^>]+>", content, re.DOTALL):
        if re.search(r'href=["\']https?://', tag):
            if 'rel="noopener noreferrer"' not in tag:
                issues.append(tag.strip()[:120])
    return issues

def main():
    files = get_staged_html_files()
    failed = False
    for path in files:
        issues = check_file(path)
        if issues:
            print(f"\n[ERROR] {path}")
            for issue in issues:
                print(f"    {issue}")
            failed = True
    if failed:
        print('\nExternal links must include rel="noopener noreferrer".')
        print("See career.html for the correct pattern.")
        sys.exit(1)

if __name__ == "__main__":
    main()
