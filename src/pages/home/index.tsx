import { useStores } from '@/hooks'
import { observer } from 'mobx-react'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.less'
import { Card, Divider, Row, Col, Progress, Menu, message } from 'antd'
import type { TableListItem } from './data.d';
import { queryRule, updateRule, addRule, removeRule } from './service';
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

interface IHomeProps {
  title: string
  backurl?: string
}

const { SubMenu } = Menu


/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */
const handleAdd = async (fields: TableListItem) => {
  const hide = message.loading('Adding');
  try {
    await queryRule({ ...fields });
    hide();
    message.success('Added successfully');
    return true;
  } catch (error) {
    hide();
    message.error('Adding failed, please try again!');
    return false;
  }
};

const Home: React.FC<any> = observer((props) => {
  const { backurl, title, history } = props

  const counterStore = useStores('counterStore')
  const commonStore = useStores('commonStore')

  let contentList = [];
  let isLoading = false;


  const [data1, setData] = useState({ hits: [] });

  // useEffect(async () => {
  //   const fetchData = async () => {
  //     const result = await queryRule();
  //     contentList = result.data.rows;
  //     setData(result.data.rows);
  //     // console.log(contentList)
  //     // isLoading = true;
  //   };
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const result = await queryRule();
  //   contentList = result.data.rows;
  //   setData(result.data.rows);
  //   // console.log(contentList)
  //   isLoading = true;
  // };

  // fetchData();


  // setTimeout(() => {
  //   isLoading = true;
  //   console.log(contentList)
  // }, 8000)



  var data = [
    ['2000-06-05', 116],
    ['2000-06-06', 129],
    ['2000-06-07', 135],
    ['2000-06-08', 86],
    ['2000-06-09', 73],
    ['2000-06-10', 85],
    ['2000-06-11', 73],
    ['2000-06-12', 68],
    ['2000-06-13', 92],
    ['2000-06-14', 130],
    ['2000-06-15', 245],
    ['2000-06-16', 139],
    ['2000-06-17', 115],
    ['2000-06-18', 111],
    ['2000-06-19', 309],
    ['2000-06-20', 206],
    ['2000-06-21', 137],
    ['2000-06-22', 128],
    ['2000-06-23', 85],
    ['2000-06-24', 94],
    ['2000-06-25', 71],
    ['2000-06-26', 106],
    ['2000-06-27', 84],
    ['2000-06-28', 93],
    ['2000-06-29', 85],
    ['2000-06-30', 73],
    ['2000-07-01', 83],
    ['2000-07-02', 125],
    ['2000-07-03', 107],
    ['2000-07-04', 82],
    ['2000-07-05', 44],
    ['2000-07-06', 72],
    ['2000-07-07', 106],
    ['2000-07-08', 107],
    ['2000-07-09', 66],
    ['2000-07-10', 91],
    ['2000-07-11', 92],
    ['2000-07-12', 113],
    ['2000-07-13', 107],
    ['2000-07-14', 131],
    ['2000-07-15', 111],
    ['2000-07-16', 64],
    ['2000-07-17', 69],
    ['2000-07-18', 88],
    ['2000-07-19', 77],
    ['2000-07-20', 83],
    ['2000-07-21', 111],
    ['2000-07-22', 57],
    ['2000-07-23', 55],
    ['2000-07-24', 60]
  ]

  var valueList = data.map(function (item) {
    return item[1]
  })

  var dateList = data.map(function (item) {
    return item[0]
  })

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

  const cardTitle = (
    <div>
      <Html5TwoTone />
      <span className="ml-1">H5应用A</span>
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

  const addCard = (
    <Card style={{ width: 400, height: 640 }}>
      <Link to="/addProject/" className="flex column v-center mt-270">
        <PlusCircleOutlined className="color-info fs-80" />
        <div className="color-info mt-2">创建新应用</div>
      </Link>
    </Card>
  )

  const content = [{}, {}, {}]

  const cardList = (
    <Row wrap>
      <Col span={8} className="ml-4 mb-4">
        {addCard}
      </Col>
    </Row>
  )

  const cardList1 = (
    <Row wrap>
      {contentList.map((item) => {
        return (
          <Col span={8} className="ml-4 mb-4">
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
      {isLoading ? cardList1 : cardList}
    </div>
  )
})

export default Home
