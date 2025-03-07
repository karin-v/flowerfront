import axios from "axios";

export default {

    sendGetTransactionTypeRequest() {
        return axios.get('/transaction-types');
    }
}