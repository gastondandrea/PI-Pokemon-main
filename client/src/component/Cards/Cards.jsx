import './cards.css';
import Card from '../card/card';

function Cards(props) {
  return (
    <div className='cards-container'>
      {props.pokemons.map((pokemon, index)=>{
        return <Card key={index} id={pokemon.id} name={pokemon.name} image={pokemon.image} types={pokemon.types}/>
      })}
    </div>
  );
}

export default Cards;