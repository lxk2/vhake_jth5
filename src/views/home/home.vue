<template lang="pug">
  div
    div.topic#topic
      div.t-item.td 名称
      div.t-item.td 项目金额
      div.t-item.td 已收款
      div.t-item.td 回款进度

    div.content
      van-pull-refresh(v-model="isRefresh" @refresh="onRefresh")
        van-list(v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :immediate-check="false" :style="{ minHeight: `calc(100vh - ${tabberHeight}px - ${topicHeight}px)` }")
          div.tr(v-for="(item, key) in 40" :key="key" @click="toProjectDetail")
            div.x-td.td 广东省向荣企业公司有限责任分公司
            div.x-td.td 960000元
            div.x-td.td 480000元
            div.x-td.td 50%
</template>

<script>
import Vue from 'vue';
import { PullRefresh, List } from 'vant';
import data from './data';
import methods from './methods';
Vue.use(PullRefresh).use(List);
export default {
  data,
  methods,
  components: {},
  created() {
    this.$nextTick(() => {
      this.topicHeight = document.getElementById('topic').offsetHeight;
    });
  },
  props: {
    tabberHeight: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/styles/home.styl';
</style>
