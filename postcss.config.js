module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-px2rem-exclude': {
      remUnit: 75,
      exclude: /node_modules|backTop/i
    }
  }
};
