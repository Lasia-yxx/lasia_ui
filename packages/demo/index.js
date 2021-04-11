import demoComponent from "./src/demo";

// 为组件提供 install 安装方法，供按需引入
demoComponent.install = function (Vue) {
  Vue.component(demoComponent.name, demoComponent);
};
// 默认导出组件
export default demoComponent;
