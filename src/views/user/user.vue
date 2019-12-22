<template lang="pug">
  div
    div.userinfo
      div.avatar
        van-image(width="100%" height="100%" round src="https://images.http.org.cn/userlogo.png" fit="cover")
      div.name {{ mobile }}
    div.cell(@click="toLink(1)")
      div.left
        svg-icon(iconClass="wenhao" className="cellSvg")
        div.label 用户协议
      div.right
        van-icon(name="arrow" :style="{ fontSize: '16px' }")
    a.cell(href="tel:13336452276")
      div.left
        svg-icon(iconClass="kefu" className="cellSvg")
        div.label 客服
      div.right
        van-icon(name="arrow" :style="{ fontSize: '16px', color: '#333' }")
    div.cell(@click="toLink(2)")
      div.left
        svg-icon(iconClass="gantanhao" className="cellSvg")
        div.label 关于我们
      div.right
        van-icon(name="arrow" :style="{ fontSize: '16px' }")
</template>

<script>
import data from './data';
import methods from './methods';
import Vue from 'vue';
import { Image, Icon } from 'vant';
import SvgIcon from '@/components/SvgIcon';
Vue.use(Image).use(Icon);
export default {
  data,
  methods,
  components: {
    SvgIcon
  },
  created() {},
  computed: {
    mobile() {
      return sessionStorage.getItem('Mob') || '';
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/styles/user.styl';
</style>
