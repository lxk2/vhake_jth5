<template lang="pug">
  div.main
    div.logo
      img(src="@/assets/Bitmap.png")

    div.form
      div.form-item(:class="{ active: mobile || acI === 1 }")
        van-field(placeholder="请输入正确手机号" v-model="mobile" type="number" @focus="acI = 1" @blur="acI = 0" :style="{ fontSize: '0.4rem', padding: '0 0.1333333333333rem' }")
      div.form-item(:class="{ active: password || acI === 2 }")
        van-field(placeholder="请输入正确的密码" v-model="password" type="password" @blur="acI = 0" @focus="acI = 2" :style="{ fontSize: '0.4rem', padding: '0 0.1333333333333rem' }")

    div.btn(@click="submitForm") 登录
    div.tips
      svg-icon(v-if="checked" iconClass="check_on" @click="checked = !checked" className="svg")
      svg-icon(v-else iconClass="check_off" @click="checked = !checked" className="svg")
      p 登录表示你同意
        i(@click="toUserAgreement") 《用户协议》

</template>

<script>
import data from './data';
import methods from './methods';
import SvgIcon from '@/components/SvgIcon';
import Vue from 'vue';
import { Field } from 'vant';
Vue.use(Field);
export default {
  data,
  methods,
  components: {
    SvgIcon
  },
  created() {
    this.redirect = this.$route.query.redirect || '';
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/styles/login.styl';
</style>
