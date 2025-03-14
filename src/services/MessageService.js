import axios from "axios";

export default {
    sendNewMessageRequest(itemId,senderId, receiverId, message) {
        return axios.post('/message', message, {
                params: {
                   itemId: itemId,
                    senderId: senderId,
                    receiverId: receiverId
                }
            }
        )
    }
}