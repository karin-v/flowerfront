import router from "@/router";

export default {
    navigateToErrorView() {
        // router.push
    },

    navigateToRegisterView() {
        router.push({name: 'registerRoute'})
    },

    navigateToHomeView() {
        router.push({name: 'homeRoute'})
    },
}