import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GiveAway from "@/views/GiveAway.vue";
import WishList from "@/views/WishList.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import AddItemView from "@/views/AddItemView.vue";

let routes;
routes = [
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
    name: 'loginRoute',
    component: LoginView
  },
  {
    path: '/register',
    name: 'Registreeri',
    component: RegisterView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/additem',
    name: 'Lisa kuulutus',
    component: AddItemView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
