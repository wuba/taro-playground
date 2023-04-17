package com.tarodemo;
import android.content.res.Configuration;
import expo.modules.ApplicationLifecycleDispatcher;
import expo.modules.ReactNativeHostWrapper;

import android.app.Application;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.soloader.SoLoader;

import com.tarodemo.devmanager.TaroDevManager;
import com.tarodemo.devmanager.TaroReactNativeHost;

public class MainApplication extends Application implements ReactApplication {

  private static MainApplication instance = null;

  private final TaroReactNativeHost mTaroReactNativeHost =
    new TaroReactNativeHost(this);
  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHostWrapper(this, mTaroReactNativeHost);

  public TaroReactNativeHost getTaroReactNativeHost() {
    return mTaroReactNativeHost;
  }

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    instance = this;
    TaroDevManager.init();
    SoLoader.init(this, /* native exopackage */ false);
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      // If you opted-in for the New Architecture, we load the native entry point for this app.
      DefaultNewArchitectureEntryPoint.load();
    }
    ReactNativeFlipper.initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
    ApplicationLifecycleDispatcher.onApplicationCreate(this);
  }

  public static MainApplication getInstance() {
    return instance;
  }

  @Override
  public void onConfigurationChanged(Configuration newConfig) {
    super.onConfigurationChanged(newConfig);
    ApplicationLifecycleDispatcher.onConfigurationChanged(this, newConfig);
  }
}
