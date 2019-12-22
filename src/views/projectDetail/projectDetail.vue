<template lang="pug">
  div.main
    div.title 合同详情
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
        div.right {{ parseInt(netData.bill_order) === 1 ? '普票' : '专票' }}
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

    div.title 开票记录
    div.content(v-for="(item, index) in netData.commission_one" :key="item.id" :class="{ cell: index < netData.commission_one.length - 1 }")
      div.item
        div.left 开票金额：
        div.right {{ item.open_money || 0 }}元
      div.item
        div.left 开票时间：
        div.right {{ item.open_time }}
      div.item
        div.left 创建人：
        div.right {{ netData.login_name }}
      div.item
        div.left 创建时间：
        div.right {{ item.create_time }}

    div.title 回款记录
    div.content(v-for="(item, index) in netData.commission_two" :key="item.id" :class="{ cell: index < netData.commission_two.length - 1 }")
      div.item
        div.left 回款金额：
        div.right {{ item.open_money || 0 }}元
      div.item
        div.left 回款时间：
        div.right {{ item.open_time }}
      div.item
        div.left 回款类型：
        div.right {{ parseInt(item.back_type) === 1 ? '基本款' : '专用款' }}
      div.item
        div.left 创建人：
        div.right {{ netData.login_name }}
      div.item
        div.left 创建时间：
        div.right {{ item.create_time }}

    div.title 打款记录
    div.content(v-for="(item, index) in netData.commission_three" :key="item.id" :class="{ cell: index < netData.commission_three.length - 1 }")
      div.item
        div.left 回款金额：
        div.right {{ item.open_money || 0 }}元
      div.item
        div.left 回款时间：
        div.right {{ item.open_time }}
      div.item
        div.left 创建人：
        div.right {{ netData.login_name }}
      div.item
        div.left 创建时间：
        div.right {{ item.create_time }}

    div.btn-warp
      a.btn(:href="'tel:' + netData.channel_tel") 联系业务员
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
