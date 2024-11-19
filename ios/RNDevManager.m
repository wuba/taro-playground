//
//  RNDevManager.m
//  taroDemo
//
//  Created by 谢伟 on 2021/7/23.
//

#import "RNDevManager.h"
#import <React/RCTBundleURLProvider.h>
#import <React/RCTBridge+Private.h>
#import <React/RCTReloadCommand.h>

@implementation RNDevManager

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE();

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

RCT_EXPORT_METHOD(loadBundleByBundleUrl:(NSString *)bundleUrl bundleRoot:(NSString *)bundleRoot)
{
  if (bundleUrl.length <= 0 || bundleRoot.length <= 0) {
    [self setDefaultJSBundle];
    return;
  }
  [RCTBundleURLProvider sharedSettings].jsLocation = bundleUrl;
  if (_bridge) {
    NSURL *bundleURL = [[RCTBundleURLProvider sharedSettings]
                        jsBundleURLForBundleRoot:bundleRoot];
    _bridge.bundleURL = bundleURL;
    RCTTriggerReloadCommandListeners(@"Dev menu - apply changes");
  }
}

RCT_EXPORT_METHOD(loadDefaultBundle)
{
  [self setDefaultJSBundle];
}

- (void)setDefaultJSBundle
{
  [[RCTBundleURLProvider sharedSettings] resetToDefaults];
  self->_bridge.bundleURL = [[RCTBundleURLProvider sharedSettings] jsBundleURLForFallbackExtension:nil];
  RCTTriggerReloadCommandListeners(@"Dev menu - reset to default");
}

/**
 * This code was copied from "react-native-bundle-loader"
 * <https://github.com/jusbrasil/react-native-bundle-loader/blob/master/ios/BundleLoader.m>.
 * The use of the source code of this file is also subject to the terms
 * and consitions of the license of "react-native-bundle-loader" (MIT, see
 * </licenses/LICENSE-react-native-bundle-loader>).
 */

RCT_EXPORT_METHOD(load:(NSURL*) url) {
  if ([NSThread isMainThread]) {
    [self loadBundle:url];
  } else {
    dispatch_sync(dispatch_get_main_queue(), ^{
        [self loadBundle:url];
    });
  }
  return;
}

- (void)loadBundle:(NSURL *)url
{
  [_bridge setValue:url forKey:@"bundleURL"];
  RCTTriggerReloadCommandListeners(@"reload");
}

/**
 * license statement end
 */

@end
