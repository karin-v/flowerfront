import axios from "axios";

export default {

    sendPostItemRequest(newItem)  {
        return axios.post('/item', newItem);
    },
}

