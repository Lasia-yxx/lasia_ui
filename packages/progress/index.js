import LsProgress from "./src/index";

// 为组件提供 install 安装方法，供按需引入
LsProgress.install = function (Vue) {
  Vue.component(LsProgress.name, LsProgress);
};
// 默认导出组件
export default LsProgress;
