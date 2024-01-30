import './detailPokemon.css';

function DetailPokemon({pokemon}) {
  return (
    <div className='detailPokemon-container'>
        <div className='img-detail'>
            <h4>{pokemon.id}</h4>
            <img src={pokemon.image} alt="" />
        </div>
        <div className='info'>
            <h1>{pokemon.name}</h1>
            <div className='block-info'>
              <label htmlFor="life">Life:</label>
              <progress id="life" max="100" value={pokemon.life}>{pokemon.life}</progress>
            </div>
            <div className='block-info'>
              <label htmlFor="attack">Attack:</label>
              <progress id="attack" max="100" value={pokemon.attack}>{pokemon.attack}</progress>
            </div>
            <div className='block-info'>
              <label htmlFor="defense">Defense:</label>
              <progress id="defense" max="100" value={pokemon.defense}>{pokemon.defense}</progress>
            </div>
            <div className='block-info'>
              <label htmlFor="speed">Speed:</label>
              <progress id="speed" max="100" value={pokemon.speed}>{pokemon.speed}</progress>
            </div>
            <div className='block-info'>
              <label htmlFor="height">Height:</label>
              <p>{pokemon.height}</p>
            </div>
            <div className='block-info'>
              <label htmlFor="weight">Weight:</label>
              <p>{pokemon.weight}</p>
            </div>
            <div className='block-info'>
            <label htmlFor="types">Types:</label><br />
              <p>{pokemon.types && pokemon.types.length > 1 ? pokemon.types.join(" / ") : pokemon.types }</p>
            </div>
        </div>
    </div>
  );
}

export default DetailPokemon;