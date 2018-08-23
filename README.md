# php-Boy
An in house wall diplay for general information


requires raspberry pi with java and chromium


@lxterminal was added to
~/.config/lxsession/LXDE-pi/autostart
to create a terminal at startup

The line ./superscript
was added to .bashrc

superscript was created and reads:
/var/www/html/UpdateFromGit.sh
/var/www/html/keepchromiumopen.sh


 
on login the pi now, updates from git and opens chromium (reopens if it crashes)
and and opens a java program to scrape/data
 



![alt text](https://raw.githubusercontent.com/conorhennessy/php-Boy/master/picture2.jpg)
keep the screen on:
https://www.raspberrypi.org/forums/viewtopic.php?t=18200
