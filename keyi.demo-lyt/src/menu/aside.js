// 菜单 侧边栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  // {
  //   title: '页面',
  //   icon: 'folder-o',
  //   children: [
  //     {
  //       path: '/page1',
  //       title: '页面 1',
  //       children: [
  //         {
  //           path: '/page4',
  //           title: '页面4'
  //         }
  //       ]
  //     },
  //     { path: '/page2', title: '页面 2' },
  //     { path: '/page3', title: '页面 3' },
  //     { path: '/page4', title: '页面 4' }
  //   ]
  // },
  {
    path: '/xtsetting',
    title: '系统设置',
    icon: 'sliders'
  },
  {
    title: '功能简介',
    icon: 'edit',
    children: [
      {
        path: '/xtfeatures',
        icon: 'none',
        title: '系统功能简介编辑'
      },
      {
        path: '/xtlog',
        icon: 'none',
        title: '日志查询'
      },
      {
        path: '/xtsoftware',
        icon: 'none',
        title: '软件功能'
      }
    ]
  },
  {
    title: '用户管理',
    icon: 'users',
    children: [
      {
        path: '/usergl',
        icon: 'none',
        title: '用户管理'
      },
      {
        path: '/yhgroup',
        icon: 'none',
        title: '用户分组'
      },
      
    ]
  },
  {
    title: '设备管理',
    icon: 'television',
    children: [
      {
        path: '/sblist',
        icon: 'none',
        title: '设备列表'
      },
      {
        title: '设备报警',
        icon: 'none',
        children: [
          {
            path: '/bjwarning',
            icon: 'none',
            title: '报警列表'
          },
          {
            path: '/bjrecording',
            icon: 'none',
            title: '报警记录'
          },
          {
            path: '/bjadd',
            icon: 'none',
            title: '添加报警人'
          }
        ]
      },
      {
        path: '/sblinelist',
        icon: 'none',
        title: '线路列表'
      },
      {
        path: '/sbpoint',
        icon: 'none',
        title: '采集点列表'
      }
    ]
  },
  {
    path: '/cssetup',
    title: '参数设定',
    icon: 'wrench'
  },
  {
    path: '/ssdata',
    title: '实时数据',
    icon: 'bar-chart'
  },
  {
    path: '/sjanalysis',
    title: '数据分析',
    icon: 'pie-chart'
  },
  {
    path: '/sjtable',
    title: '数据报表',
    icon: 'file-text'
  },
  {
    path: '/map',
    title: '地图展示',
    icon: 'map'
  },
  {
    path: 'screen',
    title: '大屏展示',
    icon: 'cubes'
  }
]
