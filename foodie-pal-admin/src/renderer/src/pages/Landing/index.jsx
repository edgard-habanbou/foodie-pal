import React from 'react'
import ReactECharts from 'echarts-for-react'

import 'echarts/i18n/langFR'

const Landing = () => {
  const option = {
    title: {
      text: 'ECharts'
    },
    toolbox: {
      feature: {
        saveAsImage: {},
        dataZoom: {},
        restore: {}
      }
    },
    tooltip: {},
    legend: {
      data: ['sales volume']
    },
    xAxis: {
      data: ['Shirt', 'Sweater', 'Chiffon blouse', 'Pants', 'High heels', 'Socks']
    },
    yAxis: {},
    series: [
      {
        name: 'sales volume',
        type: 'line',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  }

  return (
    <>
      <ReactECharts option={option} style={{ height: 400 }} opts={{ locale: 'En' }} />
    </>
  )
}

export default Landing
