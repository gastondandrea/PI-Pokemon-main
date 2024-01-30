import './homePage.css';
import Cards from "../../component/cards/cards"

function HomePage({pokemons}) {

  return (
    <div>
      <Cards pokemons={pokemons}></Cards>
    </div>
  );
};



export default HomePage;



