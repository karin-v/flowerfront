import axios from "axios";

export default {

    sendGetCountiesRequest() {
        return axios.get('/counties');
    }
}