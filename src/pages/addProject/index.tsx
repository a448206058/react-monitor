import { useStores } from '@/hooks'
import { observer } from 'mobx-react'
import React from 'react'
import { Form, Input, Button, Checkbox, Select, message } from 'antd'
import type { TableListItem } from './data.d';
import { withRouter } from 'react-router-dom'
import { addRule } from './service';

const { Option } = Select

/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */
const handleAdd = async (fields: TableListItem) => {
  const hide = message.loading('Adding');
  try {
    fields.title = fields.projectName;
    fields.author = 'liu';
    fields.content = 'hehe';
    fields.category = '111';
    await addRule({ ...fields });
    hide();
    message.success('Added successfully');
    return true;
  } catch (error) {
    hide();
    message.error('Adding failed, please try again!');
    return false;
  }
};

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
    handleAdd(values);
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
        name="projectName"
        rules={[{ required: true, message: 'Please input your projectName!' }]}
      >
        <Input className="wd_200" />
      </Form.Item>

      <Form.Item
        label="监控ID"
        name="webMonitorId"
        rules={[{ required: true, message: 'Please input your webMonitorId!' }]}
      >
        {/* <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select> */}
        <Input className="wd_200" />
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
