module.exports = {
  // scss全局变量
  css: {
    loaderOptions: {
      // 给 scss-loader 传递选项
      scss: {
        // eslint-disable-next-line quotes
        prependData: `@import "~@/styles/variables.scss";`
      }

    }
  }
}
