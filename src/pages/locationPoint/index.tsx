import { useStores } from '@/hooks'
import { observer } from 'mobx-react'
import React, { useState } from 'react'
import { Card, Row, Col, Select, Menu, Progress, Divider, Modal, Input } from 'antd'

import { EditOutlined, PlusOutlined } from '@ant-design/icons'

import ReactEcharts from 'echarts-for-react'

const { SubMenu } = Menu;

const { Option } = Select;

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
      name: '次数',
      min: 0,
      max: 250,
      interval: 50
    },
    {
      type: 'value',
      min: 0,
      max: 25,
      interval: 5
    }
  ],
  series: [
    {
      name: '触发次数',
      type: 'bar',
      data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
    },
    {
      name: '用户数量',
      type: 'line',
      yAxisIndex: 1,
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    }
  ]
};

const locationPoint: React.FC = observer((props) => {
  const [data, setData] = useState(['1'])
  const changeMode = (value: any) => {
    setData([value.key])
  }

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLabelModalVisible, setIsLabelModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const showLabelModal = () => {
    setIsModalVisible(false);
    setIsLabelModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleLabelOk = () => {
    setIsLabelModalVisible(false);
  };

  const handleLabelCancel = () => {
    setIsLabelModalVisible(false);
  };

  const titleContent = (
    <div>测试1 <span className="color-primary fs-12">ID：4</span></div>
  )

  const mainList = (
    <div>
      <Card >
        <div>埋点上报方式<span className="fs-12">(每小时05分更新数据)：</span></div>
        <div>GET请求上报：http(s)://www.webfunny.cn/server/upBp?userId=用户id&locationPointId=埋点id</div>
      </Card>
      <Row className="mt-4" gutter={16}>
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
    </div>
  )

  const labelModal = (
    <Modal title="创建埋点分组" visible={isLabelModalVisible} onOk={handleLabelOk} onCancel={handleLabelCancel}>
      <Row className="mb-2">
        <Col span={6}>
          分组名称：
        </Col>
        <Col span={18}>
          <Input placeholder="分组名称" />
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          分组描述：
        </Col>
        <Col span={18}>
          <Input placeholder="分组描述" />
        </Col>
      </Row>
    </Modal>
  )

  const valueModal = (
    <Modal title="创建埋点" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Row className="mb-2">
        <Col span={6}>
          选择分组：
        </Col>
        <Col span={18} className="flex">
          <Select defaultValue="lucy" style={{ width: 200 }} allowClear>
            <Option value="lucy">Lucy</Option>
          </Select>
          <a className="color-primary flex-right" onClick={showLabelModal}><PlusOutlined />新增分组</a>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col span={6}>
          埋点名称：
        </Col>
        <Col span={18}>
          <Input placeholder="埋点名称" />
        </Col>
      </Row>
      <Row className="mb-2">
        <Col span={6}>
          埋点描述：
        </Col>
        <Col span={18}>
          <Input placeholder="埋点描述" />
        </Col>
      </Row>
    </Modal>
  )



  return (
    <Row className="page">
      <Col span={6}>
        <div className="flex mb-2">埋点分组
         <div className="flex-right"><EditOutlined />编辑</div>
          <div className="ml-2" onClick={showModal}><PlusOutlined />新增</div>
          {labelModal}
          {valueModal}
        </div>
        <Menu
          defaultSelectedKeys={data}
          defaultOpenKeys={['sub1']}
          mode="inline"
          onSelect={changeMode}
        >
          <SubMenu key="sub1" title="1.测试分组1">
            <Menu.Item key="11">Option 1</Menu.Item>
            <Menu.Item key="12">Option 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="1" >
            1.测试分组1
          </Menu.Item>
          <Menu.Item key="2">
            2.测试分组2
          </Menu.Item>
          <Menu.Item key="3">
            3.测试分组3
          </Menu.Item>
        </Menu>
      </Col>
      <Col span={17} className="ml-4">
        {mainList}
      </Col>
    </Row>
  )
})

export default locationPoint
