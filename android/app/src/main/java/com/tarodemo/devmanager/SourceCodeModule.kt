package com.tarodemo.devmanager

import com.facebook.fbreact.specs.NativeSourceCodeSpec
import com.facebook.infer.annotation.Assertions
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import com.tarodemo.devmanager.TaroDevManager.sourceCodeScriptUrl

@ReactModule(name = SourceCodeModule.NAME)
class SourceCodeModule(reactContext: ReactApplicationContext?) : NativeSourceCodeSpec(reactContext) {

    override fun getName() = NAME

    override fun getTypedExportedConstants(): Map<String, Any> {
        var sourceURL = sourceCodeScriptUrl
        if (sourceURL.isNullOrEmpty()) {
            sourceURL = Assertions.assertNotNull(
                    reactApplicationContext.sourceURL,
                    "No source URL loaded, have you initialised the instance?")
        }
        return mapOf("scriptURL" to sourceURL)
    }

    override fun canOverrideExistingModule() = true

    companion object {
        const val NAME = "SourceCode"
    }
}