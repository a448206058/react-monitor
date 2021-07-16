import { useStores } from '@/hooks'
import { observer } from 'mobx-react'
import React, { useState } from 'react'
import { Card, Row, Col, Select, Menu, Progress, List, Tabs, Radio, Tooltip, DatePicker, TimePicker, Button, Table, Input } from 'antd'

import { ColumnsType } from 'antd/es/table';
import moment from 'moment';

import { RightOutlined, AndroidFilled, AppleFilled, WindowsFilled, DiffFilled } from '@ant-design/icons'

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


const Behaviors: React.FC = observer((props) => {
  const commonStore = useStores('commonStore')

  const onChange = (date: any, dateString: string) => {
    console.log(date, dateString);
  }

  return (
    <div className="pages">
      <div className="fs-32 text-center b mb-2">用户细查</div>
      <Card>
        <div className="flex">
          <div className="fs-18 b">用户列表</div>
          <DatePicker onChange={onChange} className="flex-right" />
          <TimePicker defaultValue={moment('12:08', format)} format={format} className="ml-2" />
          <Input placeholder="请输入userID或ip查询" className="wd_200 ml-2" />
          <Button type="primary" className="ml-2">搜索</Button>
        </div>
      </Card>
      <Card className="mt-4">
        <Table<User> columns={columns} dataSource={data} />
      </Card>

    </div>

  )
})



export default Behaviors
