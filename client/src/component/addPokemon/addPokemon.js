import './addPokemon.css';
import {Link} from 'react-router-dom'

function AddPokemon() {
  return (
    <div>
      <Link to='/form' className='addPokemon-container'>
        <button>ADD POKÉMON</button>
      </Link>
    </div>
  );
}

export default AddPokemon;