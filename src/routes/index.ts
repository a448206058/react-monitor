import loadable from '@loadable/component'
import Layout, { H5Layout } from '@/layouts'
import { RouteConfig } from 'react-router-config'
import Home from '@/pages/home'
const routesConfig: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  // hybird 路由
  {
    path: '/hybird',
    exact: true,
    component: Layout,
    routes: [
      {
        path: '/',
        exact: false,
        component: loadable(() => import('@/pages/hybird'))
      }
    ]
  },
  // h5 相关路由
  {
    path: '/h5',
    exact: false,
    component: H5Layout，
    routes: [
      {
        path: '/',
        exact: false,
        component: loadable(() => import('@/pages/h5'))
      }
    ]
  }
]
export default routesConfig
