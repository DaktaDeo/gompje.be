#!/bin/sh
set -ex

echo "which icons? (space seperated) "
read icons

dest="../assets/fa"
url="../.library/fontawesome-pro/svgs/light"
mkdir -p "${dest}"
for icon in $icons; do
  icon="${icon}.svg"
  cp -f "${url}/${icon}" "${dest}/${icon}"
done
