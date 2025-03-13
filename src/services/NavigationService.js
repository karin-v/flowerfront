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
    },
    navigateToItemView(itemId) {
        router.push({
            name: 'itemRoute',
            params: {
                itemId: itemId
            },
            query: {
                edit: true
            }
        })
    },
}