import './filterBar.css';
import Order from '../order/order';
import Filter from '../filter/filter';
import AddPokemon from '../addPokemon/addPokemon';
function FilterBar() {
  return (
    <div className='filterBar-container'>
      <Order/>
      <Filter/>
      <AddPokemon/>
    </div>
  );
}

export default FilterBar;