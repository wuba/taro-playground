package com.tarodemo.devmanager

import com.facebook.react.ReactInstanceManager
import com.facebook.react.bridge.ReactMarker
import com.facebook.react.bridge.ReactMarkerConstants
import com.facebook.react.bridge.UiThreadUtil
import com.facebook.react.packagerconnection.PackagerConnectionSettings
import com.tarodemo.MainApplication
import java.io.File

object TaroDevManager {

    private const val JS_BUNDLE_FILE_NAME = "ReactNativeDevBundle.js"
    private const val JS_BUNDLE_WITH_TAG_BRIDGE_FILE_NAME = "BridgeReactNativeDevBundle.js"

    init {
        ReactMarker.addListener { name, _, _ ->
            // reset debug server host and downloaded bundle file before create ReactInstanceManager
            if (name == ReactMarkerConstants.GET_REACT_INSTANCE_MANAGER_START) {
                reset()
            }
        }
    }

    private val application = MainApplication.getInstance()
    private val packagerConnectionSettings = PackagerConnectionSettings(application)

    private val reactNativeHost = application.reactNativeHost
    private val reactInstanceManager get() = reactNativeHost.reactInstanceManager
    private val devSupportManager get() = reactInstanceManager.devSupportManager

    var sourceCodeScriptUrl = ""
        private set

    @JvmStatic
    fun init() {
    }

    fun loadBundleByBundleUrl(host: String, jsMainModulePath: String) {
        sourceCodeScriptUrl = ""
        setDebugHttpHost(host)
        setJsMainModuleName(jsMainModulePath)
        reloadJS()
    }

    fun loadBundle(url: String) {
        devSupportManager.reloadJSFromServer(url) {
            sourceCodeScriptUrl = url.substring(0, url.indexOf("/", 8) + 1)
            runOnUiThread {
                runCatching {
                    ReactInstanceManager::class.java.getDeclaredMethod(
                        "onJSBundleLoadedFromServer"
                    ).apply {
                        isAccessible = true
                    }.invoke(reactInstanceManager)
                }
            }
        }
    }

    private fun setDebugHttpHost(host: String) {
        packagerConnectionSettings.debugServerHost = host
    }

    private fun setJsMainModuleName(jsMainModulePath: String) {
        application.taroReactNativeHost.jsMainModulePath = jsMainModulePath
    }

    private fun reset() {
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

    private fun reloadJS() {
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