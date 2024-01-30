import './detailPokemon.css';

function DetailPokemon({pokemon}) {
  return (
    <div className='detailPokemon-container'>
        <div className='img'>
            <h4>{pokemon.id}</h4>
            <img src={pokemon.image} alt="" />
            <h4>{pokemon.types}</h4>
        </div>
        <div className='info'>
            <h1>{pokemon.name}</h1>
            <h4>{pokemon.life}</h4>
            <h4>{pokemon.attack}</h4>
            <h4>{pokemon.defense}</h4>
            <h4>{pokemon.speed}</h4>
            <h4>{pokemon.height}</h4>
            <h4>{pokemon.weight}</h4>   
        </div>
    </div>
  );
}

export default DetailPokemon;