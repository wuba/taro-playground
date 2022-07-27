import Taro, { ENV_TYPE, getEnv } from '@tarojs/taro'

export const isWeb = getEnv() === ENV_TYPE.WEB

export const isRN = getEnv() === ENV_TYPE.RN

export const notMini = isWeb || isRN

interface pageType {
  url: string
  title: string
  right?: string
  open?: string
  certified?: boolean
}

export function loadWeb({ url, title, right, open, certified = true }: pageType): void {
  if(isWeb) {
    window.location.href = url
  } else {
    Taro.navigateTo({
      url: `/pages/webview/index?certified=${certified}&title=${title}&link=${encodeURIComponent(url)}${ right ? `&right=${right}` :''}${ open ? `&open=${encodeURIComponent(open)}` :''}`
    })
  }
}

export function loadMini({ url }) {
  Taro.navigateTo({
    url: '/pages/about/mini?src=' + encodeURIComponent(url),
  })
}

export function loadRn({ android, ios }) {
  Taro.navigateTo({
    url: '/pages/about/rn?android=' + encodeURIComponent(android) + '&ios=' + encodeURIComponent(ios),
  })
}

export function hadlePermissionsDeny({ perssionText }: { perssionText: string }): void {
  Taro.showModal({
    title: '提示',
    content: `请在“设置-隐私-${perssionText}”选项中，允许 Taro 访问你的${perssionText}。`,
    confirmColor: '#6190E8',
    success: function (res) {
      if (res.confirm) {
        Taro.openSetting();
      }
    }
  })
}

/**
 * @description 函数防抖
 * @export
 * @param {*} func 目标函数
 * @param {*} wait 延迟执行毫秒数
 * @param {boolean} [immediate=true] true - 立即执行， false - 延迟执行
 */
export function debounce(func, wait, immediate=true) {
  let timer;
  return function () {
    let context = this,
      args = arguments;

    if (timer) clearTimeout(timer);
    if (immediate) {
      let callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timer = setTimeout(() => {
        func.apply(context, args);
      }, wait)
    }
  }
}


/**
 * @description 节流函数
 * @export
 * @param {*} func 目标函数
 * @param {*} wait 节流时间,x时间内只执行1次
 */
export function throttle(func, wait) {
  let previous = 0;
  return function () {
    let now = Date.now();
    let context = this;
    let args = arguments;
    if (now - previous > wait) {
      func.apply(context, args);
      previous = now;
    }
  }
}

export function randomColor() {
  return `#${Math.floor(Math.random()*16777215).toString(16)}`
}