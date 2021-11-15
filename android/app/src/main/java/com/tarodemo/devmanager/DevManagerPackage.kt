package com.tarodemo.devmanager

import android.view.View
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ReactShadowNode
import com.facebook.react.uimanager.ViewManager

class DevManagerPackage : ReactPackage {

    override fun createNativeModules(reactContext: ReactApplicationContext) =
        mutableListOf(RNDevManagerModule(), SourceCodeModule(reactContext))

    override fun createViewManagers(reactContext: ReactApplicationContext) =
        mutableListOf<ViewManager<View, ReactShadowNode<*>>>()
}