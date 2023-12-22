package com.tarodemo
import android.content.res.Configuration
import expo.modules.ApplicationLifecycleDispatcher
import expo.modules.ReactNativeHostWrapper

import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactHost
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.react.flipper.ReactNativeFlipper
import com.facebook.soloader.SoLoader

import com.tarodemo.devmanager.TaroDevManager
import com.tarodemo.devmanager.TaroReactNativeHost

class MainApplication : Application(), ReactApplication {

  companion object {
      lateinit var instance: MainApplication
          private set
  }

  private val mTaroReactNativeHost: TaroReactNativeHost = TaroReactNativeHost(this)
  private val mReactNativeHost: ReactNativeHost = ReactNativeHostWrapper(this, mTaroReactNativeHost)

  override fun getReactNativeHost(): ReactNativeHost = mReactNativeHost

  fun getTaroReactNativeHost(): TaroReactNativeHost = mTaroReactNativeHost

  override fun onCreate() {
    super.onCreate()
    instance = this
    TaroDevManager.init()
    SoLoader.init(this, false)
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      // If you opted-in for the New Architecture, we load the native entry point for this app.
      load()
    }
    ReactNativeFlipper.initializeFlipper(this, reactNativeHost.reactInstanceManager)
    ApplicationLifecycleDispatcher.onApplicationCreate(this)
  }

  override fun onConfigurationChanged(newConfig: Configuration) {
    super.onConfigurationChanged(newConfig)
    ApplicationLifecycleDispatcher.onConfigurationChanged(this, newConfig)
  }
}
