import { setToken } from '@/utils/auth';
export default {
  getCode() {},
  submitForm() { // TODO 当前只是临时的
    setToken('11111');
    if (this.redirect) {
      this.$router.replace(this.redirect);
    } else {
      this.$router.replace('/');
    }
  },
  toUserAgreement() {
    this.$router.push({
      path: '/userAgreement'
    });
  }
};
