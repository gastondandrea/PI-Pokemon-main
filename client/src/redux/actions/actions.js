import { GET_POKEMON_DETAIL, CLEAN_DETAIL } from "./action-types"

export const getPokemonDetail = (id) =>{
    return function(dispatch){
        fetch(`http://localhost:3001/pokemon//${id}`)
            .then(res =>res.json())
            .then(data=>dispatch({type: GET_POKEMON_DETAIL, payload: data}));
    };
};

export const cleanDetail = () =>{
    return {type: CLEAN_DETAIL}
}