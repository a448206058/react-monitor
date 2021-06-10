import { useStores } from '@/hooks'
import { observer } from 'mobx-react'
import React, { useState } from 'react'
import { Card, Row, Col, Select, Menu, Progress, List, Tabs, Radio, Tooltip, Button } from 'antd'

import { RightOutlined, AndroidFilled, AppleFilled, WindowsFilled, DiffFilled, SignalFilled, LayoutFilled, UsergroupDeleteOutlined } from '@ant-design/icons'

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



const httpError: React.FC = observer((props) => {
  const commonStore = useStores('commonStore')


  let onChange = (e: any) => {
    // this.setState({ size: e.target.value });
  }

  let [tabIndex, setState] = useState('');

  const tabTitle = (<>
    <span className="fs-18">资源加载失败列表</span><span>（Top20）</span>
  </>)
  let times = '<1秒'

  const list = [{ type: '404', name: 'DiffFilled', android: 58, iphone: 12, man: 55, time: '2020-02-01' }, { type: 'TypeError', name: 'Script error', android: 58, iphone: 12, man: 55, time: '2020-02-01' }]

  const main = (
    <div className="pages">
      <Tabs defaultActiveKey="1">
        <TabPane tab={tabTitle} key="1">
          <div className="mb-2">2021-05-15</div>
        </TabPane>
      </Tabs>
      <List
        size="large"
        dataSource={list}
        renderItem={item =>
          <List.Item>
            <div className="fs-12 flex wd_100s">
              <span className="ml-4">{item.name}</span><AndroidFilled className="ml-4" />（{item.android}次）<AppleFilled className="ml-4" />（{item.iphone}次）<WindowsFilled className="ml-4" /><span>（{item.man}次）</span><div className="flex-right color-info">最近：{item.time}</div> <RightOutlined className="ml4" />
            </div>

          </List.Item>}
      />
    </div >
  )

  const jsTitle = (
    <div><span>资源加载报错</span><span>(点击柱状图查看其它日期)</span></div>
  )
  const selfTitle = (
    <div><span>今日概况</span></div>
  )

  const tabs = (
    <Row>
      <Col span={16}>
        <Tabs defaultActiveKey="1" onChange={setState} className="mt-70" style={{ marginTop: '70px' }}>
          <TabPane tab={jsTitle} key="1">
            <ReactEcharts
              option={option}
              style={{ height: '300px', width: '100%' }}
              className={'react_for_echarts'}
            />
          </TabPane>
        </Tabs>
      </Col>
      <Col span={8}>
        <Tabs defaultActiveKey="1" onChange={setState} className="mt-70" style={{ marginTop: '70px' }}>
          <TabPane tab={selfTitle} key="1">
            <div className="flex fs-12">
              <div>
                <SignalFilled className="fs-40" />
                <div>总发生次数</div>
                <div>2</div>
              </div>
              <div className="ml-4">
                <LayoutFilled className="fs-40" />
                <div>影响发生次数</div>
                <div>2</div>
              </div>
              <div className="ml-4">
                <UsergroupDeleteOutlined className="fs-40" />
                <div>影响用户数</div>
                <div>2</div>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </Col>
    </Row>


  )
  return (
    <div>
      {tabs}
      {main}
    </div>

  )
})

export default httpError
