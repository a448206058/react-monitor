import { useStores } from '@/hooks'
import { observer } from 'mobx-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Select, Menu, Progress, List, Tabs, Radio, Tooltip, Button } from 'antd'

import { RightOutlined, AndroidFilled, AppleFilled, WindowsFilled, PlusOutlined, SignalFilled, PlusCircleOutlined, LayoutFilled, UsergroupDeleteOutlined } from '@ant-design/icons'

import ReactEcharts from 'echarts-for-react'

const { TabPane } = Tabs;

const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  legend: {
    data: ['蒸发量', '降水量', '平均温度']
  },
  xAxis: [
    {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '水量',
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        formatter: '{value} ml'
      }
    },
    {
      type: 'value',
      name: '温度',
      min: 0,
      max: 25,
      interval: 5,
      axisLabel: {
        formatter: '{value} °C'
      }
    }
  ],
  series: [
    {
      name: '蒸发量',
      type: 'bar',
      data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
    },
    {
      name: '平均温度',
      type: 'line',
      yAxisIndex: 1,
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    }
  ]
};


const httpError: React.FC = observer((props) => {
  const commonStore = useStores('commonStore')


  let onChange = (e: any) => {
    // this.setState({ size: e.target.value });
  }

  let [tabIndex, setState] = useState('');


  const titleContent = (
    <div>
      <div>1.埋点demo1 -> 埋点demo2</div>
      <div className="fs-12 color-info">俩个步骤之间，每日UV转化率变化 ｜ 转化周期：1天</div>
    </div>
  )

  const tabs = (
    <Row gutter={16}>
      <Col span={12} className='mt-2'>
        <Card style={{ height: 425 }}>
          <Link to="/addProject/" className="flex column v-center">
            <PlusOutlined className="color-info fs-80 mt-150" />
            <div className="color-info mt-2">新建漏斗图</div>
          </Link>
        </Card>
      </Col>
      <Col span={12} className='mt-2'>
        <Card title={titleContent}>
          <ReactEcharts
            option={option}
            style={{ height: '300px', width: '100%' }}
            className={'react_for_echarts'}
          />
        </Card>
      </Col>
      <Col span={12} className='mt-2'>
        <Card title={titleContent}>
          <ReactEcharts
            option={option}
            style={{ height: '300px', width: '100%' }}
            className={'react_for_echarts'}
          />
        </Card>
      </Col>
    </Row>


  )
  return (
    <div className="pages">
      {tabs}
    </div>

  )
})

export default httpError
