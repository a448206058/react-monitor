import { useStores } from '@/hooks'
import { observer } from 'mobx-react'
import React, { useState } from 'react'
import { Card, Row, Col, Select, Menu, Progress, List, Tabs, Radio, Tooltip, DatePicker, TimePicker, Button, Table, Input, Timeline } from 'antd'

import { ColumnsType } from 'antd/es/table';
import moment from 'moment';

import ReactEcharts from 'echarts-for-react'

import { RightOutlined, AndroidFilled, AppleFilled, WindowsFilled, DiffFilled, ProfileOutlined } from '@ant-design/icons'

interface User {
  key: number;
  name: string;
  id?: string;
  page?: string;
  from?: string;
  ip?: string;
  address?: string;
  time?: string;
}

const optionPage = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
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
    data: ['page1', 'page2', 'page3']
  },
  series: [
    {
      name: '2012年',
      type: 'bar',
      label: {
        show: true,
        position: 'right'
      },
      data: [1.5, 2.2, 2.3]
    }
  ]
};

const optionInject = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
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
    data: ['大于30s', '10-30s', '5-10s', '1-5s', '小于1s']
  },
  series: [
    {
      name: '2012年',
      type: 'bar',
      label: {
        show: true,
        position: 'right'
      },
      data: [11, 10, 1, 0, 0, 0]
    }
  ]
};

const columns: ColumnsType<User> = [
  {
    key: 'id',
    title: '用户ID',
    dataIndex: 'id',
  },
  {
    key: 'page',
    title: '页面',
    dataIndex: 'page',
  },
  {
    key: 'from',
    title: '设备平台',
    dataIndex: 'from',
  },
  {
    key: 'ip',
    title: '用户IP地址',
    dataIndex: 'ip',
  },
  {
    key: 'address',
    title: '位置',
    dataIndex: 'address',
  },
  {
    key: 'time',
    title: '发生时间',
    dataIndex: 'time',
  },
  {
    key: 'action',
    title: '操作',
    dataIndex: 'action',
    render: (text, record) => (
      <div >
        <a>用户细查</a>
      </div>
    ),
  },
];

const data: User[] = [
  {
    name: '1',
    key: 0,
    id: 'userId',
    page: 'https://www.webfunny.cn/home.html',
    from: 'android',
    ip: '106.120.233.26',
    address: '中国 北京 北京市',
    time: '2021-02-22 10:01:04'
  }
];

const format = 'HH:mm';


const BehaviorsDetail: React.FC = observer((props) => {
  const commonStore = useStores('commonStore')

  const onChange = (date: any, dateString: string) => {
    console.log(date, dateString);
  }

  const heaveTitle = (
    <div className="flex">
      <div className="fs-18 b">行为记录列表</div>
      <Button size="small" className="flex-right">全部</Button>
      <Button size="small" className="ml-2">浏览</Button>
      <Button size="small" className="ml-2">错误</Button>
      <Button size="small" className="ml-2">接口</Button>
    </div>
  )

  return (
    <div className="pages">
      <Card>
        <div className="flex">
          <div className="fs-18 b">用户详情</div>
          <DatePicker onChange={onChange} className="flex-right" />
          <TimePicker defaultValue={moment('12:08', format)} format={format} className="ml-2" />
          <Input placeholder="请输入userID或ip查询" className="wd_200 ml-2" />
          <Button type="primary" className="ml-2">搜索</Button>
        </div>
      </Card>
      <Row gutter={16} className="mt-4">
        <Col span="8">
          <Card title="用户基本信息">
            <div>
              <p>用户标签：</p>
              <p>系统版本：vivo Y67L</p>
              <p>网络地址：223.104.130.213</p>
              <p>所在地区：HN</p>
            </div>
          </Card>
        </Col>
        <Col span="8">
          <Card title="页面平均加载时间">

            <ReactEcharts
              option={optionPage}
              style={{ height: '300px', width: '100%' }}
              className="react_for_echarts"
            />
          </Card>
        </Col>
        <Col span="8">
          <Card title="接口耗时区间分布">
            <ReactEcharts
              option={optionInject}
              style={{ height: '300px', width: '100%' }}
              className="react_for_echarts"
            />
          </Card>
        </Col>
      </Row>
      <Card className="mt-4" title={heaveTitle}>
        <Row gutter={16}>
          <Col span={12}>
            <Timeline>
              <Timeline.Item dot={<ProfileOutlined />}>
                <div className="list list_chose">
                  <div className="flex">
                    <div>页面浏览</div>
                    <div className="flex-right">07:39:04</div>
                  </div>
                  <div>webfunny**com/ltvfe/cl/home</div>
                </div>
              </Timeline.Item>
              <Timeline.Item dot={<ProfileOutlined />}>
                <div className="list">
                  <div className="flex">
                    <div>页面浏览</div>
                    <div className="flex-right">07:39:04</div>
                  </div>
                  <div>webfunny**com/ltvfe/cl/home</div>
                </div>
              </Timeline.Item>
              <Timeline.Item dot={<ProfileOutlined />}>
                <div className="list">
                  <div className="flex">
                    <div>页面浏览</div>
                    <div className="flex-right">07:39:04</div>
                  </div>
                  <div>webfunny**com/ltvfe/cl/home</div>
                </div>
              </Timeline.Item>
              <Timeline.Item dot={<ProfileOutlined />}>
                <div className="list">
                  <div className="flex">
                    <div>页面浏览</div>
                    <div className="flex-right">07:39:04</div>
                  </div>
                  <div>webfunny**com/ltvfe/cl/home</div>
                </div>
              </Timeline.Item>
            </Timeline>
          </Col>
          <Col span={12}>
            <Card>
              <div className="mb-2">
                <div>事件类型：</div>
                <div className="color-info">页面浏览</div>
              </div>
              <div className="mb-2">
                <div>发生时间：</div>
                <div className="color-info">2020-09-05 07:00:00</div>
              </div>
              <div className="mb-2">
                <div>事件内容：</div>
                <div className="color-info">webfunny**com/ltvfe/cl/home</div>
              </div>
              <div className="mb-2">
                <div>发生页面：</div>
                <div className="color-info">webfunny**com/ltvfe/cl/home</div>
              </div>
              <div className="mb-2">
                <div>加载信息：</div>
                <div className="color-primary">（非首次加载）（版本号：1.1）（<AndroidFilled /> Y67L / android 6.0）</div>
              </div>
              <div className="mb-2">
                <div>事件标识：</div>
                <div className="color-info">afe9bf18-785e-496c-8db2-a2f71e311fe2-1599262744184</div>
              </div>
            </Card>
          </Col>
        </Row>
      </Card>

    </div>

  )
})



export default BehaviorsDetail
