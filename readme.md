#build
npm run build
npm run export

#deploy to github
cd out
cp -R ../release/FatBuTa.github.io/.git ./
touch .nojekyll
git push -f