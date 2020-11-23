#!/bin/sh
# set -ex
# icons="twitter github facebook instagram linkedin"
# dest=fontawesome
# url=https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/brands
# mkdir -p "${dest}"
# for icon in $icons; do
#   icon="${icon}.svg"
#   wget -O "${dest}/${icon}" "${url}/${icon}"
# done

set -ex
icons="twitter github facebook instagram linkedin gitlab"
dest="../assets/fa"
url="../.library/fontawesome-pro/svgs/brands"
mkdir -p "${dest}"
for icon in $icons; do
  icon="${icon}.svg"
  cp -f "${url}/${icon}" "${dest}/${icon}"
done
