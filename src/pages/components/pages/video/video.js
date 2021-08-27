import React from "react";
import Taro from "@tarojs/taro-rn";
import { View, Video, Button } from "@tarojs/components";

import "./video.scss";
import Header from "@/components/head/head";

export default class PageView extends React.Component {
  videoContext;

  onLoadedMetaData = e => {
    console.log(e);
  };

  fullScreen = () => {
    this.videoContext?.requestFullScreen();
  };

  render() {
    return (
      <View className="components-page">
        <View className="components-page__header">
          <Header title="Video" />
        </View>
        <View className="components-page__body">
          <View className="components-page__body-example example">
            <View className="example-body">
              <Video
                id="video"
                onLoadedMetaData={this.onLoadedMetaData}
                src="https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/bed49a933db6b5deedd8b868ec9c8bca.mp4"
                controls
                autoplay
                poster="https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg"
                initialTime={0}
                loop={false}
                muted={false}
                onLoad={() => {
                  this.videoContext = Taro.createVideoContext("video");
                }}
              />

              <Button type="primary" onClick={this.fullScreen}>
                进入全屏
              </Button>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
