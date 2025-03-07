import axios from "axios";

export default {

    sendGetRegionsRequest() {
        return axios.get('/regions');
    }
}