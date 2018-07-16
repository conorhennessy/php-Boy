#!/bin/bash
sudo git fetch --all
sudo git reset --hard origin/master
sudo git pull origin master
sudo chmod +x /var/www/html/*.sh
killall chromium-browser
sleep 1
tmux 

chromium-browser --kiosk http://localhost/ & > /dev/null

