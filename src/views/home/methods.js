import { list } from '@/api/user';
export default {
  async onRefresh() {
    this.pageno = 1;
    this.key_word = '';
    this.finished = false;
    this.loading = false;
    this.list = [];
    await this.getPageData();
    this.isRefresh = false;
  },
  async onLoad() {
    this.pageno++;
    await this.getPageData();
    this.loading = false;
    if (this.list.length >= this.totalnum) {
      this.finished = true;
    }
  },
  toProjectDetail(c_id) {
    this.$router.push({
      path: '/projectDetail',
      query: {
        c_id
      }
    });
  },
  async getPageData() {
    await list({
      pagesize: this.pagesize,
      pageno: this.pageno,
      key_word: this.key_word,
      tel: sessionStorage.getItem('Mob'),
      create_user: 322
    })
      .then(res => {
        if (res.ret === this.$statusCode.SUCCESS_CODE) {
          this.totalnum = typeof res.totalnum === 'string' ? parseInt(res.totalnum, 10) : res.totalnum;
          if (this.pageno === 1) {
            this.list = res.data;
          } else {
            this.list = this.list.concat(res.data);
          }
        } else {
          this.$toast.fail(res.msssage || res.errmsg);
        }
      });
  }
};
