/*
 * @Author: iChengbo
 * @Date: 2021-08-02 14:24:25
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-08-02 15:02:30
 * @FilePath: /taro-react-native/src/pages/apis/pages/media/video/index.tsx
 */
import { useRef, useState } from 'react';
import Taro from '@tarojs/taro';
import { View, Video, Button } from '@tarojs/components';
import { hadlePermissionsDeny } from '@/utils/index'

const path = "https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/6820cfd5e0346eac050e7c3f0df78f65.mp4";

const PageView = () => {
  const videoContext = useRef({});

  const [filePath, setFilePage] = useState(path);

  const _onLoadedMetaData = () => {}

  const _chooseVideo = () => {
    Taro.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
    }).then(res => {
      setFilePage(res.tempFilePath);
    }).catch(err => {
      if (err.errMsg === 'Permissions denied!') {
        hadlePermissionsDeny({
          perssionText: '相机或照片'
        })
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
