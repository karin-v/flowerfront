import axios from "axios";

export default {

    sendGetUserInfoRequest(userId) {
        return axios.get('/user', {
            params: {
                userId: userId
            }
        })
    }
}

