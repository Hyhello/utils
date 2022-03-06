#!/bin/bash
set -e

VERSION=$1

if [[ -z $1 ]]; then
  read -p "Enter new version: " VERSION
fi

read -p "Releasing $VERSION - are you sure? (y/n) " -n 1 -r

if [[ $REPLY =~ ^[Yy]$ ]]; then
    #commit
    git add -A
    git commit -m "build: build $VERSION"

    npm version $VERSION
    npm run build
    npm run build:docs

    # publish
    git push origin refs/tags/v"$VERSION"
    git push
    npm publish --access=public
fi

exit 0
