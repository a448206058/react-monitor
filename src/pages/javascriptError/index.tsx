import { useStores } from '@/hooks'
import { observer } from 'mobx-react'
import React, { useState } from 'react'
import { Card, Row, Col, Select, Menu, Progress, List, Tooltip, Radio, Tabs } from 'antd'

import { HourglassOutlined, QuestionCircleFilled, RightOutlined, DiffFilled, UsergroupDeleteOutlined, AndroidFilled, AppleFilled, WindowsFilled } from '@ant-design/icons'

import ReactEcharts from 'echarts-for-react'

const { TabPane } = Tabs;

const option = {
  title: {
    text: '次数'
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

const optionTime = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [150, 230, 224, 218, 135, 147, 260],
    type: 'line'
  }]
};

const optionLoading = {
  dataset: {
    source: [
      ['score', 'amount', 'product'],
      [89.3, 58212, 'Matcha Latte'],
      [57.1, 78254, 'Milk Tea'],
      [74.4, 41032, 'Cheese Cocoa'],
      [50.1, 12755, 'Cheese Brownie'],
      [89.7, 20145, 'Matcha Cocoa'],
      [68.1, 79146, 'Tea'],
      [19.6, 91852, 'Orange Juice'],
      [10.6, 101852, 'Lemon Juice'],
      [32.7, 20112, 'Walnut Brownie']
    ]
  },
  grid: { containLabel: true },
  xAxis: { name: 'amount' },
  yAxis: { type: 'category' },
  visualMap: {
    orient: 'horizontal',
    left: 'center',
    min: 10,
    max: 100,
    text: ['High Score', 'Low Score'],
    // Map the score column to color
    dimension: 0,
    inRange: {
      color: ['#65B581', '#FFCE34', '#FD665F']
    }
  },
  series: [
    {
      type: 'bar',
      encode: {
        // Map the "amount" column to X axis.
        x: 'amount',
        // Map the "product" column to Y axis
        y: 'product'
      }
    }
  ]
};



const javascriptError: React.FC = observer((props) => {
  const commonStore = useStores('commonStore')


  let onChange = (e: any) => {
    // this.setState({ size: e.target.value });
  }

  let [tabIndex, setState] = useState('');

  const tabTitle = (<>
    <span className="fs-18">JS报错</span><span>window.onError</span><span>（375）</span>
  </>)

  const tabTitle1 = (<>
    <span className="fs-18">自定义异常</span><span>console.error</span><span>3234</span>
  </>
  )
  let times = '<1秒'

  const list = [{ type: 'List', name: 'Script error', android: 58, iphone: 12, man: 55, time: '2020-02-01' }, { type: 'TypeError', name: 'Script error', android: 58, iphone: 12, man: 55, time: '2020-02-01' }]

  const main = (
    <div className="pages">
      <ReactEcharts
        option={option}
        style={{ height: '300px', width: '100%' }}
        className="react_for_echarts"
      />

      <Tabs defaultActiveKey="1">
        <TabPane tab={tabIndex === '1' ? tabTitle : tabTitle1} key="1">
          <div className="mb-2">2021-05-15</div>
        </TabPane>
      </Tabs>
      <List
        size="large"
        dataSource={list}
        renderItem={item =>
          <List.Item>
            <div className="fs-12 flex wd_100s">
              <span className="error_circle" /><span className="fs-16 color-primary ml-4">{item.type}</span><span className="ml-4">{item.name}</span><AndroidFilled className="ml-4" />（{item.android}次）<AppleFilled className="ml-4" />（{item.iphone}次）<WindowsFilled className="ml-4" /><span>（{item.man}次）</span><div className="flex-right color-info">最近：{item.time}</div> <RightOutlined className="ml4" />
            </div>

          </List.Item>}
      />
    </div>
  )

  const jsTitle = (
    <div><span>JS报错统计</span><span>(点击柱状图查看其它日期)</span></div>
  )
  const selfTitle = (
    <div><span>自定义异常统计</span><span>(点击柱状图查看其它日期)</span></div>
  )

  const tabs = (
    <Tabs defaultActiveKey="1" type="card" onChange={setState} className="mt-70" style={{ marginTop: '70px' }}>
      <TabPane tab={jsTitle} key="1">


        {main}
      </TabPane>
      <TabPane tab={selfTitle} key="2">

        {main}
      </TabPane>
    </Tabs>
  )
  return (
    tabs
  )
})

export default javascriptError
