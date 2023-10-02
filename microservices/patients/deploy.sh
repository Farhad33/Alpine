#!/bin/bash

tar czf AlpinePatient.tar.gz src package.json .env.dev
scp AlpinePatient.tar.gz vfix:~
rm AlpinePatient.tar.gz

ssh vfix << 'ENDSSH'
mkdir AlpinePatient-temp
tar xf AlpinePatient.tar.gz -C AlpinePatient-temp 2> /dev/null
rm AlpinePatient.tar.gz
cd AlpinePatient-temp
find  . -name '._*' -exec rm {} \;
npm i
npm run build
cd ..
rm -rf AlpinePatient
mv AlpinePatient-temp AlpinePatient
cd AlpinePatient
pm2 delete AlpinePatient
pm2 start npm --name "AlpinePatient" -- start
ENDSSH