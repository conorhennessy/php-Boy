#!/bin/bash

while true
do
	if [[ $(pidof /usr/lib/chromium-browser/chromium-browser) ]]; then
		echo "chromium running"
	else
		echo "chromium dead"
		sed -i 's/"exited_cleanly": false/"exited_cleanly": true/' ~/.config/chromium/Default/Preferences
		sed -i 's/"exit_type": "Crashed"/"exit_type": "None"/' ~/.config/chromium/Default/Preferences
		chromium-browser --kiosk --incognito http://localhost/
	fi
done