import { useRef, useState } from 'react';
import Taro from '@tarojs/taro';
import { View, Video, Button } from '@tarojs/components';
import { hadlePermissionsDeny } from '@/utils/index'

import "./index.scss";

const path = "https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/6820cfd5e0346eac050e7c3f0df78f65.mp4";

/**
 * 媒体-视频
 * @returns
 */
const Index = () => {
  const videoContext = useRef<any>({});

  const [filePath, setFilePage] = useState(path);

  const _onLoadedMetaData = () => {
    videoContext.current = Taro.createVideoContext("video");
  }

  const _chooseVideo = () => {
    Taro.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
    }).then((res: any) => {
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
    videoContext.current.requestFullScreen({});
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
        className='preview'
        onLoadedMetaData={_onLoadedMetaData}
        src={filePath}
        controls
        autoplay
        initialTime={0}
        loop={false}
        muted={false}
        // @ts-ignore
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

export default Index;
