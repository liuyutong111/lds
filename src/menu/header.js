// 菜单 顶栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '页面',
    icon: 'folder-o',
    children: [
      {
        path: '/xtsetting',
        title: '系统设置',
        icon: 'folder-o'
      },
      {
        title: '功能简介',
        icon: 'folder-o',
        children: [
          {
            path: '/xtfeatures',
            title: '系统功能简介编辑'
          },
          {
            path: '/xtlog',
            title: '日志查询'
          },
          {
            path: '/xtsoftware',
            title: '软件功能'
          }
        ]
      },
      {
        title: '用户管理',
        icon: 'folder-o',
        children: [
          {
            path: '/usergl',
            title: '用户管理'
          },
          {
            path: '/yhgroup',
            title: '用户分组',
          },
        ]
      },
      {
        title: '设备管理',
        icon: 'folder-o',
        children: [
          {
            path: '/sblist',
            title: '设备列表'
          },
          {
            title: '设备报警',
            icon: 'folder-o',
            children: [
              {
                path: '/bjwarning',
                icon: 'folder-o',
                title: '报警列表'
              },
              {
                path: '/bjrecording',
                icon: 'folder-o',
                title: '报警记录'
              },
              {
                path: '/bjadd',
                icon: 'folder-o',
                title: '添加报警人'
              }
            ]
          },
          {
            path: '/sblinelist',
            title: '线路列表'
          },
          {
            path: '/sbpoint',
            title: '采集点列表'
          }
        ]
      },
      {
        path: '/cssetup',
        title: '参数设定',
        icon: 'folder-o'
      },
      {
        path: '/ssdata',
        title: '实时数据',
        icon: 'folder-o'
      },
      {
        path: '/sjanalysis',
        title: '数据分析',
        icon: 'folder-o'
      },
      {
        path: '/sjtable',
        title: '数据报表',
        icon: 'folder-o'
      },
      {
        path: '/map',
        title: '地图展示',
        icon: 'folder-o'
      },
      {
        path: 'screen',
        title: '大屏展示',
        icon: 'folder-o'
      }
    ]
  }
]
