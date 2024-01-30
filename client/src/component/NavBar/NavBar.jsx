import './navBar.css';
import pokeBall from '../../assets/images/pokeBall.png';
import SearchBar from '../searchBar/searchBar';

function NavBar({onSearch}) {
  return (
    <div className='navbar-container'>
      <div className='navbar-logo'>
        <img src={pokeBall} alt="" />
        <h3>Pokémon APP</h3>
      </div>
      <SearchBar onSearch={onSearch}/>
      <div className='navbar-leave'><button className='button-leave'>LEAVE</button></div>
    </div>
  );
}

export default NavBar;