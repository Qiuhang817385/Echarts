export const option1 = {
  title: {
    text: '用户骑行订单'
  },
  tooltip: {
    trigger: 'axis'
  }, xAxis: {
    data: [
      '周一',
      '周二',
      '周三',
      '周四',
      '周五',
      '周六',
      '周日'
    ]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '订单量',
      type: 'line',
      data: [
        1000,
        2000,
        1500,
        2700,
        2000,
        1200,
        800
      ]
    }
  ],
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 30
  }
}
export const option2 = {
  title: {
    text: '用户骑行订单'
  },
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 30
  },
  legend: {
    data: ['OFO订单量', '摩拜订单量']
  },
  xAxis: {
    data: [
      '周一',
      '周二',
      '周三',
      '周四',
      '周五',
      '周六',
      '周日'
    ]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'OFO订单量',
      type: 'line',
      stack: '总量',
      data: [
        1200,
        3000,
        4500,
        6000,
        8000,
        12000,
        20000
      ]
    },
    {
      name: '摩拜订单量',
      type: 'line',
      stack: '总量',
      data: [
        1000,
        2000,
        5500,
        6000,
        8000,
        10000,
        12000
      ]
    },
  ]
}
export const option3 = {
  title: {
    text: '用户骑行订单'
  },
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 30
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [
      '周一',
      '周二',
      '周三',
      '周四',
      '周五',
      '周六',
      '周日'
    ]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '订单量',
      type: 'line',
      data: [
        1000,
        2000,
        1500,
        3000,
        2000,
        1200,
        800
      ],
      areaStyle: {}
    }
  ]
}