<template lang="pug">
  div
    div(v-if="isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon" v-on="$listeners")
    svg(v-else :class="svgClass" aria-hidden="true" v-on="$listeners" :style="svgStyle")
      use(:xlink:href="iconName")
</template>

<script>
// doc: https://panjiachen.github.io/vue-element-admin-site/feature/component/svg-icon.html#usage
import { isExternal } from '@/utils/validate';
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    svgStyle: {
      type: String,
      default: ''
    }
  },
  computed: {
    isExternal() {
      return isExternal(this.iconClass);
    },
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className;
      } else {
        return 'svg-icon';
      }
    },
    styleExternalIcon() {
      return {
        mask: `url(${this.iconClass}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${this.iconClass}) no-repeat 50% 50%`
      };
    }
  }
};
</script>

<style lang="stylus" scoped>
.svg-icon
  width 1em
  height 1em
  vertical-align -0.25em
  fill currentColor
  overflow hidden

.svg-external-icon
  background-color currentColor
  mask-size cover!important
  display inline-block

.svg
  display block
  width 40px
  height 40px
  position relative
  top -2.6px

.cellSvg
  width 35px
  height 35px
  display block
  position relative
  top -3px
</style>
