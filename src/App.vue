<template>
  <div id="app">
    <c-header v-if="headerNecessary"></c-header>
    <keep-alive>
      <router-view></router-view> 
    </keep-alive>
  </div>
</template>

<script>
import { setHtmlSize } from '@/common/js/utils' 
import CHeader from '@/components/CHeader/CHeader'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'app',
  data() {
    return {
      headerNecessary: true
    }
  },
  created() {
    this.$nextTick(() => {
      this.setRootFontsize(setHtmlSize())
    })
  },
  mounted() {
    window.onresize = () => {
      this.setRootFontsize(setHtmlSize())
    }
  },
  computed: {
    ...mapGetters([
      'rootFontSize'
    ])
  },
  methods: {
    ...mapMutations({
      setRootFontsize: 'SET_ROOTFONTSIZE'
    })
  },
  components: {
    CHeader
  },
  watch: {
    '$route' (to, from) {
      if (to.name === 'Homeh5') {
        this.headerNecessary = false
      } else {
        this.headerNecessary = true
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "./common/css/index"
  body
    margin: 0
</style>
