import { setNavigationBarTitle } from '@tarojs/taro';
// import * as echarts from 'echarts/core';
import { useEffect } from 'react';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation
 */
export default function Index() {
  useEffect(() => {
    setNavigationBarTitle({
      title: '柱状图标签旋转'
    });
  }, []);

  const posList = [
    'left',
    'right',
    'top',
    'bottom',
    'inside',
    'insideTop',
    'insideLeft',
    'insideRight',
    'insideBottom',
    'insideTopLeft',
    'insideTopRight',
    'insideBottomLeft',
    'insideBottomRight'
  ] as const;

  const configParameters = {
    rotate: {
      min: -90,
      max: 90
    },
    align: {
      options: {
        left: 'left',
        center: 'center',
        right: 'right'
      }
    },
    verticalAlign: {
      options: {
        top: 'top',
        middle: 'middle',
        bottom: 'bottom'
      }
    },
    position: {
      options: posList.reduce(function(map, pos) {
        map[pos] = pos;
        return map;
      }, {} as Record<string, string>)
    },
    distance: {
      min: 0,
      max: 100
    }
  };

  const config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15
    // onChange: () => {
    //   const labelOption: BarLabelOption = {
    //     rotate: config.rotate as BarLabelOption['rotate'],
    //     align: config.align as BarLabelOption['align'],
    //     verticalAlign: config.verticalAlign as BarLabelOption['verticalAlign'],
    //     position: config.position as BarLabelOption['position'],
    //     distance: config.distance as BarLabelOption['distance']
    //   };
    //   myChart.setOption<echarts.EChartsCoreOption>({
    //     series: [
    //       {
    //         label: labelOption
    //       },
    //       {
    //         label: labelOption
    //       },
    //       {
    //         label: labelOption
    //       },
    //       {
    //         label: labelOption
    //       }
    //     ]
    //   });
    // }
  };

  type BarLabelOption = NonNullable<any>;

  const labelOption: BarLabelOption = {
    show: true,
    position: config.position as BarLabelOption['position'],
    distance: config.distance as BarLabelOption['distance'],
    align: config.align as BarLabelOption['align'],
    verticalAlign: config.verticalAlign as BarLabelOption['verticalAlign'],
    rotate: config.rotate as BarLabelOption['rotate'],
    formatter: '{c}  {name|{a}}',
    fontSize: 16,
    rich: {
      name: {}
    }
  };

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Forest', 'Steppe', 'Desert', 'Wetland']
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar', 'stack'] },
        restore: { show: true }
        // saveAsImage: { show: true }
      }
    },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: ['2012', '2013', '2014', '2015', '2016']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Forest',
        type: 'bar',
        barGap: 0,
        label: labelOption,
        emphasis: {
          focus: 'series'
        },
        data: [320, 332, 301, 334, 390]
      },
      {
        name: 'Steppe',
        type: 'bar',
        label: labelOption,
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290]
      },
      {
        name: 'Desert',
        type: 'bar',
        label: labelOption,
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190]
      },
      {
        name: 'Wetland',
        type: 'bar',
        label: labelOption,
        emphasis: {
          focus: 'series'
        },
        data: [98, 77, 101, 99, 40]
      }
    ]
  };

  return <Chart option={option} />;
}
