<template>
  <div id="app">
    <v_header></v_header>
    <router-view/>
    <v_footer></v_footer>
  </div>
</template>

<script>
import v_header from './components/Header/Header'
import v_footer from './components/Footer/Footer'
export default {
  name: 'App',
  components: {
    v_header,
    v_footer
  },
  mounted(){
    // 关闭浏览器窗口的时候清空浏览器缓存在localStorage的数据
    window.onunload = function (e) {
        var storage = window.localStorage;
        storage.clear()
    }
  }
}
</script>

<style>
#app {
  height: 100%;
}
</style>
