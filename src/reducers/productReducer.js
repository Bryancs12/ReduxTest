import { types } from "../types/types"


const initialState = {
    numOfCakes : 10,
    otherCounter : 5
}


export const productReducer = (state = initialState, action) =>{
   
    switch(action.type){
        
        case types.CAKE_ORDERED :
            return {
                ...state,
                numOfCakes : state.numOfCakes - 1,
                otherCounter : state.otherCounter -1
            }

        case types.RESET_COUNT :
            return {
                ...state,
                numOfCakes : 10
            }

        default :
        return state
    }
}