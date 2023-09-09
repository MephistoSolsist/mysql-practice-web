import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("@/views/index.vue"),
        children: [
            { path: "/", component: () => import("@/views/WelcomePage.vue") },
            { path: "/login", component: () => import("@/views/LoginPage.vue") },
            { path: "/register", component: () => import("@/views/RegisterPage.vue") },
            { path: "/main", component: () => import("@/views/MainPage.vue") },
            { path: "/manage", component: () => import("@/views/ManagePage.vue") }
        ],
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
