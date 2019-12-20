<template lang="pug">
  div.main
    div.title {{ netData.contract_name }}
    div.content
      div.item
        div.left 合同名称：
        div.right {{ netData.contract_name }}
      div.item
        div.left 原始编号：
        div.right {{ netData.ori_number }}
      div.item
        div.left 自编号：
        div.right {{ netData.self_number }}
      div.item
        div.left 合同金额：
        div.right {{ netData.contract_price || 0 }}元
      div.item
        div.left 发票要求：
        div.right {{ netData.bill_order === 1 ? '普票' : '专票' }}
      div.item
        div.left 管理费率：
        div.right {{ netData.manage_rate }}
      div.item
        div.left 甲方名称：
        div.right {{ netData.party_name }}
      div.item
        div.left 承包人姓名：
        div.right {{ netData.farmer_contact }}
      div.item
        div.left 承包人电话：
        div.right {{ netData.farmer_tel }}
      div.item
        div.left 创建时间：
        div.right {{ netData.create_time }}
      div.item
        div.left 税率：
        div.right {{ netData.tax_rate }}
      div.item
        div.left 业务员名称：
        div.right {{ netData.login_name }}
      div.item
        div.left 已收款：
        div.right {{ netData.sum_money || 0 }}元
      div.item
        div.left 回款进度：
        div.right {{ netData.back_rate }}

    div.btn-warp
      a.btn 联系业务员
</template>

<script>
import data from './data';
import methods from './methods';
export default {
  data,
  methods,
  async created() {
    this.id = this.$route.query.c_id || 0;
    await this.getPageData();
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/styles/projectDetail.styl';
</style>
