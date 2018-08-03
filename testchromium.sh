if [[ $(pidof chromium-browser) ]]; then
    echo "chromium running"
else
    echo "chromium dead"
fi