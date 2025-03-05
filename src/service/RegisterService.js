import axios from "axios";

export default {
    sendPostUserRequest(newUser) {
        return axios.post('/user', newUser);
    },
}