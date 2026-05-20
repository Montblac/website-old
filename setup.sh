#!/bin/bash
# Run this after extracting the archive
echo "Installing dependencies..."
rm -rf node_modules package-lock.json
npm install
echo "Done! Run 'npm run dev' to start."
