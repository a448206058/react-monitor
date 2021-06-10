import * as React from 'react'
import { Menu, Avatar } from 'antd'
import { observer } from 'mobx-react'
import { BrowserRouter, Link } from 'react-router-dom'
import { createHashHistory } from 'history';

import { useHistory } from 'react-router-dom'

import { DownOutlined, BookOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons'

const { SubMenu } = Menu

const Siber: React.FC<any> = observer((props) => {
  const { history } = props;
  // const history = useHistory()
  const toLink = (item: any) => {
    history.push('/funnel')
    props.history.push('/addProject');
  }

  return (
    <Menu mode="horizontal" className="fixedMenu flex" >
      <Menu.Item className="flex-left" key="sub0" onClick={toLink}>
        {/* <a href="/funnel"> <HomeOutlined />
          <span>首页</span></a> */}
        <Link to="/">
          <HomeOutlined />
          <span>首页</span>
        </Link>
      </Menu.Item>
      <SubMenu key="sub1" title="概览" icon={<DownOutlined />}>
        <Menu.Item key="1">
          <Link to="/">
            <span>应用列表</span>
          </Link></Menu.Item>
        <Menu.Item key="2"><Link to="/overview">
          <span>应用详情</span>
        </Link></Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" title="用户" icon={<DownOutlined />}>
        <Menu.Item key="21"><Link to="/behaviors">
          <span>用户细查</span>
        </Link></Menu.Item>
        <Menu.Item key="22"><Link to="/connectUser">
          <span>连线用户</span>
        </Link></Menu.Item>
      </SubMenu>
      <SubMenu key="sub3" title="错误" icon={<DownOutlined />}>
        <Menu.Item key="31"><Link to="/javascriptError">
          <span>JS错误</span>
        </Link></Menu.Item>
        <Menu.Item key="32"><Link to="/httpError">
          <span>API错误</span>
        </Link></Menu.Item>
        <Menu.Item key="33"><Link to="/resourceError">
          <span>静态资源错误统计</span>
        </Link></Menu.Item>
      </SubMenu>
      <SubMenu key="sub4" title="性能" icon={<DownOutlined />}>
        <Menu.Item key="41">
          <Link to="/httpPerformance">
            <span>接口耗时分析</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="42">
          <Link to="/pagePerformance">
            <span>页面性能分析</span>
          </Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub5" title="埋点" icon={<DownOutlined />}>
        <Menu.Item key="51">
          <Link to="/locationPoint">
            <span>自定义埋点</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="52">
          <Link to="/funnel">
            <span>漏斗分析</span>
          </Link>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="sub6">
        <BookOutlined />
        <span>使用文档</span>
      </Menu.Item>
      <Menu.Item key="sub7">
        <Avatar size={36} className="mr-3" icon={<UserOutlined />} />
      </Menu.Item>
    </Menu >
  )
})
export default Siber
