package com.tarodemo;

import android.app.Application;
import android.content.Context;
import android.content.res.Configuration;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.config.ReactFeatureFlags;
import com.facebook.soloader.SoLoader;
import com.tarodemo.BuildConfig;
import com.tarodemo.devmanager.TaroDevManager;
import com.tarodemo.devmanager.TaroReactNativeHost;
import com.tarodemo.newarchitecture.MainApplicationReactNativeHost;

import java.lang.reflect.InvocationTargetException;

import expo.modules.ApplicationLifecycleDispatcher;
import expo.modules.ReactNativeHostWrapper;

public class MainApplication extends Application implements ReactApplication {

  private static MainApplication instance = null;

  private final TaroReactNativeHost mTaroReactNativeHost =
    new TaroReactNativeHost(this);

  private final ReactNativeHost mReactNativeHost =
    new ReactNativeHostWrapper(this, mTaroReactNativeHost);

  private final TaroReactNativeHost mNewArchitectureTaroNativeHost =
    new MainApplicationReactNativeHost(this);

  private final ReactNativeHost mNewArchitectureNativeHost =
    new ReactNativeHostWrapper(this, mNewArchitectureTaroNativeHost);

  public TaroReactNativeHost getTaroReactNativeHost() {
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      return mNewArchitectureTaroNativeHost;
    } else {
      return mTaroReactNativeHost;
    }
  }

  @Override
  public ReactNativeHost getReactNativeHost() {
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      return mNewArchitectureNativeHost;
    } else {
      return mReactNativeHost;
    }
  }

  @Override
  public void onCreate() {
    super.onCreate();
    instance = this;
    TaroDevManager.init();
    // If you opted-in for the New Architecture, we enable the TurboModule system
    ReactFeatureFlags.useTurboModules = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
    SoLoader.init(this, /* native exopackage */ false);
    initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
    ApplicationLifecycleDispatcher.onApplicationCreate(this);
  }

  public static MainApplication getInstance() {
    return instance;
  }

  /**
   * Loads Flipper in React Native templates. Call this in the onCreate method with something like
   * initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
   *
   * @param context
   * @param reactInstanceManager
   */
  private static void initializeFlipper(
      Context context, ReactInstanceManager reactInstanceManager) {
    if (BuildConfig.DEBUG) {
      try {
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
        Class<?> aClass = Class.forName("com.tarodemo.ReactNativeFlipper");
        aClass
            .getMethod("initializeFlipper", Context.class, ReactInstanceManager.class)
            .invoke(null, context, reactInstanceManager);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      } catch (InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }

  @Override
  public void onConfigurationChanged(Configuration newConfig) {
    super.onConfigurationChanged(newConfig);
    ApplicationLifecycleDispatcher.onConfigurationChanged(this, newConfig);
  }
}
