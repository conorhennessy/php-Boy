#!/bin/bash
echo "Pulling from Git"
cd /var/www/html/
sudo git fetch --all
sudo git reset --hard origin/master

echo "updated at" > /home/pi/Desktop/Lastupdate.txt
date >> /home/pi/Desktop/Lastupdate.txt
sudo git pull origin master >> /home/pi/Desktop/Lastupdate.txt
sudo chmod +x /var/www/html/*.sh
killall chromium-browser
sudo /var/www/html/keepchromiumopen.sh
