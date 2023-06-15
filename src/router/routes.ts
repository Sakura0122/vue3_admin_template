// 对外暴露路由
export const constantRoute = [
  {
    // 登录
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    // 登陆成功后的首页
    path: "/",
    name: "layout",
    component: () => import("@/views/home/index.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404/index.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    name: "any",
    redirect: "/404",
  },
];
