import { useStores } from '@/hooks'
import { observer } from 'mobx-react'
import React, { useState } from 'react'
import { Card, Row, Col, Select, Menu, Progress, Divider } from 'antd'

import ReactEcharts from 'echarts-for-react'

import {
  AppstoreOutlined,
  SecurityScanOutlined,
  EnvironmentOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  ContainerOutlined,
  MailOutlined
} from '@ant-design/icons'

const option = {
  title: {
    text: '用户量统计'
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
}

// console.log(test())
// console.log(test1())

const colors = ['#5470C6', '#EE6666']

const optionVisit = {
  color: colors,

  tooltip: {
    trigger: 'none',
    axisPointer: {
      type: 'cross'
    }
  },
  legend: {
    data: ['2015 降水量', '2016 降水量']
  },
  grid: {
    top: 70,
    bottom: 50
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: colors[1]
        }
      },
      axisPointer: {
        label: {
          formatter: function (params) {
            return (
              '降水量  ' +
              params.value +
              (params.seriesData.length ? '：' + params.seriesData[0].data : '')
            )
          }
        }
      },
      data: [
        '2016-1',
        '2016-2',
        '2016-3',
        '2016-4',
        '2016-5',
        '2016-6',
        '2016-7',
        '2016-8',
        '2016-9',
        '2016-10',
        '2016-11',
        '2016-12'
      ]
    },
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: colors[0]
        }
      },
      axisPointer: {
        label: {
          formatter: function (params) {
            return (
              '降水量  ' +
              params.value +
              (params.seriesData.length ? '：' + params.seriesData[0].data : '')
            )
          }
        }
      },
      data: [
        '2015-1',
        '2015-2',
        '2015-3',
        '2015-4',
        '2015-5',
        '2015-6',
        '2015-7',
        '2015-8',
        '2015-9',
        '2015-10',
        '2015-11',
        '2015-12'
      ]
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '2015访问量',
      type: 'line',
      xAxisIndex: 1,
      smooth: true,
      emphasis: {
        focus: 'series'
      },
      data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
    },
    {
      name: '2016访问量',
      type: 'line',
      smooth: true,
      emphasis: {
        focus: 'series'
      },
      data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
    }
  ]
}

const optionBase = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
}

const optionBasic = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
}

const optionSize = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['2011年', '2012年']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: [
      'iphone X/S/Max',
      'iphone 6/7/8 Plus',
      'iphone 6/7/8',
      'PBEM00',
      'vivo X21A',
      'PACM00',
      'PCAM00',
      'OPPO R11',
      'iphone',
      'vivo x20A'
    ]
  },
  series: [
    {
      name: '2011年',
      type: 'bar',
      data: [18203, 23489, 29034, 104970, 131744, 630230]
    }
  ]
}

const optionCity = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['2011年', '2012年']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: ['广州', '成都', '贵阳', '郑州', '长沙', '深圳', '武汉', '西安', '合肥']
  },
  series: [
    {
      name: '2011年',
      type: 'bar',
      data: [18203, 23489, 29034, 104970, 131744, 630230]
    }
  ]
}

const optionSystem = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['2011年']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: ['web', 'andriod 6.0.1', 'ios 9.1', 'ios 10.1', 'ios 13.2.3', 'android 5.0']
  },
  series: [
    {
      name: '2011年',
      type: 'bar',
      data: [18203, 23489, 29034, 104970, 131744, 630230]
    }
  ]
}

