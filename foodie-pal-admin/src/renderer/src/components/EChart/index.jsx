import ReactECharts from 'echarts-for-react'
import PropTypes from 'prop-types'

function EChart({ title, legend, xAxis, series, yAxis }) {
  const darkThemeColors = ['#2F4F4F', '#708090', '#696969', '#D3D3D3', '#778899']

  const option = {
    title: {
      text: title,
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
    series: series.map((s, index) => ({
      ...s,
      itemStyle: {
        color: darkThemeColors[index % darkThemeColors.length]
      }
    })),
    backgroundColor: '#1E1E1E'
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
  xAxis: PropTypes.object.isRequired,
  yAxis: PropTypes.object.isRequired,
  series: PropTypes.array.isRequired
}

export default EChart
