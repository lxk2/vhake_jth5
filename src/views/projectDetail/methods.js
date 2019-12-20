import { contractDetail } from '@/api/user';
export default {
  async getPageData() {
    await contractDetail(this.id)
      .then(res => {
        if (res.ret === this.$statusCode.SUCCESS_CODE) {
          this.netData = res.data;
        } else {
          this.$toast.fail({
            message: res.message || res.errmsg,
            onClose: () => {
              this.$router.go(-1);
            }
          });
        }
      });
  }
};
