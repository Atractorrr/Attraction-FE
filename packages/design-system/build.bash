#!/bin/bash

SRC_DIR="src"
CHECKSUM_FILE="src_checksums.txt"

generate_checksums() {
    local dir_path="$1"
    local output_file="$2"
    find "$dir_path" -type f -exec shasum -a 256 {} \; | sort > "$output_file"
}

check_changes() {
    local dir_path="$1"
    local old_checksum_file="$2"
    local new_checksum_file="new_$old_checksum_file"

    generate_checksums "$dir_path" "$new_checksum_file"

    if diff "$old_checksum_file" "$new_checksum_file" > /dev/null; then
        rm "$new_checksum_file"
        return 0
    else
        mv "$new_checksum_file" "$old_checksum_file"
        return 1
    fi
}

initialize_checksums() {
    if [ ! -f "$CHECKSUM_FILE" ]; then
        generate_checksums "$SRC_DIR" "$CHECKSUM_FILE"
    fi
}

initialize_checksums

build_needed=false

check_changes "$SRC_DIR" "$CHECKSUM_FILE"
src_changed=$?

if [ "$src_changed" -eq 1 ]; then
    build_needed=true
fi

if [ "$build_needed" = true ]; then
    echo "[📚design-system] A file change in the directory was detected. The build has started."
    tsup
else
    echo "[📚design-system] No file changes were detected at the directory. The build has cancelled."
    exit 0
fi