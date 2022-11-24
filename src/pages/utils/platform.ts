import { platformApi } from 'zrender/lib/core/platform'
import { DEFAULT_FONT_FAMILY, defaultWidthMapStr } from './font'

const DEFAULT_FONT_SIZE = 12;
const DEFAULT_FONT = DEFAULT_FONT_SIZE + "px " + DEFAULT_FONT_FAMILY;

const OFFSET = 20;
const SCALE = 100;

function getTextWidthMap(mapStr) {
  const map = {};
  if (typeof JSON === 'undefined') {
    return map;
  }
  for (let i = 0; i < mapStr.length; i++) {
    const char = String.fromCharCode(i + 32);
    const size = (mapStr.charCodeAt(i) - OFFSET) / SCALE;
    map[char] = size;
  }
  return map;
}
const DEFAULT_TEXT_WIDTH_MAP = getTextWidthMap(defaultWidthMapStr);

export const measureText = (function () {
  let _ctx;
  let _cachedFont;
  return function (text, font) {
    if (!_ctx) {
      const canvas = platformApi.createCanvas();
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
      const res = /([0-9]*?)px/.exec(font);
      const fontSize = res ? +res[1] : DEFAULT_FONT_SIZE;
      let width = 0;
      if (font.indexOf('mono') >= 0) {
        width = fontSize * text.length;
      }
      else {
        for (var i = 0; i < text.length; i++) {
          var preCalcWidth = DEFAULT_TEXT_WIDTH_MAP[text[i]];
          width += preCalcWidth == null ? fontSize : (preCalcWidth * fontSize);
        }
      }

      return { width: width };
    }
  };
})()
