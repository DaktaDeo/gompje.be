#!/bin/sh
set -ex

icons="language recycle cactus leaf-oak robot hand-holding-box tools user-astronaut hands-heart dragon
drumstick-bite feather-alt flower-tulip"

dest="../assets/fa"
url="../.library/fontawesome-pro/svgs/light"
mkdir -p "${dest}"
for icon in $icons; do
  icon="${icon}.svg"
  cp -f "${url}/${icon}" "${dest}/${icon}"
done
