import LsToggle from "./src/index";

// 为组件提供 install 安装方法，供按需引入
LsToggle.install = function (Vue) {
  Vue.component(LsToggle.name, LsToggle);
};
// 默认导出组件
export default LsToggle;
