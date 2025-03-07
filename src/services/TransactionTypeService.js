import axios from "axios";

export default {

    sendGetTransactionTypeRequest() {
        return axios.get('/transaction_types');
    }
}