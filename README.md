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

1. sudo nano /etc/kbd/config

2. Change these two lines.

  screen blanking timeout. monitor remains on, but the screen is cleared to
  range: 0-60 min (0==never) kernels I've looked at default to 10 minutes.
  (see linux/drivers/char/console.c)
 BLANK_TIME=0 (Was 30)

  Powerdown time. The console will go to DPMS Off mode POWERDOWN_TIME
  minutes _after_ blanking. (POWERDOWN_TIME + BLANK_TIME after the last input)
 POWERDOWN_TIME=0 (I think it was 15)

3. Reboot

taken from https://www.raspberrypi.org/forums/viewtopic.php?t=18200
