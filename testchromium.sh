if [[ $(pidof /usr/lib/chromium-browser/chromium-browser) ]]; then
    echo "chromium running"
else
    echo "chromium dead"
fi