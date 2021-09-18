import Taro from '@tarojs/taro'

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
