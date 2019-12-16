<template lang="pug">
  div
    div.logo
      img(src="@/assets/Bitmap.png")

    div.form
      div.form-item(:class="{ active: mobile || acI === 1 }")
        input(placeholder="请输入正确手机号" v-model="mobile" type="number" @focus="acI = 1" @blur="acI = 0")
        div.get-code(@click="getCode") {{ codeTips }}
      div.form-item(:class="{ active: code || acI === 2 }")
        input.cols-12(placeholder="请输入正确的手机验证码" v-model="code" type="number" @blur="acI = 0" @focus="acI = 2")

    div.btn(@click="submitForm") 登录
    div.tips
      svg-icon(v-if="checked" iconClass="check_on" @click="checked = !checked" className="svg")
      svg-icon(v-else iconClass="check_off" @click="checked = !checked" className="svg")
      p 登录表示你同意
        span(@click="toUserAgreement") 《用户协议》

</template>

<script>
import data from './data';
import methods from './methods';
import SvgIcon from '@/components/SvgIcon';
export default {
  data,
  methods,
  components: {
    SvgIcon
  },
  created() {}
};
</script>

<style lang="stylus" scoped>
@import '~@/styles/login.styl';
</style>
