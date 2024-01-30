import './landingPage.css';
import fondoPokemons from '../../assets/images/fondoPokemons.png';
import pokeBall from '../../assets/images/pokeBall.png';

function LandingPage() {
  return (
    <div className='landing-container'>
      <div className='landing-img-container'>
        <img className="fondo-pokemos" src={fondoPokemons} alt="pokemons"/>
      </div>
      <div className='landing-form-container'>
        <div className='form'>
          <div className='logo-bienvenida'>
            <h3>Welcome</h3>
            <img src={pokeBall} alt="Poke ball" />
            <h1>Pokémon APP</h1>
          </div>
          <div className='button-start'><button>START</button></div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;