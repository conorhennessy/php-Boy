# php-Boy
An in house wall diplay for general information


requires raspberry pi with java and chromium


`@lxterminal` was added to
`~/.config/lxsession/LXDE-pi/autostart`
to create a terminal at startup

The line `./superscript`
was added to `~.bashrc`

a file called superscript was created and reads:
`sudo java -jar /var/www/html/ZooqleTopSeedstofile.jar &
/var/www/html/UpdateFromGit.sh
/var/www/html/keepchromiumopen.sh`


 
on login the pi now, updates from git, opens chromium (reopens if it crashes) and opens a java program to scrape/process data
 



![alt text](https://raw.githubusercontent.com/conorhennessy/php-Boy/master/preview.jpg)

keep the screen on:

1. type 'sudo nano /etc/lightdm/lightdm.conf' in terminal

2. Find [Seat:*] in the file and add 'xserver-command=X -s 0 dpms' to the line below

3. Reboot

taken from https://www.raspberrypi.org/forums/viewtopic.php?t=18200
