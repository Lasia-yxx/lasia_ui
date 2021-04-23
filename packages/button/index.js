import LsButton from "./src/index";

// 为组件提供 install 安装方法，供按需引入
LsButton.install = function (Vue) {
  Vue.component(LsButton.name, LsButton);
};
// 默认导出组件
export default LsButton;
