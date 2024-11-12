import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
    {
        path: "/tokuu_load",
        name: "tokuu_load",
        component: () => import("@/views/tokuu_load/index.vue"),
    },
    {
        path: "/tokuu_third",
        name: "tokuu_third",
        component: () => import("@/views/tokuu_third/index.vue"),
    },
    {
        path: "/tokuu_track",
        name: "tokuu_track",
        component: () => import("@/views/tokuu_track/index.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