const Overview: React.FC = observer((props) => {
  const [data, setData] = useState(['1'])
  const changeMode = (value: any) => {
    setData([value.key])
  }

  const mainList = (
    <div>
      <div className="fs-18 b mb-4">核心数据</div>
      <Card title="流量数据">
        <Row>
          <Col span={4}>
            <div className="text-center">浏览量(PV)</div>
            <div className="fs-32 b text-center">20098</div>
            <div className="fs-12 text-center">
              较昨日
              <span className="color-success">5990.3%</span>
              <ArrowUpOutlined className="color-success" />
            </div>
          </Col>
          <Col span={4}>
            <div className="text-center">访客数(PV)</div>
            <div className="fs-32 b text-center">12882</div>
            <div className="fs-12 text-center">
              较昨日
              <span className="color-warning">5990.3%</span>
              <ArrowDownOutlined className="color-warning" />
            </div>
          </Col>
          <Col span={4}>
            <div className="text-center">新访客</div>
            <div className="fs-32 b text-center">9999</div>
            <div className="fs-12 text-center">
              较昨日
              <span className="color-warning">5990.3%</span>
              <ArrowDownOutlined className="color-warning" />
            </div>
          </Col>
          <Col span={4}>
            <div className="text-center">IP数</div>
            <div className="fs-32 b text-center">9999</div>
            <div className="fs-12 text-center">
              较昨日
              <span className="color-warning">5990.3%</span>
              <ArrowDownOutlined className="color-warning" />
            </div>
          </Col>
          <Col span={4}>
            <div className="text-center">频次(人均)</div>
            <div className="fs-32 b text-center">9999</div>
            <div className="fs-12 text-center">
              较昨日
              <span className="color-warning">5990.3%</span>
              <ArrowDownOutlined className="color-warning" />
            </div>
          </Col>
          <Col span={4}>
            <div className="text-center">跳出率</div>
            <div className="fs-32 b text-center">9999</div>
            <div className="fs-12 text-center">
              较昨日
              <span className="color-warning">5990.3%</span>
              <ArrowDownOutlined className="color-warning" />
            </div>
          </Col>
        </Row>
      </Card>
      <Card>
        <ReactEcharts
          option={option}
          style={{ height: '300px', width: '100%' }}
          className={'react_for_echarts'}
        />
      </Card>
      <Row className="mt-4">
        <Col span="7">
          <Card>
            <div className="fs-16 b flex">
              <div className="flex-1">页面访问量趋势</div>
              <div className="color-success ">
                0.27%
                <ArrowUpOutlined className="color-success" />
              </div>
            </div>
            <div className="fs-12 flex">
              <div className="color-info flex-1">2021-05-10</div>
              <div>较一周前</div>
            </div>
            <ReactEcharts
              option={optionVisit}
              style={{ height: '300px', width: '100%' }}
              className={'react_for_echarts'}
            />
          </Card>
        </Col>
        <Col span="7" className="ml-4">
          <Card>
            <div className="fs-16 b flex">
              <div className="flex-1">用户活跃量趋势</div>
              <div className="color-success ">
                2.57%
                <ArrowUpOutlined className="color-success" />
              </div>
            </div>
            <div className="fs-12 flex">
              <div className="color-info flex-1">2021-05-10</div>
              <div>较一周前</div>
            </div>
            <ReactEcharts
              option={optionVisit}
              style={{ height: '300px', width: '100%' }}
              className={'react_for_echarts'}
            />
          </Card>
        </Col>
        <Col span="7" className="ml-4">
          <Card>
            <div className="fs-16 b flex">
              <div className="flex-1">新用户活跃量趋势</div>
              <div className="color-success ">
                2.57%
                <ArrowUpOutlined className="color-success" />
              </div>
            </div>
            <div className="fs-12 flex">
              <div className="color-info flex-1">2021-05-10</div>
              <div>较一周前</div>
            </div>
            <ReactEcharts
              option={optionVisit}
              style={{ height: '300px', width: '100%' }}
              className={'react_for_echarts'}
            />
          </Card>
        </Col>
        <Col span="7" className="ml-4">
          <Card>
            <div className="fs-16 b flex">
              <div className="flex-1">跳出率趋势</div>
              <div className="color-success ">
                2.57%
                <ArrowUpOutlined className="color-success" />
              </div>
            </div>
            <div className="fs-12 flex">
              <div className="color-info flex-1">2021-05-10</div>
              <div>较一周前</div>
            </div>
            <ReactEcharts
              option={optionVisit}
              style={{ height: '300px', width: '100%' }}
              className={'react_for_echarts'}
            />
          </Card>
        </Col>
        <Col span="7" className="ml-4">
          <Card>
            <div className="fs-16 b flex">
              <div className="flex-1">跳出率趋势</div>
              <div className="color-success ">
                2.57%
                <ArrowUpOutlined className="color-success" />
              </div>
            </div>
            <div className="fs-12 flex">
              <div className="color-info flex-1">2021-05-10</div>
              <div>较一周前</div>
            </div>
            <ReactEcharts
              option={optionBase}
              style={{ height: '300px', width: '100%' }}
              className={'react_for_echarts'}
            />
          </Card>
        </Col>
        <Col span="7" className="ml-4">
          <Card>
            <div className="fs-16 b flex">
              <div className="flex-1">新用户次日留存率</div>
              <div className="color-success ">
                2.57%
                <ArrowUpOutlined className="color-success" />
              </div>
            </div>
            <div className="fs-12 flex">
              <div className="color-info flex-1">2021-05-10</div>
              <div>较一周前</div>
            </div>
            <ReactEcharts
              option={optionBasic}
              style={{ height: '300px', width: '100%' }}
              className={'react_for_echarts'}
            />
          </Card>
        </Col>
      </Row>

      <div className="fs-18 b mb-4 mt-4">综合数据</div>
      <Row>
        <Col span="7" className="ml-4">
          <Card>
            <div className="fs-16 b flex">
              <div className="flex-1">设备型号用户量Top 10</div>
              <div className="color-success ">
                2.57%
                <ArrowUpOutlined className="color-success" />
              </div>
            </div>
            <div className="fs-12 flex">
              <div className="color-info flex-1">2021-05-10</div>
              <div>较一周前</div>
            </div>
            <ReactEcharts
              option={optionSize}
              style={{ height: '300px', width: '100%' }}
              className={'react_for_echarts'}
            />
          </Card>
        </Col>

        <Col span="7" className="ml-4">
          <Card>
            <div className="fs-16 b flex">
              <div className="flex-1">城市名称访问用户量Top 10</div>
              <div className="color-success ">
                2.57%
                <ArrowUpOutlined className="color-success" />
              </div>
            </div>
            <div className="fs-12 flex">
              <div className="color-info flex-1">2021-05-10</div>
              <div>较一周前</div>
            </div>
            <ReactEcharts
              option={optionCity}
              style={{ height: '300px', width: '100%' }}
              className={'react_for_echarts'}
            />
          </Card>
        </Col>

        <Col span="7" className="ml-4">
          <Card>
            <div className="fs-16 b flex">
              <div className="flex-1">系统版本用户量Top 10</div>
              <div className="color-success ">
                2.57%
                <ArrowUpOutlined className="color-success" />
              </div>
            </div>
            <div className="fs-12 flex">
              <div className="color-info flex-1">2021-05-10</div>
              <div>较一周前</div>
            </div>
            <ReactEcharts
              option={optionSystem}
              style={{ height: '300px', width: '100%' }}
              className={'react_for_echarts'}
            />
          </Card>
        </Col>
      </Row>
    </div>
  )

  const healthList = (
    <div>
      <div className="fs-18 b mb-4">健康数据</div>

      <Card>
        <Row>
          <Col span={11}>
            <div>健康状态</div>
            <div className="flex v-center">
              <Progress
                type="circle"
                width={120}
                format={(percent) => percent + '分'}
                percent={90}
              />
            </div>
          </Col>
          <Col span={1}>
            <Divider type={'vertical'} style={{ height: 150 }} />
          </Col>
          <Col span={12}>
            <div className="flex v-center">
              <div>
                <Progress
                  type="circle"
                  width={80}
                  status="exception"
                  format={(percent) => percent + '分'}
                  percent={90}
                />
                <div className="text-center mt-2">JS错误</div>
              </div>
              <div className="ml-2">
                <Progress
                  type="circle"
                  width={80}
                  status="success"
                  format={(percent) => percent + '分'}
                  percent={90}
                />

                <div className="text-center mt-2">自定义异常</div>
              </div>
              <div className="ml-2">
                <Progress
                  type="circle"
                  width={80}
                  status="normal"
                  format={(percent) => percent + '分'}
                  percent={90}
                />

                <div className="text-center mt-2">静态资源异常</div>
              </div>
              <div className="ml-2">
                <Progress
                  type="circle"
                  width={80}
                  status="active"
                  strokeColor={{
                    '0%': 'rgb(255, 151, 36)',
                    '100%': 'rgb(255, 151, 36)'
                  }}
                  format={(percent) => percent + '分'}
                  percent={90}
                />
                <div className="text-center mt-2">接口异常</div>
              </div>
            </div>
          </Col>
        </Row>
      </Card>

      <Row>
        <Col span="7" className="mt-4">
          <Card>
            <div className="fs-16 b flex">
              <div className="flex-1">js报错趋势</div>
              <div className="color-success ">
                0.27%
                <ArrowUpOutlined className="color-success" />
              </div>
            </div>
            <div className="fs-12 flex">
              <div className="color-info flex-1">2021-05-10</div>
              <div>较一周前</div>
            </div>
            <ReactEcharts
              option={optionVisit}
              style={{ height: '300px', width: '100%' }}
              className={'react_for_echarts'}
            />
          </Card>
        </Col>
        <Col span="7" className="ml-4 mt-4">
          <Card>
            <div className="fs-16 b flex">
              <div className="flex-1">自定义异常趋势</div>
              <div className="color-success ">
                0.27%
                <ArrowUpOutlined className="color-success" />
              </div>
            </div>
            <div className="fs-12 flex">
              <div className="color-info flex-1">2021-05-10</div>
              <div>较一周前</div>
            </div>
            <ReactEcharts
              option={optionVisit}
              style={{ height: '300px', width: '100%' }}
              className={'react_for_echarts'}
            />
          </Card>
        </Col>
        <Col span="7" className="ml-4 mt-4">
          <Card>
            <div className="fs-16 b flex">
              <div className="flex-1">静态资源加载报错</div>
              <div className="color-success ">
                0.27%
                <ArrowUpOutlined className="color-success" />
              </div>
            </div>
            <div className="fs-12 flex">
              <div className="color-info flex-1">2021-05-10</div>
              <div>较一周前</div>
            </div>
            <ReactEcharts
              option={optionVisit}
              style={{ height: '300px', width: '100%' }}
              className={'react_for_echarts'}
            />
          </Card>
        </Col>
        <Col span="7" className="mt-4">
          <Card>
            <div className="fs-16 b flex">
              <div className="flex-1">接口请求报错</div>
              <div className="color-success ">
                0.27%
                <ArrowUpOutlined className="color-success" />
              </div>
            </div>
            <div className="fs-12 flex">
              <div className="color-info flex-1">2021-05-10</div>
              <div>较一周前</div>
            </div>
            <ReactEcharts
              option={optionVisit}
              style={{ height: '300px', width: '100%' }}
              className={'react_for_echarts'}
            />
          </Card>
        </Col>
      </Row>
    </div>
  )

  const areaOption = {
    title: {
      text: '某站点用户访问来源',
      subtext: '纯属虚构',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: '湖南' },
          { value: 735, name: '上海' },
          { value: 580, name: '广东' },
          { value: 484, name: '北京' },
          { value: 300, name: '其他' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
  const cityList = (
    <div>
      <div className="fs-18 b mb-4">地域分布</div>
      <Card>
        <ReactEcharts
          option={areaOption}
          // style={{ height: '300px', width: '100%' }}
          className={'react_for_echarts'}
        />
      </Card>
    </div>
  )
  return (
    <Row className="page">
      <Col span={6}>
        <Menu
          defaultSelectedKeys={data}
          defaultOpenKeys={['sub1']}
          mode="inline"
          onSelect={changeMode}
        >
          <Menu.Item key="1" icon={<AppstoreOutlined />}>
            概览
          </Menu.Item>
          <Menu.Item key="2" icon={<SecurityScanOutlined />}>
            健康状况
          </Menu.Item>
          <Menu.Item key="3" icon={<EnvironmentOutlined />}>
            地域分布
          </Menu.Item>
        </Menu>
      </Col>
      <Col span={17} className="ml-4">
        {data[0] == '1' && mainList}
        {data[0] == '2' && healthList}
        {data[0] == '3' && cityList}
      </Col>
    </Row>
  )
})

export default Overview
