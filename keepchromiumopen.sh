#!/bin/bash
sleep(5)
while true
do
	if [[ $(pidof /usr/lib/chromium-browser/chromium-browser) ]]; then
		echo "chromium running"
	else
		echo "chromium dead"
		
		chromium-browser --kiosk --incognito http://localhost/
	fi
done