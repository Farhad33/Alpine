#!/bin/bash

tar czf Alpine.tar.gz database frontend microservices
scp Alpine.tar.gz vfix:~
rm Alpine.tar.gz

ssh vfix << 'ENDSSH'
rm -rf Alpine
mkdir Alpine
tar xf Alpine.tar.gz -C Alpine 2> /dev/null
rm Alpine.tar.gz
ENDSSH