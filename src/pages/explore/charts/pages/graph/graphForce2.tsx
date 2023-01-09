import { View } from '@tarojs/components';
// import * as echarts from 'echarts/core';
import Chart from '../../echarts';
import '../style.scss';
/**
https://echarts.apache.org/examples/zh/editor.html?c=graph-force2&lang=ts
 */
export default function barPolarRealEstate() {
  function createNodes(count: number) {
    var nodes: any = [];
    for (var i = 0; i < count; i++) {
      nodes.push({
        id: i + ''
      });
    }
    return nodes;
  }

  function createEdges(count: number) {
    var edges: any = [];
    if (count === 2) {
      return [[0, 1]];
    }
    for (var i = 0; i < count; i++) {
      edges.push([i, (i + 1) % count]);
    }
    return edges;
  }

  var datas: any = [];
  for (var i = 0; i < 16; i++) {
    datas.push({
      nodes: createNodes(i + 2),
      edges: createEdges(i + 2)
    });
  }

  const option = {
    series: datas.map(function(item, idx) {
      return {
        type: 'graph',
        layout: 'force',
        animation: false,
        data: item.nodes,
        left: (idx % 4) * 25 + '%',
        top: Math.floor(idx / 4) * 25 + '%',
        width: '25%',
        height: '25%',
        force: {
          // initLayout: 'circular'
          // gravity: 0
          repulsion: 60,
          edgeLength: 2
        },
        edges: item.edges.map(function(e) {
          return {
            source: e[0] + '',
            target: e[1] + ''
          };
        })
      };
    })
  };

  return (
    <View>
      <View className="header">力引导布局</View>
      <View className="body">
        <Chart option={option} />
      </View>
    </View>
  );
}
