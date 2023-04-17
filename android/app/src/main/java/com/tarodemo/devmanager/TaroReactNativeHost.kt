package com.tarodemo.devmanager

import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage

open class TaroReactNativeHost(application: Application) : ReactNativeHost(application) {

    var jsMainModulePath: String? = "index"

    override fun getUseDeveloperSupport() = true

    override fun getJSMainModuleName() = jsMainModulePath

    override fun isNewArchEnabled() = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED

    override fun isHermesEnabled() = BuildConfig.IS_HERMES_ENABLED

    override fun getPackages(): List<ReactPackage>? {
        return PackageList(this).packages.apply {
            add(DevManagerPackage())
        }
    }

}