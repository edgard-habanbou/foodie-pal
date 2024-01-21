import ReactECharts from 'echarts-for-react'

import PropTypes from 'prop-types'

function EChart({ title, legend, xAxis, series }) {
  const option = {
    title: {
      text: title
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
      data: legend
    },
    xAxis: {
      data: xAxis
    },
    yAxis: {},
    series: series
  }

  return (
    <div>
      <ReactECharts option={option} style={{ height: 400 }} opts={{ locale: 'En' }} />
    </div>
  )
}

EChart.propTypes = {
  title: PropTypes.string.isRequired,
  legend: PropTypes.array.isRequired,
  xAxis: PropTypes.array.isRequired,
  series: PropTypes.array.isRequired
}

export default EChart
