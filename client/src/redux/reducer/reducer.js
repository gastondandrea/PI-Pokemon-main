import { CLEAN_DETAIL, GET_POKEMON_DETAIL } from "../actions/action-types";

const initialState = {
    pokemonDetail: {},
}
    

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_POKEMON_DETAIL:
            return{
                ...state,
                pokemonDetail:action.payload,
            };

        case CLEAN_DETAIL:
            return{
                ...state,
                pokemonDetail:{},
            }

        default:
            return {...state};
    }
}

export default rootReducer;