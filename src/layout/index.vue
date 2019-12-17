<template lang="pug">
  div
    router-view(:style="{ marginBottom: `${tabberHeight}px`, minHeight: `calc(100vh - ${tabberHeight}px)`, boxSizing: 'border-box' }" :tabberHeight="tabberHeight")
    van-tabbar(:value="active" :safe-area-inset-bottom="true" :route="true" v-show="[0, 1].indexOf(active) !== -1" ref="tabbar")
      van-tabbar-item(to="/" :replace="isReplace")
        span 全部项目
        svg-icon(slot="icon" slot-scope="props" :iconClass="props.active ? 'project_on' : 'project_off'" svgStyle="width: 18px;height: 18px;")
      van-tabbar-item(to="/user" :replace="isReplace")
        span 个人中心
        svg-icon(slot="icon" slot-scope="props" :iconClass="props.active ? 'user_on' : 'user_off'" svgStyle="width: 18px;height: 18px;")
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
import { mapState } from 'vuex';
import SvgIcon from '@/components/SvgIcon';
Vue.use(Tabbar).use(TabbarItem);
export default {
  data() {
    return {
      tabberHeight: 0
    };
  },
  methods: {

  },
  components: {
    SvgIcon
  },
  computed: {
    ...mapState([
      'active',
      'isReplace'
    ])
  },
  updated() { // DOM 更新后
    this.$nextTick(() => {
      this.tabberHeight = this.$refs.tabbar.$el.offsetHeight;
    });
  }
};
</script>

<style lang="stylus" scoped>

</style>
