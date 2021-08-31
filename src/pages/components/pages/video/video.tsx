import React from "react";
import Taro from "@tarojs/taro";
import { View, Video, Button } from "@tarojs/components";
import Header from "@/components/head/head";
import "./video.scss";

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
                src="https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/6820cfd5e0346eac050e7c3f0df78f65.mp4"
                controls
                autoplay
                initialTime={0}
                loop={false}
                muted={false}
                // @ts-ignore
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
