<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { setHtmlSize } from '@/common/js/utils'
export default {
  name: 'app',
  data() {
    return {

    }
  },
  created() {
    this.$nextTick(() => {
      setHtmlSize()
    })
  },
  mounted() {
    window.onresize = () => {
      setHtmlSize()
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "./common/css/index"
</style>
