#!/bin/bash

files=("src/emoji/react/index.tsx" "src/outline/react/index.tsx")

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    rm "$file"
  fi
done