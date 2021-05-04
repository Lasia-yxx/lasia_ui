import LsCard from "./src/index";

// 为组件提供 install 安装方法，供按需引入
LsCard.install = function (Vue) {
  Vue.component(LsCard.name, LsCard);
};
// 默认导出组件
export default LsCard;
