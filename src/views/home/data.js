export default () => {
  return {
    isRefresh: false,
    loading: false,
    finished: false,
    topicHeight: 0,
    pagesize: 20,
    pageno: 1,
    key_word: '',
    list: [],
    totalnum: 0
  };
};
