import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 配置请求
import axios from "axios";
Vue.prototype.$axios = axios;

// 模拟数据使用
require("../mock");

// 伸缩布局方案
import "amfe-flexible";

// 组织树
import VsTree from "vs-tree";
import "vs-tree/lib/style/index.css";
Vue.use(VsTree);

// 移动端组件库
import "vant/lib/index.css";
import {
  Button,
  Icon,
  Tabbar,
  TabbarItem,
  // Badge,
  NavBar,
  IndexBar,
  IndexAnchor,
  Search,
  Collapse,
  CollapseItem,
  Cell,
  TreeSelect,
  Checkbox,
  CheckboxGroup,
  Tab,
  Tabs,
  SwipeCell,
  card
} from "vant";
Vue.use(Button);
Vue.use(Icon);
Vue.use(Tabbar);
Vue.use(TabbarItem);
// Vue.use(Badge);
Vue.use(NavBar);
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Search);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Cell);
Vue.use(TreeSelect);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(SwipeCell);
Vue.use(card);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
