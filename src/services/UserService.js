import axios from "axios";

export default {

    sendGetUserInfoRequest(userId) {
        return axios.get('/user', {
            params: {
                userId: userId
            }
        })
    },

    sendPutUpdateUserRequest(userId, user) {
        return axios.put('/user', user, {
                params: {
                    userId: userId
                }
            }
        )
    }
}

