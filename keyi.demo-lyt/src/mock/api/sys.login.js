// const userDB = [
//   { userName: 'admin', userPassword: '123456', uuid: 'admin-uuid', name: '管理员' },
//   { userName: 'editor', userPassword: 'editor', uuid: 'editor-uuid', name: '编辑' },
//   { userName: 'user1', userPassword: 'user1', uuid: 'user1-uuid', name: '用户1' }
// ]

// export default [
//   {
//     path: '/api/login',
//     method: 'post',
//     handle ({ body }) {
//       const user = userDB.find(e => e.userName === body.userName && e.userPassword === body.userPassword)
//       if (user) {
//         return {
//           code: 0,
//           msg: '登录成功',
//           data: {
//             ...user,
//             token: '8dfhassad0asdjwoeiruty'
//           }
//         }
//       } else {
//         return {
//           code: 401,
//           msg: '用户名或密码错误',
//           data: {}
//         }
//       }
//     }
//   }
// ]
// w 封装的各种请求方法
// import request from '@/plugin/axios'

// export function AccountLogin (params) {
//   return request({
//     url: '/login',
//     method: 'post',
//     params
//   })
// }
