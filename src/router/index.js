import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GiveAway from "@/views/GiveAwayView.vue";
import WishList from "@/views/WishList.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import AddItemView from "@/views/AddItemView.vue";
import MyProfileView from "@/views/MyProfileView.vue";
import ErrorView from "@/views/ErrorView.vue";
import GiveAwayView from "@/views/GiveAwayView.vue";

const routes = [
    {
        path: '/error',
        name: 'errorRoute',
        component: ErrorView
    },
    {
        path: '/items-giveaway',
        name: 'giveAwayRoute',
        component: GiveAwayView
    },
    {
        path: '/items-wish',
        name: 'wishListRoute',
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
        path: '/add-item',
        name: 'addItemRoute',
        component: AddItemView
    },
    {
        path: '/my-profile',
        name: 'myProfileRoute',
        component: MyProfileView
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