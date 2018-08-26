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


 
on login the pi now, updates from git and opens chromium (reopens if it crashes)
and opens a java program to scrape/process data
 



![alt text](https://raw.githubusercontent.com/conorhennessy/php-Boy/master/picture2.jpg)
![alt text](https://raw.githubusercontent.com/conorhennessy/php-Boy/master/picture3.jpg)
keep the screen on:
https://www.raspberrypi.org/forums/viewtopic.php?t=18200
