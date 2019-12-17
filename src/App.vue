<template lang="pug">
  div#app
    router-view
</template>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

.van-tabbar
  border-top 1px solid #D8D8D8

.van-field__control
  font-size 30px

.active
  .van-field__control
    color #2497ff

.van-cell:not(:last-child)::after
  border-bottom none
</style>
