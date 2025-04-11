#!/usr/bin/env sh

# abort on errors
set -e

# generate static site
pnpm run generate

# move into the output directory
cd .output/public

# rename the directory to be served from the root
mv * ../

# initialize git and push to gh-pages branch
git init
git add -A
git commit -m 'deploy'

# force push to your GitHub repo's gh-pages branch
git push -f git@github.com:rebinnaf/nuxt3-provet.git master:gh-pages

# return to root
cd -
