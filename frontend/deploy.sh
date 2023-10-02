#!/bin/bash

tar czf AlpineFrontend.tar.gz public src jsconfig.json next.config.js package.json .env
scp AlpineFrontend.tar.gz vfix:~
rm AlpineFrontend.tar.gz

ssh vfix << 'ENDSSH'
mkdir AlpineFrontend-temp
tar xf AlpineFrontend.tar.gz -C AlpineFrontend-temp 2> /dev/null
rm AlpineFrontend.tar.gz
cd AlpineFrontend-temp
find  . -name '._*' -exec rm {} \;
npm i
npm run build
cd ..
rm -rf AlpineFrontend
mv AlpineFrontend-temp AlpineFrontend
cd AlpineFrontend
pm2 delete AlpineFrontend
pm2 start npm --name "AlpineFrontend" -- start
ENDSSH