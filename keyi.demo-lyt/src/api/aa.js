// w 封装的各种请求方法
import request from '@/plugin/axios'

// 用户类接口
// 系统设置查看接口
export function system () {
  return request({
    url: '/system',
    method: 'get'
  })
}
// 手机号验证码接口
export function phone (params) {
  return request({
    url: '/phone',
    method: 'get',
    params
  })
}
// 手机号注册接口
export function phonelogin (params) {
  return request({
    url: '/phonelogin',
    method: 'get',
    params
  })
}
// 分组删除接口
export function groupdel (params) {
  return request({
    url: '/group',
    method: 'del',
    params
  })
}
// 分组修改接口
export function groupput (params) {
  return request({
    url: '/group',
    method: 'put',
    params
  })
}
// 分组添加接口
export function groupadd (params) {
  return request({
    url: '/group',
    headers: { 'Content-Type': 'multipart/form-data' },
    method: 'post',
    data: params
  })
}
// 分组查看接口
export function grouplook (params) {
  return request({
    url: '/group',
    method: 'get',
    params
  })
}
// 修改子用户信息
export function userput (params) {
  return request({
    url: '/user',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
    method: 'put',
    params
  })
}
// 添加子用户信息
export function useradd (params) {
  return request({
    url: '/user',
    headers: { 'Content-Type': 'multipart/form-data' },
    method: 'post',
    data: params
  })
}
// 删除子用户信息
export function userdel (params) {
  return request({
    url: '/user',
    method: 'del',
    params
  })
}
// 查看子用户信息
export function userlook (params) {
  return request({
    url: '/user',
    method: 'get',
    params
  })
}
// 用户修改密码
export function userpassword (params) {
  return request({
    url: '/userpassword',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
    method: 'put',
    params
  })
}
// 用户登录接口
export function login (params) {
  return request({
    url: '/login',
    method: 'post',
    params
  })
}
// 系统信息更改接口
export function updatesystem (params) {
  return request({
    url: '/updatesystem',
    method: 'post',
    params
  })
}

// 设备类接口
// 添加采集点
export function dataPoint (params) {
  return request({
    url: '/dataPoint',
    method: 'post',
    params
  })
}
// 添加线路
export function line (params) {
  return request({
    url: '/line',
    method: 'post',
    params
  })
}
// 添加设备
export function dev (params) {
  return request({
    url: '/dev',
    method: 'post',
    params
  })
}
