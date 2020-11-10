import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      tabbarShow: true // 需要显示 底部导航
    }
  },
  {
    path: "/message",
    name: "MESSAGE",
    component: () => import(/* webpackChunkName: "message" */ "@/views/Message.vue"),
    meta: {
      tabbarShow: true // 需要显示 底部导航
    }
  },
  {
    path: "/address",
    name: "ADDRESS",
    component: () => import(/* webpackChunkName: "address" */ "@/views/Address.vue"),
    meta: {
      tabbarShow: true // 需要显示 底部导航
    }
  },
  {
    path: "/groupChart",
    name: "GROUPCHART",
    component: () => import(/* webpackChunkName: "address" */ "@/views/GroupChart.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue"),
    meta: {
      tabbarShow: true // 需要显示 底部导航
    }
  },
  {
    path: "/404",
    name: "404",
    component: () => import(/* webpackChunkName: "address" */ "../views/404/404.vue"),
    hidden: true
  },
  {
    path: '/*',
    redirect: '/404',
    hidden: true,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
