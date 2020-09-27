#!/bin/sh
sudo apt update
export PGPASSWORD=postgres #if not support then
#set PGPASSWORD=postgres 
sudo apt install -y wget nano
# import the repository signing key:
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
# add repository contents to your system:
RELEASE=$(lsb_release -cs)
echo "deb http://apt.postgresql.org/pub/repos/apt/ ${RELEASE}"-pgdg main | sudo tee  /etc/apt/sources.list.d/pgdg.list
# install and launch the postgresql service:
sudo apt update
sudo apt install -y openjdk-8-jdk postgresql-12
sudo service postgresql start
wget https://github.com/thingsboard/thingsboard/releases/download/v3.1/thingsboard-3.1.deb
sudo dpkg -i thingsboard-3.1.deb
# Create database thingsboard
psql -U postgres -h localhost -c "create database thingsboard"
sudo echo "export JAVA_OPTS="$JAVA_OPTS -Xms256M -Xmx256M" >> /etc/thingsboard/conf/thingsboard.conf
