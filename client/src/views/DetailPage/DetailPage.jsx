import './detailPage.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPokemonDetail, cleanDetail } from '../../redux/actions/actions';

import DetailPokemon from '../../component/detailPokemon/detailPokemon';

function DetailPage() {
  const {id} = useParams();
  const pokemonById = useSelector((state)=>state.pokemonDetail)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPokemonDetail(id));

    return () =>{
      dispatch(cleanDetail())
    }
  },[dispatch, id])


  return (
    <div className='detail-container'>
      {pokemonById.name ? 
      (<DetailPokemon pokemon={pokemonById}/>) :
      (<h3>Loanding</h3>)}
    </div>
  );
}

export default DetailPage;