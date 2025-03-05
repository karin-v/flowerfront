import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GiveAway from "@/views/GiveAway.vue";
import WishList from "@/views/WishList.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";

const routes = [
  {
    path: '/error',
    name: 'errorRoute',
    component: GiveAway
  },
  {
    path: '/items-giveaway',
    name: 'giveawayRoute',
    component: GiveAway
  },
  {
    path: '/items-wish',
    name: 'wishlistRoute',
    component: WishList
  },
  {
    path: '/login',
    name: 'loginRoute',
    component: LoginView
  },
  {
    path: '/register',
    name: 'registerRoute',
    component: RegisterView
  },
  {
    path: '/',
    name: 'homeRoute',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
