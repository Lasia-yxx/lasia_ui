const path = require("path");

module.exports = {
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },

  // 将构建好的文件输出到哪里（或者说将编译的文件）
  outputDir: "dist",

  // 放置静态资源的地方 (js/css/img/font/...)
  assetsDir: "",

  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  // 有效的值：`ture` | `false` | `"error"`
  // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
  lintOnSave: false,

  chainWebpack: (config) => {
    config.module
      .rule("js")
      .include.add(path.resolve(__dirname, "packages"))
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        return options;
      });
  },
  configureWebpack: () => {},

  // 三方插件的选项
  pluginOptions: {
    // ...
  },
};
