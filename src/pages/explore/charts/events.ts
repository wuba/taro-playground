import { useRef } from 'react';
import { PanResponder, PanResponderInstance } from 'react-native';
import { getInstance } from 'zrender/lib/zrender';

declare type HandlerName = 'click' | 'dblclick' | 'mousewheel' | 'mouseout' | 'mouseup' | 'mousedown' | 'mousemove' | 'contextmenu';

function dispatchEvent(zrenderId: number, types: HandlerName[], x: number, y: number) {
    if(zrenderId) {
        var handler = getInstance(zrenderId).handler;
        types.forEach(function (type) {
            handler.dispatch(type, {
                zrX: x,
                zrY: y,
                preventDefault: () => {},
                stopImmediatePropagation: () => {},
                stopPropagation: () => {},
              });
        });
    }
}

export function usePanResponder(): [PanResponderInstance, (number) => void] {
  let zrenderId = 0
  const setZrenderId = (id) => {
    zrenderId = id
  }
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => !!zrenderId,
      onStartShouldSetPanResponderCapture: () => !!zrenderId,
      onMoveShouldSetPanResponder: () => !!zrenderId,
      onMoveShouldSetPanResponderCapture: () => !!zrenderId,
      onPanResponderGrant: ({ nativeEvent }) => {
        dispatchEvent(zrenderId, ['mousedown', 'mousemove'], nativeEvent.locationX, nativeEvent.locationY);
      },
      onPanResponderMove: ({ nativeEvent }) => {
        dispatchEvent(zrenderId, ['mousemove'], nativeEvent.locationX, nativeEvent.locationY);
      },
      onPanResponderTerminationRequest: () => true,
      onPanResponderRelease: ({ nativeEvent }) => {
        dispatchEvent(zrenderId, ['mouseup', 'click'], nativeEvent.locationX, nativeEvent.locationY);
      },
      onPanResponderTerminate: () => {},
      onShouldBlockNativeResponder: () => {
        return false;
      },
    })
  );
  return [panResponder.current, setZrenderId];
}
