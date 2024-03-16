import { createRouter, createWebHashHistory } from "vue-router";
import NotFound from "@/pages/404.vue";
import Complaint from "@/pages/complaint/index.vue";
import Index from "@/layouts/index.vue";
const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
    children: [
      {
        path: "/",
        name: "complaint",
        component: Complaint,
      },
    ],
  },
  // {
  //   path: "/login",
  //   component: Login,
  // },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
