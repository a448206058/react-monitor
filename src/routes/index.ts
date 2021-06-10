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
  // APP 路由
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
  {
    path: '/addProject',
    exact: true,
    component: Layout,
    routes: [
      {
        path: '/addProject',
        exact: false,
        component: loadable(() => import('@/pages/addProject'))
      }
    ]
  },
  // H5 相关路由
  {
    path: '/h5',
    exact: false,
    component: H5Layout,
    routes: [
      {
        path: '/',
        exact: false,
        component: loadable(() => import('@/pages/h5'))
      }
    ]
  },
  {
    path: '/overview',
    exact: false,
    component: Layout,
    routes: [
      {
        path: '/',
        exact: false,
        component: loadable(() => import('@/pages/overview'))
      }
    ]
  },
  {
    path: '/httpPerformance',
    exact: false,
    component: Layout,
    routes: [
      {
        path: '/',
        exact: false,
        component: loadable(() => import('@/pages/httpPerformance'))
      }
    ]
  },
  {
    path: '/pagePerformance',
    exact: false,
    component: Layout,
    routes: [
      {
        path: '/',
        exact: false,
        component: loadable(() => import('@/pages/pagePerformance'))
      }
    ]
  },
  {
    path: '/javascriptError',
    exact: false,
    component: Layout,
    routes: [
      {
        path: '/',
        exact: false,
        component: loadable(() => import('@/pages/javascriptError'))
      }
    ]
  },
  {
    path: '/javascriptErrorDetail',
    exact: false,
    component: Layout,
    routes: [
      {
        path: '/',
        exact: false,
        component: loadable(() => import('@/pages/javascriptError/detail'))
      }
    ]
  },
  {
    path: '/httpError',
    exact: false,
    component: Layout,
    routes: [
      {
        path: '/',
        exact: false,
        component: loadable(() => import('@/pages/httpError'))
      }
    ]
  },
  {
    path: '/httpErrorDetail',
    exact: false,
    component: Layout,
    routes: [
      {
        path: '/',
        exact: false,
        component: loadable(() => import('@/pages/httpError/detail'))
      }
    ]
  },
  {
    path: '/resourceError',
    exact: false,
    component: Layout,
    routes: [
      {
        path: '/',
        exact: false,
        component: loadable(() => import('@/pages/resourceError'))
      }
    ]
  },
  {
    path: '/funnel',
    exact: false,
    component: Layout,
    routes: [
      {
        path: '/',
        exact: false,
        component: loadable(() => import('@/pages/funnel'))
      }
    ]
  },
  {
    path: '/behaviors',
    exact: false,
    component: Layout,
    routes: [
      {
        path: '/',
        exact: false,
        component: loadable(() => import('@/pages/behaviors'))
      }
    ]
  },
  {
    path: '/connectUser',
    exact: false,
    component: Layout,
    routes: [
      {
        path: '/',
        exact: false,
        component: loadable(() => import('@/pages/connectUser'))
      }
    ]
  },
  {
    path: '/behaviorsDetail',
    exact: false,
    component: Layout,
    routes: [
      {
        path: '/',
        exact: false,
        component: loadable(() => import('@/pages/behaviors/detail'))
      }
    ]
  }
]

export default routesConfig
