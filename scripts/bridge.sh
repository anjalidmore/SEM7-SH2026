#!/usr/bin/env bash
# Checks that each subject site is wired to the shared Semester 7 layer:
#   in <head>:   <link rel="stylesheet" href="../../shared/sem7.css">
#                <script src="../../shared/sem7.js"></script>
#   on <html>:   data-subject="<code>"
#   end of body: <script>window.SEM7 && SEM7.attach("<code>");</script>
# Adds the attach line if it is missing; reports anything else that is missing.
#
#   scripts/bridge.sh                          check every subject
#   scripts/bridge.sh ads or                   only these subjects
#   scripts/bridge.sh --from <file> <code> --force
#                                              overwrite a subject with a copy from elsewhere
#
# Since Phase 4 the subject sites in this repository are the source of truth: their
# styles and headers were moved onto shared/sem7.css and SEM7.ui, so a copy from the
# old per-subject folders (~/Desktop/projects/Sem7/...) would bring the old design
# back. --from therefore needs --force, and the copied site then has to be converted
# by hand (see "Design system" in README.md).
set -euo pipefail
cd "$(dirname "$0")/.."

from="" force=""
if [[ "${1:-}" == "--from" ]]; then
  from="${2:-}"; shift 2 || true
  [[ "${2:-}" == "--force" ]] && { force=1; set -- "$1"; }
  [[ $# -eq 1 ]] || { echo "--from takes exactly one subject code" >&2; exit 1; }
  [[ -n "$force" ]] || { echo "refusing to overwrite subjects/$1: the copy would drop the shared design system (add --force if you mean it)" >&2; exit 1; }
  [[ -s "$from" ]] && grep -qi '</body>' "$from" || { echo "$from is empty or not a site; nothing copied" >&2; exit 1; }
fi
codes=("$@")
[[ ${#codes[@]} -gt 0 ]] || codes=(ai nlp ads or dl)

status=0
for code in "${codes[@]}"; do
  f="subjects/$code/index.html"
  [[ -f "$f" ]] || { echo "no such subject: $code" >&2; exit 1; }
  if [[ -n "$from" ]]; then cp "$from" "$f"; echo "$code: copied from $from (not yet converted to the shared design)"; fi
  grep -q 'href="../../shared/sem7.css"' "$f" || { echo "$code: missing the shared/sem7.css link in <head>"; status=1; }
  grep -q '<script src="../../shared/sem7.js"></script>' "$f" || { echo "$code: missing shared/sem7.js in <head>"; status=1; }
  grep -q "data-subject=\"$code\"" "$f" || { echo "$code: missing data-subject=\"$code\" on <html>"; status=1; }
  if grep -q "SEM7.attach(\"$code\")" "$f"; then echo "$code: ok"; continue; fi
  # Insert before the LAST </body>, so a "</body>" inside a script string is never touched.
  CODE="$code" perl -0pi -e '
    my $tag = qq{<script>window.SEM7 && SEM7.attach("$ENV{CODE}");</script>\n};
    s{(.*)(</body>)}{$1$tag$2}si;
  ' "$f"
  echo "$code: attach added"
done
exit $status
