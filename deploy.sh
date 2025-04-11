#!/usr/bin/env sh

# abort on errors
set -e

# generate static site
pnpm install
pnpm run generate

# move into the output directory
cd .output/public

# initialize git and push to gh-pages branch
git init
git add -A
git commit -m 'deploy'

# force push to your GitHub repo's gh-pages branch
git push -f git@github.com:rebinnaf/nuxt3-provet.git main:gh-pages

# return to root
cd -
