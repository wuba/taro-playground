package com.tarodemo.devmanager

import android.app.Application
import com.facebook.react.*
import com.tarodemo.BuildConfig
import com.tarodemo.generated.BasePackageList
import org.unimodules.adapters.react.ModuleRegistryAdapter
import org.unimodules.adapters.react.ReactModuleRegistryProvider

class TaroReactNativeHost(application: Application) : ReactNativeHost(application) {

    private val mModuleRegistryProvider =
            ReactModuleRegistryProvider(BasePackageList().packageList, null)

    var jsMainModulePath: String? = "index"

    override fun getUseDeveloperSupport() = true

    override fun getJSMainModuleName() = jsMainModulePath

    override fun getPackages(): List<ReactPackage>? {
        val uniModules = listOf<ReactPackage>(
                ModuleRegistryAdapter(mModuleRegistryProvider)
        )
        return PackageList(this).packages.apply {
            addAll(uniModules)
            add(DevManagerPackage())
        }
    }

    override fun createReactInstanceManager(): ReactInstanceManager {
        TaroDevManager.reset()
        return super.createReactInstanceManager()
    }
}