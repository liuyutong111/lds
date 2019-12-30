import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      // 首页
      {
        path: 'index',
        name: 'index',
        meta: {
          auth: true
        },
        component: _import('system/index')
      },
      // 演示页面
      {
        path: 'xtsetting',
        name: '系统设置',
        meta: {
          title: '系统设置',
          auth: true
        },
        component: _import('demo/page/xtsetting')
      },
      {
        path: 'xtfeatures',
        name: '系统功能简介',
        meta: {
          title: '系统功能简介',
          auth: true
        },
        component: _import('demo/page/xtfeatures')
      },
      {
        path: 'xtlog',
        name: '日志查询',
        meta: {
          title: '日志查询',
          auth: true
        },
        component: _import('demo/page/xtlog')
      },
      {
        path: 'caozuo',
        name: '操作',
        meta: {
          title: '操作',
          auth: true
        },
        component: _import('demo/page/xtlog/caozuo.vue')
      },
      {
        path: 'baojin',
        name: '报警',
        meta: {
          title: '报警',
          auth: true
        },
        component: _import('demo/page/xtlog/baojin.vue')
      },
      {
        path: 'xtsoftware',
        name: '软件功能',
        meta: {
          title: '软件功能',
          auth: true
        },
        component: _import('demo/page/xtsoftware')
      },
      {
        path: 'usergl',
        name: '用户管理',
        meta: {
          title: '用户管理',
          auth: true
        },
        component: _import('demo/page/usergl')
      },
      {
        path: 'yhgroup',
        name: '用户分组',
        meta: {
          title: '用户分组',
          auth: true
        },
        component: _import('demo/page/yhgroup')
      },
      {
        path: 'tjgroup',
        name: '区域', 
        meta: {
          title: '区域',
          auth: true
        },
        component: _import('demo/page/tjgroup')
      },
      {
        path: 'sblist',
        name: '设备列表',
        meta: {
          title: '设备列表',
          auth: true
        },
        component: _import('demo/page/sblist')
      },
      {
        path: 'bjwarning',
        name: '设备报警',
        meta: {
          title: '设备报警',
          auth: true
        },
        component: _import('demo/page/bjwarning')
      },
      {
        path: 'bjrecording',
        name: '报警记录',
        meta: {
          title: '报警记录',
          auth: true
        },
        component: _import('demo/page/bjrecording')
      },
      {
        path: 'bjadd',
        name: '添加报警人',
        meta: {
          title: '添加报警人',
          auth: true
        },
        component: _import('demo/page/bjadd')
      },
      {
        path: 'sblinelist',
        name: '设备线路列表',
        meta: {
          title: '设备线路列表',
          auth: true
        },
        component: _import('demo/page/sblinelist')
      },
      {
        path: 'sbpoint',
        name: '采集点列表',
        meta: {
          title: '采集点列表',
          auth: true
        },
        component: _import('demo/page/sbpoint')
      },
      {
        path: 'cssetup',
        name: '参数设定',
        meta: {
          title: '参数设定',
          auth: true
        },
        component: _import('demo/page/cssetup')
      },
      {
        path: 'ssdata',
        name: '实时数据',
        meta: {
          title: '实时数据',
          auth: true
        },
        component: _import('demo/page/ssdata')
      },
      {
        path: 'sjanalysis',
        name: '数据分析',
        meta: {
          title: '数据分析',
          auth: true
        },
        component: _import('demo/page/sjanalysis')
      },
      {
        path: 'sjtable',
        name: '数据列表',
        meta: {
          title: '数据列表',
          auth: true
        },
        component: _import('demo/page/sjtable')
      },
      {
        path: 'map',
        name: '地图展示',
        meta: {
          title: '地图展示',
          auth: true
        },
        component: _import('demo/page/map')
      },
      // 系统 前端日志
      {
        path: 'log',
        name: 'log',
        meta: {
          title: '前端日志',
          auth: true
        },
        component: _import('system/log')
      },
      // 刷新页面 必须保留
      {
        path: 'refresh',
        name: 'refresh',
        hidden: true,
        component: _import('system/function/refresh')
      },
      // 页面重定向 必须保留
      {
        path: 'redirect/:route*',
        name: 'redirect',
        hidden: true,
        component: _import('system/function/redirect')
      }
    ]
  }
]

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登录
  {
    path: '/login',
    name: 'login',
    meta: {
      cache: true
    },
    component: _import('system/login')
  }
]
const registered = [
  // 注册
  {
    path: '/registered',
    name: 'registered',
    meta: {
      cache: true
    },
    component: _import('system/registered')
  }
]

/**
 * 错误页面
 */
const errorPage = [
  {
    path: '*',
    name: '404',
    component: _import('system/error/404')
  }
]

/**
 * 数据大屏展示
 */
const screen = [
  {
    path: '/screen',
    name: 'screen',
    component: _import('system/screen')
  }
]
/**
 * 注册成功
 */
const regissuccess = [
  {
    path: '/regissuccess',
    name: 'regissuccess',
    meta: {
      cache: true
    },
    component: _import('system/regissuccess')
  }
]
/**
 * 注册成功
 */
const welcome = [
  {
    path: '/welcome',
    name: 'welcome',
    meta: {
      cache: true
    },
    component: _import('system/welcome')
  }
]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage,
  ...screen,
  ...registered,
  ...regissuccess,
  ...welcome
]
