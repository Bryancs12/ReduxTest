import { types } from "../types/types"

const initialState  = {
    champions: [
        {
            id : 1,
            name : 'Katarina',
            URL : 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_0.jpg'
        },
        {
            id: 2,
            name: 'LeBlanc',
            URL : 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leblanc_0.jpg'
        },
        {
            id: 3,
            name: 'Akali',
            URL : 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg'
            
        },
        {
            id: 4,
            name: 'Teemo',
            URL : 'https://forums.comunidades.riotgames.com/t5/image/serverpage/image-id/25777i54760EF621297D96?v=v2'
        },
    ]
}
    
export const championReducer = (state = initialState, action) =>{
    switch(action.type){

        case types.BUY_CHAMP :
            return {
                ...state,
                champions: state.champions.filter(champ => champ.id !== action.payload)
            }
        
    


        default :
        return state
    }
}