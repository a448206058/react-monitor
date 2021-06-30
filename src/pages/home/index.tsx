import { useStores } from '@/hooks'
import { observer } from 'mobx-react'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.less'
import { Card, Divider, Row, Col, Progress, Menu, message } from 'antd'
import type { TableListItem } from './data.d';
import { queryRule, queryAlive, updateRule, addRule, removeRule } from './service';
import axios from 'axios';
import {
  Html5TwoTone,
  FundFilled,
  AppstoreOutlined,
  SettingOutlined,
  PlusCircleOutlined
} from '@ant-design/icons'
import 'antd/dist/antd.css'
import classNames from 'classnames'
import ReactEcharts from 'echarts-for-react'
import Item from 'antd/lib/list/Item'

interface IHomeProps {
  title: string
  backurl?: string
}

const { SubMenu } = Menu

let contentList: string[] = [];

let isLoading: boolean = false;


/**
 * @en-US Query
 * @zh-CN 查询
 * @param fields
 */

const handleQuery = async () => {
  const hide = message.loading('Loading');
  try {
    const result = await queryRule();
    contentList = result.data.rows;
    isLoading = true;
    hide();
    message.success('Loading successfully');
    return true;
  } catch (error) {
    hide();
    message.error('Loading failed, please try again!');
    return false;
  }
}


const Home: React.FC<any> = observer((props) => {
  const { backurl, title, history } = props

  const counterStore = useStores('counterStore')
  const commonStore = useStores('commonStore')
  const [repos, setRepos] = React.useState([])
  // const [alives, setAlive] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(async () => {
    const hide = message.loading('Loading');
    setLoading(true)
    const result = await queryRule();
    // const aliveValue = await queryAlive({webMonitorId: result.data.rows[1].webMonitorId});
    setRepos(result.data.rows)
    setLoading(false)
    message.success('Loading successfully');
    hide();
  }, [])


  const option = {
    xAxis: {
      type: 'category',
      data: []
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: false
      }
    ]
  }

  const EchartsPie = () => <ReactEcharts option={option} className={'react_for_echarts'} />



  const addCard = (
    <Card style={{ width: 400, height: 640 }}>
      <Link to="/addProject/" className="flex column v-center mt-270">
        <PlusCircleOutlined className="color-info fs-80" />
        <div className="color-info mt-2">创建新应用</div>
      </Link>
    </Card>
  )

  const cardList = (
    <Row wrap>
      {repos.map((item: object) => {
        const cardTitle = (
          <div>
            <Html5TwoTone />
            <span className="ml-1">{item.projectName}</span>
          </div>
        )

        const cardExtra = (
          <div className="flex">
            <FundFilled className="color-warning" />
            <span className="color-warning ml-1">查看大屏</span>
            <AppstoreOutlined className="color-warning ml-2" />
            <SettingOutlined className="ml-2" />
          </div>
        )

        const card = (
          <Card title={cardTitle} extra={cardExtra} style={{ width: 400, height: 640 }}>
            <Row className="flex h-bottom">
              <Col span={8}>
                <div className="fs-40 color-warning b">1000</div>
                <div className="fs-12 color-info">位活跃用户</div>
              </Col>
              <Col span={1}>
                <Divider type="vertical" style={{ height: 43 }} />
              </Col>

              <Col span={5}>
                <div className="fs-26 b">785</div>
                <div className="fs-12 color-info">用户总数</div>
              </Col>
              <Col span={5}>
                <div className="fs-26 b">237</div>
                <div className="fs-12 color-info">老用户数</div>
              </Col>
              <Col span={5}>
                <div className="fs-26 b">548</div>
                <div className="fs-12 color-info">新用户数</div>
              </Col>
            </Row>
            <div className="fs-16 mt-4">活跃趋势</div>
            <ReactEcharts
              option={option}
              style={{ height: '300px', width: '100%' }}
              className={'react_for_echarts'}
            />
            <div className="fs-16">健康总分</div>
            <div className="flex mt-4">
              <Progress
                type="circle"
                width={60}
                strokeColor={{
                  '0%': '#108ee9',
                  '100%': '#87d068'
                }}
                percent={90}
              />
              <div className="ml-2">
                <div className="fs-12 color-info">
                  JS报错率：<span className="color-black fs-14">13.44</span>%
                </div>
                <div className="fs-12 color-info mt-2">
                  接口报错率：<span className="color-black fs-14">0.04</span>%
                </div>
              </div>
              <div className="ml-2">
                <div className="fs-12 color-info">
                  自定义异常率：<span className="color-black fs-14">13.44</span>%
                </div>
                <div className="fs-12 color-info mt-2">
                  静态资源报错率：<span className="color-black fs-14">0.04</span>%
                </div>
              </div>
            </div>
          </Card>
        )
        return (
          <Col span={8} key={item.id} className="ml-4 mb-4">
            {card}
          </Col>
        )
      })}
      <Col span={8} className="ml-4 mb-4">
        {addCard}
      </Col>
    </Row>
  )

  return (
    <div className="page">
      {/* {repos} */}
      <div>{loading ? 'loading...' : cardList}</div>
    </div>
  )
});

export default Home
