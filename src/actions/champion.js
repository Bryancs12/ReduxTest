import { types } from "../types/types"

export const champion = () =>{
    return {
        type : types.CHAMPION_DATA
    }
}


export const BuyChamp = (id) =>{
    return {
        type : types.BUY_CHAMP,
        payload: id
    }
}