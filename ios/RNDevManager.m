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
                        jsBundleURLForBundleRoot:bundleRoot
                        fallbackResource:nil];
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
  self->_bridge.bundleURL = [[RCTBundleURLProvider sharedSettings] jsBundleURLForFallbackResource:nil
                                                                                fallbackExtension:nil];
  RCTTriggerReloadCommandListeners(@"Dev menu - reset to default");
}

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
  [_bridge reload];
}

@end
