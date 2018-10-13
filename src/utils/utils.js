import axios from 'axios'
import qs from 'qs'
export default {
  httpUrl: 'http://47.99.165.110:8068/',
  // httpUrl: 'api/',

  Post (url, data, fn, next) {
    // var obj = Object.assign(data);
    var obj = qs.stringify(data)
    // 区别开发环境和生产环境
    if (process.env.NODE_ENV === 'development') {
      this.httpUrl = '/api/'
    };
    axios.post(this.httpUrl + url, obj).then((re) => {
      fn(re.data)
      // 针对多个api异步调用时
      if (typeof next !== 'undefined') {
        next(re.data)
      }
    }).catch(err => {
      console.log('catch+err>>>>' + err)
    })
  },
  Get (url, data, fn, next) {
    var obj = Object.assign(data)
    // 区别开发环境和生产环境
    if (process.env.NODE_ENV === 'development') {
      this.httpUrl = '/api/'
    };
    var params = this.hstringify(obj)
    axios.get(this.httpUrl + url + params).then((re) => {
      fn(re.data)
      // 针对多个api异步调用时
      if (typeof next !== 'undefined') {
        next(re.data)
      }
    }).catch(err => {
      console.log('catch+err>>>>' + err)
    })
  },
  hstringify (data) {
    var params = ''
    for (var v in data) {
      if (params === '') {
        // var val = this.isChinese(data[v]) ? encodeURI(encodeURI(data[v])) : data[v]
        params += '?' + v + '=' + encodeURI(encodeURI(data[v])) + ''
      } else {
        // var val = this.isChinese(data[v]) ? encodeURI(encodeURI(data[v])) : data[v]
        params += '&' + v + '=' + encodeURI(encodeURI(data[v])) + ''
      }
    }
    return params
  },
  isChinese (str) {
    if (/^[\u3220-\uFA29]+$/.test(str)) {
      return true
    } else {
      return false
    }
  },
  // 获取地址栏参数并解决中文乱码
  getUrlParam (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    var HashCan = window.location.hash
    HashCan = HashCan.split('?')
    if (HashCan.length >= 2) {
      HashCan = '?' + HashCan[1]
      var r = HashCan.substr(1).match(reg)
      if (r != null) return decodeURIComponent(r[2])
      return null
    } else {
      return null
    }
  }
}
