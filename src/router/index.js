import { createRouter, createWebHistory } from "vue-router";
import AlimentosView from "@/views/AlimentosView.vue";
import HomeView from "@/views/HomeView.vue";
import BrinquedosView from "@/views/BrinquedosView.vue";
import HigieneView from "@/views/HigieneView.vue";
import AcessóriosView from "@/views/AcessóriosView.vue";

const routes = [
  {path: '/', component: HomeView},
  {path: '/alimentos', component: AlimentosView},
  {path: '/brinquedos', component: BrinquedosView},
  {path: '/higiene', component: HigieneView},
  {path: '/acessorios', component: AcessóriosView},
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
