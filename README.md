# php-Boy
An in house wall diplay for general information


requires raspberry pi with java and chromium

#Robustness update

@lxterminal was added to
~/.config/lxsession/LXDE-pi/autostart
to create a terminal at startup

superscript was created and reads:
/var/www/html/UpdateFromGit.sh
/var/www/html/keepchromiumopen.sh

The line ./superscript
was added to .bashrc
 
on login the pi now, updates from git and opens chromium (reopens if it crashes)
 
 



![alt text](https://raw.githubusercontent.com/conorhennessy/php-Boy/master/picture2.jpg)
keep the screen on:
https://www.raspberrypi.org/forums/viewtopic.php?t=18200
