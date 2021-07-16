import { useStores } from '@/hooks'
import { observer } from 'mobx-react'
import React from 'react'
import { Card, Row, Col, Select, Menu, Progress, Divider, Tooltip, Radio, Tabs } from 'antd'

import { HourglassOutlined, QuestionCircleFilled, RightOutlined, DiffFilled, UsergroupDeleteOutlined } from '@ant-design/icons'

import ReactEcharts from 'echarts-for-react'

const { TabPane } = Tabs;

const option = {
  title: {
    text: '30天变化趋势'
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



const httpPerformance: React.FC = observer((props) => {
  const commonStore = useStores('commonStore')
  let onChange = (e: any) => {
    // this.setState({ size: e.target.value });
  }

  const tabTitle = (<>
    <span className="fs-18">接口列表</span><span>（点击查看接口详情）</span>
  </>
  )
  let times = '<1秒'
  return (
    <div className="pages">
      <Row>
        <Col span={8}>
          <div>
            <HourglassOutlined />
            <span className="fs-18 b ml-1 mr-1">接口耗时分段</span>
            <Tooltip
              placement="topLeft"
              title="如果整体看接口耗时，异常接口会被平均，无法觉察。我们按耗时分段来分析数据，更准确，更直观。"
              arrowPointAtCenter
            >
              <QuestionCircleFilled />
            </Tooltip>
          </div>
          <div className="mt-2">
            <Radio.Group onChange={onChange}>
              <Radio.Button value="<1秒" className="chose_box">{times}</Radio.Button>
              <Radio.Button value="1-5秒" className="chose_box">1-5秒</Radio.Button>
              <Radio.Button value="5-10秒" className="chose_box">5-10秒</Radio.Button>
              <Radio.Button value="10-30秒" className="chose_box">10-30秒</Radio.Button>
              <Radio.Button value=">30秒" className="chose_box">`&gt;`30秒</Radio.Button>
            </Radio.Group>
          </div>
          <div className="flex color-info mt-4 v-center">
            <div><span className="fs-20">4385</span> 数量</div>
            <div className="ml-4"><span className="fs-20">0.63%</span> 百分比</div>
            <div className="ml-4"><span className="fs-20">04-25</span> 日期</div>
          </div>

        </Col>
        <Col span={15} className="ml-4">
          <ReactEcharts
            option={option}
            style={{ height: '300px', width: '100%' }}
            className="react_for_echarts"
          />
        </Col>
      </Row>

      <Tabs defaultActiveKey="1">
        <TabPane tab={tabTitle} key="1" />
      </Tabs>
      <Row>
        <Col span={8}>
          <div className="b">24小时变化趋势<span className="fs-12">(点击查看详细)</span></div>
          <ReactEcharts
            option={optionTime}
            style={{ height: '300px', width: '100%' }}
            className="react_for_echarts"
          />
        </Col>
        <Col span={15} className="ml-4">
          <div className="b">22:00数量趋势</div>
          <ReactEcharts
            option={optionTime}
            style={{ height: '300px', width: '100%' }}
            className="react_for_echarts"
          />
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Radio.Group onChange={onChange}>
            <Radio.Button value="<1秒" className="chose_list">
              <Tooltip
                placement="topLeft"
                title="https://webfunny**com:8513/mcl/ltv/application/promote/query"
                arrowPointAtCenter
              >
                <div className="flex">
                  https://webfunny**com:8513/mcl/ltv/application/promote/query
            <DiffFilled />
            （71）
            <RightOutlined />
                </div>

              </Tooltip>
            </Radio.Button>
          </Radio.Group>

          <Radio.Group onChange={onChange}>
            <Radio.Button value="<1秒" className="chose_list">
              <Tooltip
                placement="topLeft"
                title="https://webfunny**com:8513/mcl/ltv/application/promote/query"
                arrowPointAtCenter
              >
                <div className="flex">
                  https://webfunny**com:8513/mcl/ltv/application/promote/query
            <DiffFilled />
            （71）
            <RightOutlined />
                </div>

              </Tooltip>
            </Radio.Button>
          </Radio.Group>
        </Col>
        <Col span={15} className="ml-4">
          <Row>
            <Col span={4} />
            <Col span={8}>
              <Card className="bg-warning">
                <div className="flex">
                  <div className="fs-18">
                    <div>平均网络耗时</div>
                    <div>19.37s</div>
                  </div>
                  <HourglassOutlined className="fs-32" />
                </div>
              </Card>
            </Col>
            <Col className="ml-4" span={8}>
              <Card className="bg-error">
                <div className="flex">
                  <div className="fs-18">
                    <div>影响用户</div>
                    <div>2</div>
                  </div>
                  <UsergroupDeleteOutlined className="fs-32" />
                </div>
              </Card>
            </Col>
          </Row>

          <div className="flex v-center fs-18 b mt-4">发生页面列表</div>
          <Divider dashed />
          <div >
            <div className="flex">
              <div>http://www.webfunny.cn/webfunny_multi/home.html</div>
              <div className="flex-right">2</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
})

export default httpPerformance
