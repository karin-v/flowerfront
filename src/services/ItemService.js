import axios from "axios";

export default {

    getCategories(categoryId) {
        return axios.get('/items/categories');
    }
}

