#!/usr/bin/env bash

apt-get update
apt-get install -y nodejs
ln -s /usr/bin/nodejs /usr/bin/node
apt-get install -y npm
apt-get install -y phantomjs
cd /vagrant && npm install
