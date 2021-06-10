import { useStores } from '@/hooks'
import { observer } from 'mobx-react'
import React, { useState } from 'react'
import { Card, Row, Col, Select, Menu, Progress, List, Tabs, Radio, Tooltip, DatePicker, TimePicker, Button, Table, Input } from 'antd'

import { ColumnsType } from 'antd/es/table';
import moment from 'moment';

import { RightOutlined, AndroidFilled, AppleFilled, WindowsFilled, DiffFilled, PaperClipOutlined } from '@ant-design/icons'

interface User {
  key: number;
  name: string;
}

const columns: ColumnsType<User> = [
  {
    key: 'inject',
    title: '报错接口',
    dataIndex: 'inject',
  },
  {
    key: 'page',
    title: '页面',
    dataIndex: 'page',
  },
  {
    key: 'from',
    title: '标识信息',
    dataIndex: 'from',
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
        <a>查看足迹</a>
      </div>
    ),
  },
];

const data: User[] = [
  {
    key: 0,
    inject: 'http://47.105.132.73:8011/server/getSysInfo?webMonitorId=',
    page: 'http://47.105.132.73:8010/overview.html',
    from: '1621fdcc-65e8-49fe-b379-cb20a94ef329-1581763596534',
    time: '2020-02-15 18:55:56'
  }
];

const format = 'HH:mm';


const httpErrorDetail: React.FC = observer((props) => {
  const commonStore = useStores('commonStore')

  const onChange = (date: string, dateString: string) => {
    console.log(date, dateString);
  }

  return (
    <div className="page">
      <Card className="mt-4">
        <Table<User> columns={columns} dataSource={data} scroll={{ x: 1000 }} />
      </Card>

    </div>

  )
})



export default httpErrorDetail
