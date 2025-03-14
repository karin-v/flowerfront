import axios from "axios";

export default {
    sendNewMessageRequest() {
        return axios.put('/message', this.message, {
                params: {
                    itemId: itemId,
                    senderId: senderId,
                    receiverId: userId,
                }
            }
        )
    }
}