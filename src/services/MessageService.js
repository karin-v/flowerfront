import axios from "axios";

export default {
    sendNewMessageRequest(itemMessage) {
        return axios.post('/message', itemMessage)
    }
}