import axios from "axios";

export default {

    sendPostItem() {
        return axios.post('/item');
    }
}

