#!/bin/bash

set -euo pipefail

security create-keychain -p "" build.keychain
security list-keychains -s build.keychain
security default-keychain -s build.keychain
security unlock-keychain -p "" build.keychain
security set-keychain-settings
echo "Importing certificate..."
if [ -z "$SIGNING_CERTIFICATE_P12_DATA" ]; then
  echo "Error: SIGNING_CERTIFICATE_P12_DATA is not set"
  exit 1
fi

if [ -z "$SIGNING_CERTIFICATE_PASSWORD" ]; then
  echo "Error: SIGNING_CERTIFICATE_PASSWORD is not set"
  exit 1
fi
security import <(echo "$SIGNING_CERTIFICATE_P12_DATA" | base64 --decode) \
                -f pkcs12 \
                -k build.keychain \
                -P "$SIGNING_CERTIFICATE_PASSWORD" \
                -T /usr/bin/codesign
echo "Certificate imported successfully"