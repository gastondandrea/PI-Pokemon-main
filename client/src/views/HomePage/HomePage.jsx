import './homePage.css';
import Cards from "../../component/cards/cards"
import FilterBar from "../../component/filterBar/filterBar"
import Pages from "../../component/pages/pages"

function HomePage({pokemons}) {

  return (
    <div>
      <FilterBar/>
      <Cards pokemons={pokemons}></Cards>
      <Pages/>
    </div>
  );
};



export default HomePage;



