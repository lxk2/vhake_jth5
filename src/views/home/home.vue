<template lang="pug">
  div
    BackTop
    div.topic#topic
      div.t-item.td 名称
      div.t-item.td 项目金额
      div.t-item.td 已收款
      div.t-item.td 回款进度

    div.content
      van-pull-refresh(v-model="isRefresh" @refresh="onRefresh")
        van-list(v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :immediate-check="false" :style="{ minHeight: `calc(100vh - ${tabberHeight}px - ${topicHeight}px)` }")
          div.tr(v-for="(item) in list" :key="item.id" @click="toProjectDetail(item.id)")
            div.x-td.td {{ item.contract_name }}
            div.x-td.td {{ item.contract_price }}元
            div.x-td.td {{ item.sum_money }}元
            div.x-td.td {{ item.back_rate }}
</template>

<script>
import Vue from 'vue';
import {PullRefresh, List} from 'vant';
import data from './data';
import methods from './methods';
import BackTop from '@/components/backTop';

Vue.use(PullRefresh).use(List);
export default {
  data,
  methods,
  components: {
    BackTop
  },
  created() {
    this.getPageData();
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
