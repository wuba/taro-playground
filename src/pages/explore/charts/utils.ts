import { setPlatformAPI, platformApi } from 'zrender/lib/core/platform'
import { DEFAULT_FONT_FAMILY, defaultWidthMapStr } from './font'

const DEFAULT_FONT_SIZE = 12;
// const DEFAULT_FONT_FAMILY = 'sans-serif';
const DEFAULT_FONT = DEFAULT_FONT_SIZE + "px " + DEFAULT_FONT_FAMILY;

const OFFSET = 20;
const SCALE = 100;
// const defaultWidthMapStr = "55?PPu],55GP.P.FP<PPPPPKPP..PPPJjVX][TN_\,HYOl\aTaXSR[TqTVR5F5HF5LOKOK9OL./I+iLOOO8F7LD_GFE5'5F";
// const asciiRange = [32, 126];

function getTextWidthMap(mapStr) {
  var map = {};
  if (typeof JSON === 'undefined') {
    return map;
  }
  for (var i = 0; i < mapStr.length; i++) {
    var char = String.fromCharCode(i + 32);
    var size = (mapStr.charCodeAt(i) - OFFSET) / SCALE;
    map[char] = size;
  }
  return map;
}
const DEFAULT_TEXT_WIDTH_MAP = getTextWidthMap(defaultWidthMapStr);

export const measureText = (function () {
  var _ctx;
  var _cachedFont;
  return function (text, font) {
    if (!_ctx) {
      var canvas = platformApi.createCanvas();
      _ctx = canvas && canvas.getContext('2d');
    }
    if (_ctx) {
      if (_cachedFont !== font) {
        _cachedFont = _ctx.font = font || DEFAULT_FONT;
      }
      return _ctx.measureText(text);
    }
    else {
      text = text || '';
      font = font || DEFAULT_FONT;
      var res = /([0-9]*?)px/.exec(font);
      var fontSize = res ? +res[1] : DEFAULT_FONT_SIZE;
      var width = 0;
      if (font.indexOf('mono') >= 0) {
        width = fontSize * text.length;
      }
      else {
        for (var i = 0; i < text.length; i++) {
          var preCalcWidth = DEFAULT_TEXT_WIDTH_MAP[text[i]];
          console.log('preCalcWidth', text[i], fontSize, preCalcWidth)
          width += preCalcWidth == null ? fontSize : (preCalcWidth * fontSize);
        }
      }

      console.log('measureText', text, font, width, fontSize)
      return { width: width };
    }
  };
})()

