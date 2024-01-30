import './landingPage.css';
import {Link} from 'react-router-dom';
import fondoPokemons from '../../assets/images/fondoPokemons.png';
import pokeBall from '../../assets/images/pokeBall.png';
import welcome from '../../assets/images/welcome.png';

function LandingPage() {
  return (
    <div className='landing-container'>
      <div className='landing-img-container'>
        <img className="fondo-pokemos" src={fondoPokemons} alt="pokemons"/>
      </div>
      <div className='landing-form-container'>
        <div className='form'>
          <div className='logo-bienvenida'>
            <img className='welcome' src={welcome} alt="welcome" />
            <img id="ball" src={pokeBall} alt="Poke ball" />
            <h1>Pokémon APP</h1>
          </div>
          <Link to='/home'>
            <div className='button-start'><button>START</button></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;