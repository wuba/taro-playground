package com.tarodemo.devmanager

import android.app.Application
import com.facebook.react.*
import com.tarodemo.BuildConfig
import com.tarodemo.generated.BasePackageList

class TaroReactNativeHost(application: Application) : ReactNativeHost(application) {

    var jsMainModulePath: String? = "index"

    override fun getUseDeveloperSupport() = true

    override fun getJSMainModuleName() = jsMainModulePath

    override fun getPackages(): List<ReactPackage>? {
        return PackageList(this).packages.apply {
            add(DevManagerPackage())
        }
    }

    override fun createReactInstanceManager(): ReactInstanceManager {
        TaroDevManager.reset()
        return super.createReactInstanceManager()
    }
}