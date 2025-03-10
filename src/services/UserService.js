import axios from "axios";

export default {

    sendGetUserInfoRequest(user) {
        return axios.get('/user')
    }
}

