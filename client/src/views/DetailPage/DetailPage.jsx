import './detailPage.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DetailPokemon from '../../component/detailPokemon/detailPokemon';

function DetailPage() {
  const {id} = useParams();
  
  const [pokemonById, setPokemonById] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/pokemon//${id}`)
            .then(res =>res.json())
            .then((data)=>{
              return setPokemonById(data)
  })
}, [id]);


  if (pokemonById === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className='detail-container'>
      <DetailPokemon pokemon={pokemonById}/>
    </div>
  );
}

export default DetailPage;