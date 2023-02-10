import { setNavigationBarTitle } from '@tarojs/taro';
import { useEffect, useRef, useCallback } from 'react';
import Chart from '../../echarts';
import '../style.scss';
/**
https://echarts.apache.org/examples/zh/editor.html?c=pie-parliament-transition
 */
const data = [
  { value: 800, name: 'A' },
  { value: 635, name: 'B' },
  { value: 580, name: 'C' },
  { value: 484, name: 'D' },
  { value: 300, name: 'E' },
  { value: 200, name: 'F' }
];
const defaultPalette = [
  // '#51689b', '#ce5c5c', '#fbc357', '#8fbf8f', '#659d84', '#fb8e6a', '#c77288', '#786090', '#91c4c5', '#6890ba'
  '#5470c6',
  '#91cc75',
  '#fac858',
  '#ee6666',
  '#73c0de',
  '#3ba272',
  '#fc8452',
  '#9a60b4',
  '#ea7ccc'
];
const radius = ['30%', '80%'];
const pieOption = {
  series: [
    {
      type: 'pie',
      id: 'distribution',
      radius: radius,
      label: {
        show: false
      },
      universalTransition: true,
      animationDurationUpdate: 1000,
      data: data
    }
  ]
};
const parliamentOption = (function () {
  let sum = data.reduce(function (s, cur) {
    return s + cur.value;
  }, 0);
  let angles = [] as any;
  let startAngle = -Math.PI / 2;
  let curAngle = startAngle;
  data.forEach(function (item) {
    angles.push(curAngle);
    curAngle += (item.value / sum) * Math.PI * 2;
  });
  angles.push(startAngle + Math.PI * 2);
  function parliamentLayout(startA, endA, totalAngle, r0, r1, size) {
    let rowsCount = Math.ceil((r1 - r0) / size);
    let points = [] as any;
    let r = r0;
    for (let i = 0; i < rowsCount; i++) {
      // Recalculate size
      let totalRingSeatsNumber = Math.round((totalAngle * r) / size);
      let newSize = (totalAngle * r) / totalRingSeatsNumber;
      for (
        let k = Math.floor((startA * r) / newSize) * newSize;
        k < Math.floor((endA * r) / newSize) * newSize - 1e-6;
        k += newSize
      ) {
        let angle = k / r;
        let x = Math.cos(angle) * r;
        let y = Math.sin(angle) * r;
        points.push([x, y]);
      }
      r += size;
    }
    return points;
  }
  return {
    series: {
      type: 'custom',
      id: 'distribution',
      data: data,
      coordinateSystem: undefined,
      universalTransition: true,
      animationDurationUpdate: 1000,
      renderItem: function (params, api) {
        var idx = params.dataIndex;
        var viewSize = Math.min(api.getWidth(), api.getHeight());
        var r0 = ((parseFloat(radius[0]) / 100) * viewSize) / 2;
        var r1 = ((parseFloat(radius[1]) / 100) * viewSize) / 2;
        var cx = api.getWidth() * 0.5;
        var cy = api.getHeight() * 0.5;
        var size = viewSize / 50;
        var points = parliamentLayout(
          angles[idx],
          angles[idx + 1],
          Math.PI * 2,
          r0,
          r1,
          size + 3
        );
        return {
          type: 'group',
          children: points.map(function (pt) {
            return {
              type: 'circle',
              autoBatch: true,
              shape: {
                cx: cx + pt[0],
                cy: cy + pt[1],
                r: size / 2
              },
              style: {
                fill: defaultPalette[idx % defaultPalette.length]
              }
            };
          })
        };
      }
    }
  };
})();
export default function PieParliamentTransition() {
  const myChart = useRef<any>([]);
  useEffect(() => {
    setNavigationBarTitle({ title: '自定义议会图与饼图过渡动画' })
    let currentOption:any = (pieOption);
    const interval = setInterval(function () {
      currentOption = currentOption === pieOption ? parliamentOption : pieOption;
      myChart.current.map(chart => {
        chart.setOption(currentOption);
      });
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [])
  const onInit = useCallback(chart => {
    myChart.current.push(chart);
  }, []);
  return <Chart option={pieOption} onSVGInit={onInit} onSkiaInit={onInit} />;
}
