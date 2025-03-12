import axios from "axios";

export default {

    sendPostItemRequest(newItem) {
        return axios.post('/item', newItem);
    },


        sendGetItemInfoRequest(transactionTypeId = 1, categoryId = '', countyId = '', item) {
           return someMethodName()
            {
                axios.patch('/item', this.someDataBlockRequestPayloadObject, {
                        params: {
                            transactionTypeId: this.someDataBlockVariable1,
                            categoryId: this.someDataBlockVariable2,
                            countyId: this.someDataBlockVariable2
                        }
                    }
                ).then(response => {
                    this.someDataBlockResponseObject = response.data
                }).catch(error => {
                    this.someDataBlockErrorResponseObject = error.response.data
                })
            }

            /*return axios.get('/item', item{
                params: {
                    transactionTypeId
                    categoryId:
                    countyId:
                }
            });
        }*/

}
}

