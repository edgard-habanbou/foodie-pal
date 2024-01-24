import ReactECharts from 'echarts-for-react'
import PropTypes from 'prop-types'

function EChart({ title, legend, xAxis, series, yAxis }) {
  const option = {
    title: {
      text: title,
      left: 'center',
      textStyle: {
        color: '#D3D3D3'
      }
    },
    toolbox: {
      feature: {
        saveAsImage: {},
        dataZoom: {},
        restore: {}
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: legend.data,
      textStyle: {
        color: '#D3D3D3'
      }
    },
    xAxis: {
      ...xAxis,
      axisLine: {
        lineStyle: {
          color: '#D3D3D3'
        }
      },
      axisLabel: {
        color: '#D3D3D3'
      }
    },
    yAxis: {
      ...yAxis,
      axisLine: {
        lineStyle: {
          color: '#D3D3D3'
        }
      },
      axisLabel: {
        color: '#D3D3D3'
      }
    },
    series: series.map((s) => ({
      ...s,
      itemStyle: {
        color: '#fe8a01'
      }
    })),
    backgroundColor: 'rgba(30, 30, 30, 0.5)'
  }

  return (
    <div>
      <ReactECharts option={option} style={{ height: 300 }} opts={{ locale: 'En' }} />
    </div>
  )
}

EChart.propTypes = {
  title: PropTypes.string.isRequired,
  legend: PropTypes.array.isRequired,
  xAxis: PropTypes.object.isRequired,
  yAxis: PropTypes.object.isRequired,
  series: PropTypes.array.isRequired
}

export default EChart
