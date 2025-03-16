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
    sendGetItemRequest(itemId) {
        return axios.get('/item', {
            params: {
                itemId: itemId
            }
        })

    },

    sendGetItemEditRequest(itemId) {
        return axios.get('/item-edit', {
            params: {
                itemId: itemId
            }
        })

    },

    updateItemRequest(itemId, item) {
        return axios.put('/item', item, {
            params: {
                itemId: itemId
            }
        })
    },

    deleteItemRequest(itemId) {
        return axios.delete('/item', {
            params: {
                itemId: itemId
            }
        });
    },


}

