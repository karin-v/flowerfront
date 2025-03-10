import axios from "axios";

export default {

    sendGetRegionsRequest(countyId) {
        return axios.get('/regions', {
            params: {
                countyId: countyId
            }
        });
    }
}