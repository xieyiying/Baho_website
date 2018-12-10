<template>
  <div id="app">
    <div class="web_header">
      <v_header v-if="device === 'pc'"></v_header>
      <m_header v-else></m_header>
    </div>
    <router-view/>
    <div class="web_footer">
      <v_footer v-if="device === 'pc'"></v_footer>
      <m_footer v-else></m_footer>
    </div>
  </div>
</template>

<script>
import v_header from './components/Header/Header'
import v_footer from './components/Footer/Footer'
export default {
  name: 'App',
  components: {
    v_header,
    v_footer,
  },
  data() {
    return {
      device: 'pc'
    }
  },
  methods: {
    judgeDevice() {
      if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        this.device = 'yd'
      } else {
        this.device = 'pc'
      }
    }
  },
  mounted(){
    // 关闭浏览器窗口的时候清空浏览器缓存在localStorage的数据
    window.onunload = function (e) {
        // var storage = window.localStorage;
        // storage.clear()
        // localStorage.removeItem('active')
    }
  },
  created() {
    this.judgeDevice()
  }
}
</script>

<style>
#app {
  height: 100%;
}
</style>
