#!/bin/bash
sudo git fetch --all
sudo git reset --hard origin/master
sudo git pull origin master
sudo chmod +x /var/www/html/*.sh
killall chromium-browser
<<<<<<< HEAD
sleep 1
tmux chromium-browser --kiosk http://localhost/ & > /dev/null
tput civis
=======


>>>>>>> a460bec63f246d6c6d71568a907ac6c051e05883
