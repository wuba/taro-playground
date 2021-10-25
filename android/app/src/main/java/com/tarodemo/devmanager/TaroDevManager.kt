package com.tarodemo.devmanager

import com.facebook.react.ReactInstanceManager
import com.facebook.react.bridge.UiThreadUtil
import com.facebook.react.devsupport.interfaces.DevSupportManager
import com.facebook.react.packagerconnection.PackagerConnectionSettings
import com.tarodemo.MainApplication
import java.io.File

object TaroDevManager {

    private const val JS_BUNDLE_FILE_NAME = "ReactNativeDevBundle.js"
    private const val JS_BUNDLE_WITH_TAG_BRIDGE_FILE_NAME = "BridgeReactNativeDevBundle.js"

    private val application = MainApplication.getInstance()
    private val packagerConnectionSettings = PackagerConnectionSettings(application)

    @JvmStatic
    val reactNativeHost: TaroReactNativeHost = TaroReactNativeHost(application)
    val reactInstanceManager: ReactInstanceManager get() = reactNativeHost.reactInstanceManager
    val devSupportManager: DevSupportManager get() = reactInstanceManager.devSupportManager

    fun loadBundleByBundleUrl(host: String, jsMainModulePath: String) {
        setDebugHttpHost(host)
        setJsMainModuleName(jsMainModulePath)
        reloadJS()
    }

    fun setDebugHttpHost(host: String) {
        packagerConnectionSettings.debugServerHost = host
    }

    fun setJsMainModuleName(jsMainModulePath: String) {
        reactNativeHost.jsMainModulePath = jsMainModulePath
    }

    fun reset() {
        // remove downloaded js bundle file
        removeDownloadedJsBundleFile()
        // apply empty debug server
        setDebugHttpHost("")
    }

    private fun removeDownloadedJsBundleFile() {
        File(application.filesDir, JS_BUNDLE_FILE_NAME).delete()
        // bundle file has it`s unique tag
        // see https://github.com/facebook/react-native/blob/652cb541a50f9f8e5e9aeafb95898f7381e16614/ReactAndroid/src/main/java/com/facebook/react/devsupport/DevSupportManagerBase.java#L197
        File(application.filesDir, JS_BUNDLE_WITH_TAG_BRIDGE_FILE_NAME).delete()
    }

    @JvmStatic
    fun clearReactNativeHost() {
        runOnUiThread { reactNativeHost.clear() }
    }

    fun reloadJS() {
        runOnUiThread { devSupportManager.handleReloadJS() }
    }

    private fun runOnUiThread(runnable: () -> Unit) {
        if (UiThreadUtil.isOnUiThread()) {
            runnable()
        } else {
            UiThreadUtil.runOnUiThread(runnable)
        }
    }
}