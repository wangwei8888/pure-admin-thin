export default {
  path: "/nest",
  meta: {
    title: "嵌套路由"
  },
  children: [
    {
      path: "/nest/index",
      name: "nest",
      component: () => import("@/views/nest/index.vue"),
      meta: {
        title: "嵌套路由"
      }
      // children: [
      //   {
      //     path: "/nest/index/:id",
      //     name: "inner",
      //     component: () => import("@/views/nest/child.vue"),
      //     meta: {
      //       title: "菜单"
      //     }
      //   }
      // ]
    },
    {
      path: "/nest/index/:id",
      name: "inner",
      component: () => import("@/views/nest/child.vue"),
      meta: {
        title: "菜单",
        showLink: false
      }
    }
  ]
} as RouteConfigsTable;
