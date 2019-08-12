<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  name: 'app',
  components: {
    FooterGuide
  },
  mounted () {
    this.getAddress()
    this.getUserInfo()
  },

  methods: {
    ...mapActions(['getAddress','getUserInfo'])
  },
}
</script>

<style lang="stylus" scoped>
#app
  width 100%
  height 100%
  background #f5f5f5
</style>
