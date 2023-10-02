#!/bin/bash

tar czf AlpineImportPatient.tar.gz src package.json .env.dev
scp AlpineImportPatient.tar.gz vfix:~
rm AlpineImportPatient.tar.gz

ssh vfix << 'ENDSSH'
mkdir AlpineImportPatient-temp
tar xf AlpineImportPatient.tar.gz -C AlpineImportPatient-temp 2> /dev/null
rm AlpineImportPatient.tar.gz
cd AlpineImportPatient-temp
find  . -name '._*' -exec rm {} \;
npm i
npm run build
cd ..
rm -rf AlpineImportPatient
mv AlpineImportPatient-temp AlpineImportPatient
cd AlpineImportPatient
pm2 delete AlpineImportPatient
pm2 start npm --name "AlpineImportPatient" -- start
ENDSSH