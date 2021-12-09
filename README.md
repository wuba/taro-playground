Taro Playground App
====

The Taro Playground App is a cross-platform application developed using Taro, to help developers develop and debug Taro applications. It is initialized using [taro react native template](https://github.com/nervjs/taro-project-templates/tree/v3.1/react-native).

## App Download

| Android | iOS |
| - | - |
| ![](https://pic3.58cdn.com.cn/nowater/fangfe/n_v295dd481b6b2f446592350e3187716d03.png) | ![](https://pic1.58cdn.com.cn/nowater/fangfe/n_v224532e5560314106b6ab32b0a1534a9d.png) |
| https://github.com/wuba/taro-playground/releases | https://apps.apple.com/cn/app/taro-playground/id1576830673 |

## Supportted versions

0. taro: `@tarojs/cli@^3.2.0`
1. framework: 'react'

| Taro version | React Native version | branch |
| - | - | - |
| >= 3.2.0, <= 3.3.9 | 0.64 | [releases/rn-0.64+taro-3.3.9](https://github.com/wuba/taro-playground/tree/releases/rn-0.64+taro-3.3.9) |
| >= 3.3.10 | 0.66 | [main](https://github.com/wuba/taro-playground/tree/main) |
## Quick start

### install react native library
> install peerDependencies of `@tarojs/taro-rn` `@tarojs/components-rn` and `@tarojs/router-rn`, it will also run `post-install`. please modify and run `upgradePeerdeps` script when you change taro version.
> 
> **run this script after the project is initialized.**

`yarn upgradePeerdeps`

### pod install
> run this script when you add new react native library or update react native library version.
> 
> see [pod-install](https://www.npmjs.com/package/pod-install) for more information.

`yarn podInstall`

### start ios app

`yarn ios`

### start android app

`yarn android`

### start bundler

`yarn start`

### reset cache and start bundler

`yarn start --reset-cache`

### more information

0. [development process of taro react native](https://taro-docs.jd.com/taro/docs/react-native)
1. [github address of the taro project](https://github.com/NervJS/taro)
2. [related articles of taro playground](https://docs.taro.zone/blog/2021-10-14-Taro-React-Native-update)

## Release

### build ios bundle

`yarn build:rn --platform ios`

### build Android bundle

`yarn build:rn --platform android`

### release ios APP

see [publishing-to-app-store](https://reactnative.cn/docs/publishing-to-app-store) for details.

### release android apk

see [signed-apk-android](https://reactnative.cn/docs/signed-apk-android) for details.

## Github workflows
> use github actions to build your apps. this template include basic github action config.

see [.github/workflows](.github/workflows) for details.

### events

we assemble debug and release product for both android and ios when you push or pull request on master branch by default. design your own pipeline by modify [.github/workflows](.github/workflows) files.

see [events-that-trigger-workflows](https://docs.github.com/en/actions/reference/events-that-trigger-workflows) 
### ios

#### configuration

Modify the following configuration items for package and publish your app.

> [.github/workflows/assemble_ios_debug.yml](.github/workflows/assemble_ios_debug.yml)
> [.github/workflows/assemble_ios_release.yml](.github/workflows/assemble_ios_release.yml)

```yml
env:
  APP_ID: com.taro.demo # Application Product Bundle Identifier
  APP_NAME: Taro Demo # The Display Name of your app
  IOS_VERSION_NUMBER: 1.0.0 # Application version number
  IOS_BUILD_NUMBER: 1.0.0.0 # Application build number, used by release only.
  IOS_TEAM_ID: XXXXXXXXXX # Team ID, is used when upgrading project
  IOS_PROVISIONING_PROFILE_SPECIFIER: Product_profile # Provisioning profile name to use for code signing
  IOS_CODE_SIGN_IDENTITY: iPhone Distribution # Code signing identity type (iPhone Developer, iPhone Distribution)
  IOS_SIGNING_CERTIFICATE_P12_DATA: ${{secrets.RELEASE_SIGNING_CERTIFICATE_P12_DATA}}
  IOS_SIGNING_CERTIFICATE_PASSWORD: ${{secrets.RELEASE_SIGNING_CERTIFICATE_PASSWORD}}
  IOS_PROVISIONING_PROFILE_DATA: ${{secrets.RELEASE_PROVISIONING_PROFILE_DATA}}
  IOS_APP_STORE_CONNECT_USERNAME: ${{secrets.APP_STORE_CONNECT_USERNAME}} # This secret should be set to the Apple ID of your developer account, used by release only.
  IOS_APP_STORE_CONNECT_PASSWORD: ${{secrets.APP_STORE_CONNECT_PASSWORD}} # used by release only.
```

values like ${{secrets.xxxxx}} are manually generated and store in your github encrypted secrets.

##### SIGNING_CERTIFICATE_P12_DATA

`cat Certificates.p12 | base64 | pbcopy`

##### SIGNING_CERTIFICATE_PASSWORD

encryption password of your Personal Information Exchange (.p12)

##### PROVISIONING_PROFILE_DATA

`cat profile.mobileprovision | base64 | pbcopy`

##### APP_STORE_CONNECT_PASSWORD

This secret should be set to an application-specific password for your Apple ID account. Follow [these instructions](https://support.apple.com/en-us/HT204397) to create an application-specific password.

#### read more

1. [deploy an ios app to testflight or the app store using github actions](https://betterprogramming.pub/deploy-an-ios-app-to-testflight-or-the-app-store-using-github-actions-c4d7082b1430)
2. [encrypted-secrets](https://docs.github.com/en/actions/reference/encrypted-secrets)
3. [fastlane](https://docs.fastlane.tools/)

### android

#### configuration

Modify the following configuration items for package and publish your app.

> [.github/workflows/assemble_android_debug.yml](.github/workflows/assemble_android_debug.yml)
> [.github/workflows/assemble_android_release.yml](.github/workflows/assemble_android_release.yml)

```yml
env:
  APP_ID: com.taro.demo  # Application Product Bundle Identifier
  APP_NAME: Taro Demo  # The Display Name of your app
  ANDROID_VERSION_NAME: 1.0.0 # version name
  ANDROID_VERSION_CODE: 10 # version code
  ANDROID_KEYSTORE_FILE: debug.keystore # key store file
  ANDROID_KEYSTORE_PASSWORD: android # key store password
  ANDROID_KEYSTORE_KEY_ALIAS: androiddebugkey # key store key alias
  ANDROID_KEYSTORE_KEY_PASSWORD: android # key store key password
```

For the security of your app, please regenerate the .keystore file and store the password in your github encrypted secrets.
#### read more

1. [app signing](https://developer.android.com/studio/publish/app-signing)
2. [encrypted-secrets](https://docs.github.com/en/actions/reference/encrypted-secrets)

## Attention

The source code is customized for the Taro playground application and is for reference only. If you want to use it directly, please make the following changes.

0. Use your own signature file.
1. Customize your app id, app name, app launcher, etc.
2. Remove the attention block in ios/Podfile.

## Contributing

We sincerely hope that developers can provide valuable comments and suggestions, and developers can provide feedback on suggestions and problems by submitting PR or Issue.

If you have other questions, you can join the communication group for help.

![](https://pic8.58cdn.com.cn/nowater/fangfe/n_v282625210493c4a3fac202d6cf372458e.png)

## License

Taro Playground source code is available under the Apache License V2.

Taro and its graphic trademarks are owned by Beijing Jingdong Century Trading Co., Ltd. and licensed to the Taro Playground project.
