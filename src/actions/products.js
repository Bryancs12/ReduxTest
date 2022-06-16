import { types } from "../types/types"

export const orderCake = () =>{
    return {     
            type : types.CAKE_ORDERED,
    }
}

export const reset = () =>{
    return {
        type : types.RESET_COUNT
    }
}
