#!/bin/bash
sleep 5
echo "keeping chromium open"
while true
do
	if [[ $(pidof /usr/lib/chromium-browser/chromium-browser) ]]; then
		echo "chromium already running"
	else
		echo "opening chrome"
		
		chromium-browser --kiosk --incognito http://localhost/index.html &
		sleep 10
		
	fi
done