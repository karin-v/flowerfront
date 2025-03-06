import router from "@/router";

export default {
    navigateToErrorView() {

    },
    navigateToHomeView() {
        router.push({name: 'homeRoute'})
    },
    navigateToLoginView() {
        router.push({name: 'loginRoute'})
    },
    navigateToRegisterView() {
        router.push({name: 'registerRoute'})
    }
}