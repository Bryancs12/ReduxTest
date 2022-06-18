import { types } from "../types/types"

const initialState  = {
    champions: [
        {
            id : 1,
            name : 'Prueba',
            purchased : false
        },
        {
            id: 2,
            name: 'Prueba2',
            purchased : false
        }
    ]
}
    
export const championReducer = (state = initialState, action) =>{
    switch(action.type){

        case types.BUY_CHAMP :
            return {
                ...state,
                purchased: null,
                champions: state.champions.filter(champ => champ.id !== action.payload)
            }
        
    


        default :
        return state
    }
}