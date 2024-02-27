#!/bin/bash

# navigate to app folder
cd /app

source /root/.nvm/nvm.sh

nvm use 18.15.0

# install dependencies
npm install
npm run build
screen -d -m npm start
