#!/usr/bin/env bash
# verify.sh — confirm the live storefront is serving correctly.
# Usage: ./verify.sh   (run from your own machine, after `git push`)

set -uo pipefail
URL="${1:-https://rwajanak.github.io}"

echo "Checking $URL ..."
echo

# Fetch with status code
body="$(curl -fsSL "$URL" 2>/dev/null)"
status=$?

if [ $status -ne 0 ]; then
  echo "❌ Could not reach $URL (curl exit $status)."
  echo "   • Did you run 'git push origin master'?"
  echo "   • Is GitHub Pages enabled? (repo → Settings → Pages → Branch: master / root)"
  echo "   • Pages can take ~1 min to build after a push — try again shortly."
  exit 1
fi

# Markers that prove the new storefront (not the old Hello World) is live.
declare -a checks=(
  "Verdant"               "brand name"
  "Bring the outside in." "hero headline"
  "productGrid"           "product grid mount point"
  "app.js"                "cart script"
  "styles.css"            "stylesheet"
)

pass=0; fail=0
for ((i=0; i<${#checks[@]}; i+=2)); do
  marker="${checks[i]}"; label="${checks[i+1]}"
  if grep -qF -- "$marker" <<<"$body"; then
    echo "✅ found: $label  ('$marker')"
    ((pass++))
  else
    echo "❌ missing: $label  ('$marker')"
    ((fail++))
  fi
done

echo
if grep -qF "Hello World" <<<"$body"; then
  echo "⚠️  The page still shows the old 'Hello World' placeholder."
  echo "    The push may not have landed, or Pages hasn't rebuilt yet."
  exit 1
fi

if [ $fail -eq 0 ]; then
  echo "🌿 All $pass checks passed — the Verdant storefront is live!"
else
  echo "$pass passed, $fail missing. If you just pushed, wait a minute and re-run."
  exit 1
fi
