import router from "@/router";

export default {
    navigateToErrorView() {
        // router.push
    },

    navigateToRegisterView() {
        router.push({name: 'registerRoute'})
    },
}