import LsSwitch from "./src/index";

// 为组件提供 install 安装方法，供按需引入
LsSwitch.install = function (Vue) {
  Vue.component(LsSwitch.name, LsSwitch);
};
// 默认导出组件
export default LsSwitch;
