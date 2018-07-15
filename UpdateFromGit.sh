#!/bin/bash
while true
do
	sudo git fetch --all
	sudo git reset --hard origin/master
	sudo git pull
	sudo chmod +x /var/www/html/*.sh
	printf "updated from git"
	sleep 5h
done
