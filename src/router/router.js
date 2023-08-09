import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import previewPage from "@/pages/previewPage.vue"; // Изменено на большую букву
import Layout from "@/pages/Layout.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '', // Соответствует корневому пути
          component: MainPage
        },
        {
          path: 'preview', 
          component: previewPage
        }
      ]
    }
  ],
});
