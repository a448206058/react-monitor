import { useStores } from '@/hooks'
import { observer } from 'mobx-react'
import React from 'react'
import { Form, Input, Button, Checkbox, Select } from 'antd'
import { withRouter } from 'react-router-dom'

const { Option } = Select

const AddProject: React.FC = observer((props) => {
  const counterStore = useStores('counterStore')

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  }
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
  }

  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  function handleChange(value: string) {
    console.log(`selected ${value}`)
  }

  return (
    <Form
      {...layout}
      name="basic"
      className="mt-270"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="项目名称"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input className="wd_200" />
      </Form.Item>

      <Form.Item
        label="所属团队"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          创建新项目
        </Button>
      </Form.Item>
    </Form>
  )
})

// export default AddProject

export default withRouter(AddProject)
