package com.tarodemo.devmanager

import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultReactNativeHost
import com.tarodemo.BuildConfig

open class TaroReactNativeHost(application: Application) : DefaultReactNativeHost(application) {

    var jsMainModulePath: String? = "index"

    override fun getUseDeveloperSupport() = true

    override fun getJSMainModuleName() = jsMainModulePath

    override fun getPackages(): List<ReactPackage>? {
        return PackageList(this).packages.apply {
            add(DevManagerPackage())
        }
    }

    override var isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED

    override var isHermesEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED

}
