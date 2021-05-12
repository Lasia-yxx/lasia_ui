import LsCheckbox from "./src/index";

// 为组件提供 install 安装方法，供按需引入
LsCheckbox.install = function (Vue) {
  Vue.component(LsCheckbox.name, LsCheckbox);
};
// 默认导出组件
export default LsCheckbox;
