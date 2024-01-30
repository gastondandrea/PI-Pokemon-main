import './navBar.css';
import pokeBall from '../../assets/images/pokeBall.png';
import SearchBar from '../searchBar/searchBar';
import {Link} from 'react-router-dom';

function NavBar({onSearch}) {
  return (
    <div className='navbar-container'>
        <Link to="/home" className='navbar-logo'>
          <img src={pokeBall} alt="" />
          <h3>Pokémon APP</h3>
        </Link>
      <SearchBar onSearch={onSearch}/>
      <div className='navbar-leave'><Link to="/"><button className='button-leave'>LEAVE</button></Link></div>
    </div>
  );
}

export default NavBar;