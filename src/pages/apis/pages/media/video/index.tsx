/*
 * @Author: iChengbo
 * @Date: 2021-08-02 14:24:25
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-08-02 15:02:30
 * @FilePath: /taro-react-native/src/pages/apis/pages/media/video/index.tsx
 */
import React, { useRef, useState } from 'react';
import Taro from '@tarojs/taro';
import { View, Video, Button } from '@tarojs/components';

const path = "https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/bed49a933db6b5deedd8b868ec9c8bca.mp4";

const PageView = () => {
  const videoContext = useRef({});

  const [filePath, setFilePage] = useState(path);

  const _onLoadedMetaData = () => {}

  const _chooseVideo = () => {
    Taro.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
      success: res => {
        console.log(res.tempFilePath);
        setFilePage(res.tempFilePath);
      },
      fail: err => {
        console.log(err);
      }
    })
  }

  const _requestFullScreen = () => {
    videoContext.current.requestFullScreen();
  }

  const _play = () => {
    videoContext.current.play();
  }
  const _pause = () => {
    videoContext.current.pause();
  }
  const _stop = () => {
    videoContext.current.stop();
  }

  return (
    <View className='api-page'>
      <Video
        id="video"
        onLoadedMetaData={_onLoadedMetaData}
        src={filePath}
        controls
        autoplay
        poster="https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg"
        initialTime={0}
        loop={false}
        muted={false}
        onLoad={() => {
          videoContext.current = Taro.createVideoContext("video");
        }}
      ></Video>
      <View className='api-page-body'>
        <Button
          type="primary"
          className="api-page-btn-success"
          onClick={_chooseVideo}
        >Taro.chooseVideo</Button>
        <Button
          type="primary"
          className="api-page-btn-success"
          onClick={_requestFullScreen}
        >Taro.requestFullScreen</Button>
        <Button
          type="primary"
          className="api-page-btn-success"
          onClick={_play}
        >Taro.play</Button>
        <Button
          type="primary"
          className="api-page-btn-success"
          onClick={_pause}
        >Taro.pause</Button>
        <Button
          type="primary"
          className="api-page-btn-success"
          onClick={_stop}
        >Taro.stop</Button>
      </View>
    </View>
  )
}

export default PageView;
