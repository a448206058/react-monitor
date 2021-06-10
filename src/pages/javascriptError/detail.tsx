import { useStores } from '@/hooks'
import { observer } from 'mobx-react'
import React, { useState } from 'react'
import { Card, Row, Col, Select, Menu, Progress, List, Tabs, Radio, Tooltip, DatePicker, TimePicker, Button, Table, Input, Divider, Collapse } from 'antd'

import { ColumnsType } from 'antd/es/table';
import moment from 'moment';

const { Panel } = Collapse;

import { RightOutlined, AndroidFilled, AppleFilled, WindowsFilled, DiffFilled, PaperClipOutlined, StepBackwardOutlined, StepForwardOutlined, LineChartOutlined, CompassTwoTone, CloudOutlined, MobileOutlined } from '@ant-design/icons'

interface User {
  key: number;
  name: string;
}

const columns: ColumnsType<User> = [
  {
    key: 'error',
    title: '错误信息',
    dataIndex: 'error',
  },
  {
    key: 'page',
    title: '页面',
    dataIndex: 'page',
  },
  {
    key: 'version',
    title: '设备',
    dataIndex: 'version',
  },
  {
    key: 'ip',
    title: '客户IP地址',
    dataIndex: 'ip',
  },
  {
    key: 'web',
    title: '浏览器信息',
    dataIndex: 'web',
  },
  {
    key: 'time',
    title: '发生时间',
    dataIndex: 'time',
    fixed: 'right',
  },
  {
    key: 'action',
    title: '操作',
    dataIndex: 'action',
    fixed: 'right',
    render: (text, record) => (
      <div >
        <a>查看</a>
      </div>
    ),
  },
];

const data: User[] = [
  {
    key: 0,
    error: 'http://47.105.132.73:8011/server/getSysInfo?webMonitorId=',
    page: 'http://47.105.132.73:8010/overview.html',
    version: '1621fdcc-65e8-49fe-b379-cb20a94ef329-1581763596534',
    ip: '',
    web: '',
    time: '2020-02-15 18:55:56'
  }
];

const format = 'HH:mm';


const javascriptErrorDetail: React.FC = observer((props) => {
  const commonStore = useStores('commonStore')

  const onChange = (date: string, dateString: string) => {
    console.log(date, dateString);
  }

  const text = '【代码位置】：switch(n){case 0:return r[t]();case 1:return r[t]【错误位置：】(a[0]);case 2:return r[t](a[0],a[1]);case 3:return'

  return (
    <div className="pages">
      <Row>
        <Col span={18}>
          <div><span className="fs-22 b">UncaughtInPromiseError: r[t] is not a function</span><span className="ml-4">common.e6d84b9c.js:29:72045</span></div>
          <div className="mt-2 flex"><div className="error_circle mr-1"></div><span className="fs-12">UncaughtInPromiseError: r[t] is not a function</span></div>
          <div className="mt-2 color-info">2021-05-19 21:46:42</div>
          <div className="color-primary mt-2"><PaperClipOutlined className="mr-1 fs-16" />https://webfunny**com/webfunny/home</div>

          <div className="flex mt-4">
            <Button
              size="small"
              icon={<StepBackwardOutlined />}>
              上一个
            </Button>
            <Button
              size="small"
              className="ml-4"
              icon={<StepForwardOutlined />}>
              下一个
            </Button>
            <Button
              size="small"
              type="primary"
              danger
              className="ml-4"
              icon={<LineChartOutlined />}>
              报错趋势图
            </Button>
            <Button
              size="small"
              type="primary"
              className="ml-4"
              icon={<CompassTwoTone />}>
              查看行为轨迹
            </Button>
          </div>
        </Col>
        <Col span={6}>
          <div className="flex">
            <div className="flex-1">
              <div className="fs-16 b color-info">发生次数</div>
              <div className="fs-26 mt-1 color-primary">52</div>
            </div>
            <div className="flex-1">
              <div className="fs-16 b color-info">影响用户</div>
              <div className="fs-26 mt-1 color-primary">34</div>
            </div>
          </div>
          <div className="flex">
            <div className="flex-1">
              <AppleFilled />
              <div className="fs-20 mt-1 color-primary">51</div>
            </div>
            <div className="flex-1">
              <AndroidFilled />
              <div className="fs-20 mt-1 color-primary">52</div>
            </div>
            <div className="flex-1">
              <WindowsFilled />
              <div className="fs-20 mt-1 color-primary">52</div>
            </div>
          </div>
        </Col>
      </Row>

      <Divider />

      <Row>
        <Col span={6}>
          <div className="flex">
            <CloudOutlined className="fs-50 color-primary" />
            <div className="ml-1">
              <div>183.1.202.252</div>
              <div className="mt-1">发生1次</div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className="flex">
            <DiffFilled className="fs-50 color-primary" />
            <div className="ml-1">
              <div>Mobile UI WebView</div>
              <div className="mt-1">版本：...</div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className="flex">
            <AndroidFilled className="fs-50 color-primary" />
            <div className="ml-1">
              <div>android</div>
              <div className="mt-1">版本：7.1.2</div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className="flex">
            <MobileOutlined className="fs-50 color-primary" />
            <div className="ml-1">
              <div>vivo X9</div>
              <div className="mt-1"></div>
            </div>
          </div>
        </Col>
      </Row>
      <Divider />
      <div className="color-info b">Js错误堆栈</div>
      <div className="mt-4">UncaughtInPromiseError: r[t] is not a function</div>
      <Collapse defaultActiveKey={['1']} ghost>
        <Panel header="https://webfunny.webfunny.cn/webfunny/common.e6d84b9c.js:29:72045" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
      <Card className="mt-4">
        <Table<User> columns={columns} dataSource={data} scroll={{ x: 1000 }} />
      </Card>

    </div>

  )
})



export default javascriptErrorDetail
