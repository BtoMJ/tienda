import axios from "axios";

export const GET_DISCOUNTS = "GET_DISCOUNTS";

export function getDiscounts() {
    
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/api/discounts`)

                return await dispatch({
                    type: GET_DISCOUNTS,
                    payload: data,
                })

            
        } catch (error) {
            console.log(error)
        }
    }
}

export function getDiscountsByQuantity(payload) {
    
    return async (dispatch) => {
        try {
                const { data } = await axios.post(`http://localhost:3001/api/discounts/create`, payload)
                return data
            }
          
         catch (error) {
            console.log(error)
        }
    }
}