import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import PhotosPage from "@/pages/PhotosPage.vue";


const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/photos',
        component: PhotosPage
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router