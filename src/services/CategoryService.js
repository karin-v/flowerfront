import axios from "axios";

export default {

    sendGetCategoriesRequest() {
        return axios.get('/categories');
    }
}
