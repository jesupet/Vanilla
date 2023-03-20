const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader')
      .loader('file-loader')
      .tap((options) => {
        // opciones del loader
        return options;
      });
  },
};
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Vanilla/'
    : '/'
}