import router from "@/router";

export default {
    navigateToErrorView() {
        // router.push({name: 'errorRoute'})
    },

    navigateToRegisterView() {
        router.push({name: 'registerRoute'})
    },

    navigateToHomeView() {
        router.push({name: 'homeRoute'})
    },
    navigateToLoginView() {
        router.push({name: 'loginRoute'})
    }
}