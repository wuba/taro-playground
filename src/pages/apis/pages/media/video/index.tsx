import { useRef, useState } from 'react';
import Taro from '@tarojs/taro';
import { View, Video, Button, Image } from '@tarojs/components';
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
  const [fileType, setFileType] = useState('video');

  const _onLoadedMetaData = () => {
    videoContext.current = Taro.createVideoContext("video");
  }

  const _chooseVideo = () => {
    Taro.showLoading({})
    Taro.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
    }).then((res: any) => {
      Taro.hideLoading({})
      setFilePage(res.tempFilePath);
      setFileType('video');
    }).catch(err => {
      Taro.hideLoading({})
      if (err.errMsg === 'Permissions denied!') {
        hadlePermissionsDeny({
          perssionText: '相机或照片'
        })
      }
    })
  }

  const _chooseMedia = () => {
    Taro.showLoading({})
    Taro.chooseMedia({
      count: 2,
      mediaType: ['image','video'],
      maxDuration: 60,
      camera: 'back',
    }).then((res: any) => {
      Taro.hideLoading({})
      setFilePage(res.tempFilePaths[0]);
      setFileType(res.tempFiles[0].fileType);
    }).catch(err => {
      Taro.hideLoading({})
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
      {fileType === 'video' && <Video
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
      ></Video>}
      {fileType === 'image' && <Image
        className='preview'
        src={filePath}
        mode='aspectFit'
      ></Image>}
      <View className='api-page-body'>
        <Button
          type="primary"
          className="api-page-btn-success"
          onClick={_chooseVideo}
        >Taro.chooseVideo</Button>
        <Button
          type="primary"
          className="api-page-btn-success"
          onClick={_chooseMedia}
        >Taro.chooseMedia</Button>
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
