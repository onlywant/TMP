export default {
  path: "/verification",
  meta: {
    icon: "informationLine",
    title: "可信验证",
    // showLink: false,
    rank: 10
  },
  children: [
    {
      path: "/verification/trustedRoot",
      name: "可信根",
      component: () => import("@/views/verification/trustedRoot/index.vue"),
      meta: {
        title: "可信根"
      }
    },
    {
      path: "/verification/trustedReport",
      name: "可信报告",
      component: () => import("@/views/verification/trustedReport/index.vue"),
      meta: {
        title: "可信报告"
      }
    },
    {
      path: "/verification/whiteList",
      name: "白名单",
      component: () => import("@/views/verification/whiteList/index.vue"),
      meta: {
        title: "白名单"
      }
    },
    {
      path: "/verification/staticMeasurement",
      name: "静态度量",
      component: () =>
        import("@/views/verification/staticMeasurement/index.vue"),
      meta: {
        title: "静态度量"
      }
    },
    {
      path: "/verification/dynamicMeasurement",
      name: "动态度量",
      component: () =>
        import("@/views/verification/dynamicMeasurement/index.vue"),
      meta: {
        title: "动态度量"
      }
    }
  ]
} as RouteConfigsTable;
