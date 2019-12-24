import { login } from '@/api/user';
export default {
  submitForm() {
    if (!this.checked) {
      this.$toast.fail('请先同意用户协议');
      return false;
    }
    login({
      tel: this.mobile,
      pwd: this.password
    })
      .then(res => {
        if (res.ret === this.$statusCode.SUCCESS_CODE) {
          this.$store.commit('SET_MOB', this.mobile);
          this.$toast.success({
            message: '登录成功',
            onClose: () => {
              if (this.redirect) {
                this.$router.replace(this.redirect);
              } else {
                this.$router.replace('/');
              }
            }
          });
        } else {
          this.$toast.fail(res.message);
        }
      });
  },
  toUserAgreement() {
    this.$router.push({
      path: '/userAgreement'
    });
  }
};
