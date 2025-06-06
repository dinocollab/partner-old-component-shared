git add .; git commit -m "update"; git push

pnpm install dinocollab/partner-old-component-shared

## Git

git add .; git commit -m "update"; git push

git reset --hard <commit-id>
git push origin master --force

## Register link global

pnpm link --global

## Project Connection

pnpm link --global <source-name>
pnpm link --global component-shared

## publish to npm

cd dist
npm publish
