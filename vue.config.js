module.exports = {
  devServer: {
    port: 8089, // 端口号
    https: false, // https:{type:Boolean}
    open: false, //配置自动启动浏览器
    proxy: {
      '/api/v1': {
        // target: 'http://ytj.createt.cn:17720',
        target: 'http://123.207.34.70:8006',
        changeOrigin: true,
        // pathRewrite: {
        //   '^/api': '',
        // },
      },
    },
  },
}
