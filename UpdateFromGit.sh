echo "Pulling from Git"
cd /var/www/html/
sudo git fetch --all
sudo git reset --hard origin/master
sudo git pull origin master
sudo chmod +x /var/www/html/*.sh
killall chromium-browser
