if [[ $(ps aux | grep -E 'chromium') ]]; then
    echo "chromium running"
else
    echo "chromium dead"
fi