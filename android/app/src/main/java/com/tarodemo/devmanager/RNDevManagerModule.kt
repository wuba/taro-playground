package com.tarodemo.devmanager

import com.facebook.react.bridge.BaseJavaModule
import com.facebook.react.bridge.ReactMethod

class RNDevManagerModule : BaseJavaModule() {

    override fun getName() = "RNDevManager"

    @ReactMethod
    fun loadBundleByBundleUrl(host: String?, jsMainModulePath: String?) {
        if (host.isNullOrEmpty() || jsMainModulePath.isNullOrEmpty()) {
            return
        }
        TaroDevManager.loadBundleByBundleUrl(host, jsMainModulePath)
    }

    @ReactMethod
    fun load(url: String?) {
        url?.let { TaroDevManager.loadBundle(it) }
    }
}