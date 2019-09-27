import api from './index'
import { axios } from '@/utils/request'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import Vue from 'vue'
/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
export function login (parameter) {
  return axios({
    url: '/auth/login',
    method: 'post',
    data: {
      loginName: parameter.username,
      password: parameter.password,
      rememberMe: parameter.rememberMe,
      returnUrl: '',
      loginIP: ''
    }
  })
}

export function getSmsCaptcha (parameter) {
  return axios({
    url: api.SendSms,
    method: 'post',
    data: parameter
  })
}

export function getInfo () {
  console.log(Vue.ls.get(ACCESS_TOKEN))
  return axios({
    url: '/user/info',
    method: 'get',
    headers: {
      // 'Authorization': Vue.ls.get(ACCESS_TOKEN),
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export function logout () {
  return axios({
    url: '/user/logout',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * get user 2step code open?
 * @param parameter {*}
 */
export function get2step (parameter) {
  return axios({
    url: api.twoStepCode,
    method: 'post',
    data: parameter
  })
}
