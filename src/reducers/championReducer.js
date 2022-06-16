import { types } from "../types/types"

const initialState  = [
    {
        id : 1,
        name : 'Prueba'
    },
    {
        id1 : 2,
        name1: 'Prueba2'
    },

]
    
            
        
        




export const championReducer = (state = initialState, action) =>{
    switch(action.type){

        case types.CHAMPION_DATA :
            return {
                ...state,
                champions : [...state.champions]  
            }


        default :
        return state
    }
}