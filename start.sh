#!/bin/bash

cd ./server
npm run start &

cd ../client
npm run start &

# Wait for any process to exit
wait -n

exit $?