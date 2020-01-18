const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end();

    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-html-loader')
      .loader('pug-html-loader')
      .end();
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px2rem-exclude')({
            remUnit: 75,
            exclude: /node_modules|backTop/i
          })
        ]
      }
    }
  },
  devServer: {
    proxy: {
      // 配置跨域
      '/api': {
        target: 'http://ht.jtlw.com.cn',
        ws: false,
        changeOrigin: true
        // pathRewrite: {
        //   '^/api': '/'
        // }
      }
    }
  }
};
