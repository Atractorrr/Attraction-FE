DIR_PATH="dist"

if [ -n "$(find "$DIR_PATH" -type f -print -quit)" ]; then
    echo "[🔮icons] Build directory is already exist. Build command cancelled"
    exit 0
else
    echo "[🔮icons] Build directory isn't exist. Build command executed"
    tsup
fi
