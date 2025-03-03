import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GiveAway from "@/components/GiveAway.vue";
import WishList from "@/components/WishList.vue";
import LoginView from "@/components/LoginView.vue";

const routes = [
  {
    path: '/items-giveaway',
    name: 'Annan ära',
    component: GiveAway
  },
  {
    path: '/items-wish',
    name: 'Soovin leida',
    component: WishList
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
