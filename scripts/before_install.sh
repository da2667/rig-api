#!/bin/bash

# navigate to app folder
cd /app

# install nvm and node 18
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 18.15.0