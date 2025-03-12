import axios from "axios";

export default {

    sendPostItemRequest(newItem) {
        return axios.post('/item', newItem);
    },


    sendGetItemInfoRequest(transactionTypeId, selectedCategoryId, selectedCountyId, selectedRegionId) {
        return axios.get('/items', {
                params: {
                    transactionTypeId: transactionTypeId,
                    categoryId: selectedCategoryId,
                    countyId: selectedCountyId,
                    regionId: selectedRegionId
                }
            }
        )
    },
    getItemByItemId() {
    return axios.get('/item', {
        params: {
            itemId: this.item.itemId
        }
    })

    },

}

