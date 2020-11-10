const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: "./",
  css: {
    requireModuleExtension: true,
    sourceMap: true,
    loaderOptions: {
      less: {
        // 若使用 less-loader@5，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            // 直接覆盖变量
            "text-color": "#111",
            "border-color": "#eee",
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "./src/theme/var.less";`
          }
        }
      },
      //配置路vw vm适配
      // postcss: {
      //   plugins: {
      //     // require('autoprefixer')({
      //     //     browsers: ['Android >= 4.0', 'iOS >= 8'],
      //     // })
      //     // autoprefixer: {
      //     //   browsers: ['Android >= 4.0', 'iOS >= 8'],
      //     // },
      //     // 'postcss-pxtorem': {
      //     //   rootValue: 37.5,
      //     //   propList: ['*'],
      //     // },
      //   }
      // }
    }
  },
  devServer: {
    hot: true,
    port: 9999,
    open: true,
    noInfo: false,
    overlay: {
      warnings: true,
      errors: true
    }
    // proxy: {
    //   '/': {
    //     target: config.domain,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/': '/'
    //     }
    //   }
    // }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@src", resolve("src"))
      .set("@views", resolve("src/views"));
  },
  lintOnSave: false // 保存不做eslint校验
};
