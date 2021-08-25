package com.tarodemo;
import android.os.Bundle; // here
import com.facebook.react.ReactActivity;
import com.tarodemo.devmanager.TaroDevManager;

import org.devio.rn.splashscreen.SplashScreen; // here

public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);
    super.onCreate(savedInstanceState);
  }

  @Override
  public void finish() {
    // clear ReactNativeHost on Activity finish
    TaroDevManager.clearReactNativeHost();
    super.finish();
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "taroDemo";
  }
}
