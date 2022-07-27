#!/bin/bash

current_version=`grep "\"version\"" package.json`
echo "当前版本号为: ${current_version#*:}"

read -p "请输入新版本号（eg: 1.0.0）:" version

# 一.替换 package.json 版本号
oldLine=`grep "\"version\"" package.json`
newLine='  "version": "'${version}'",'

sed -i "" "s/${oldLine}/${newLine}/g" package.json

# 二.替换 workflow android 版本号
# vname
android_debug_line=`grep "VERSION_NAME:" .github/workflows/assemble_android_debug.yml`
android_release_line=`grep "VERSION_NAME:" .github/workflows/assemble_android_release.yml`
android_line="  VERSION_NAME: ${version}"

sed -i "" "s/${android_debug_line}/${android_line}/g" .github/workflows/assemble_android_debug.yml
sed -i "" "s/${android_release_line}/${android_line}/g" .github/workflows/assemble_android_release.yml

# vcode
vcode="`echo $version | tr -d '.'`00"
android_debug_line=`grep "VERSION_CODE:" .github/workflows/assemble_android_debug.yml`
android_release_line=`grep "VERSION_CODE:" .github/workflows/assemble_android_release.yml`
android_line="  VERSION_CODE: ${vcode}"

sed -i "" "s/${android_debug_line}/${android_line}/g" .github/workflows/assemble_android_debug.yml
sed -i "" "s/${android_release_line}/${android_line}/g" .github/workflows/assemble_android_release.yml

# 三.替换 workflow ios 版本号
# MARKETING_VERSION
ios_debug_line=`grep " VERSION_NUMBER:" .github/workflows/assemble_ios_debug.yml`
ios_release_line=`grep " VERSION_NUMBER:" .github/workflows/assemble_ios_release.yml`
ios_line="  VERSION_NUMBER: ${version}"

sed -i "" "s/${ios_debug_line}/${ios_line}/g" .github/workflows/assemble_ios_debug.yml
sed -i "" "s/${ios_release_line}/${ios_line}/g" .github/workflows/assemble_ios_release.yml

# CURRENT_PROJECT_VERSION
ios_build_old=`grep " BUILD_NUMBER:" .github/workflows/assemble_ios_release.yml`
ios_build_new="  BUILD_NUMBER: ${version}.1"

sed -i "" "s/${ios_build_old}/${ios_build_new}/g" .github/workflows/assemble_ios_release.yml
