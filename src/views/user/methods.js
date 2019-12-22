export default {
  toLink(type) {
    let path = '/';
    switch (type) {
      case 1:
        path = '/userAgreement';
        break;
      case 2:
        path = '/aboutUs';
        break;
      default:
        path = '/';
        break;
    }
    this.$router.push({
      path
    });
  }
};
