import {Routes, Route, useLocation} from "react-router-dom";
import { useEffect, useState } from "react";
import './App.css';
import LandingPage from './views/landingPage/landingPage';
import HomePage from './views/homePage/homePage';
import DetailPage from './views/detailPage/detailPage';
import FormPage from './views/formPage/formPage';
import NavBar from "./component/navBar/navBar";


function App() {
  const {pathname} = useLocation();

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    // Fetch data asynchronously
    fetch('http://localhost:3001/pokemon').then(response => response.json()).then(data=>setPokemons(data)); 
  }, []);


  if (pokemons === null) {
    return <div>Loading...</div>;
  }

  const onSearch= (name)=>{
    fetch(`http://localhost:3001/pokemon/?name=${name}`)
              .then(res =>res.json())
      .then(pokemon => {
        if (pokemon.name) {
          setPokemons([pokemon])
        } else {
          window.alert(`¡No existe el pokemon ${name}!`)
          }
      })
  }



  return (
    <div className="App">
      {pathname!=='/' ? <NavBar onSearch={onSearch}/> : null}
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<HomePage pokemons={pokemons}/>} />
        <Route path="/detail/:id" element={<DetailPage/>} />
        <Route path="/form" element={<FormPage/>} />
      </Routes>
    </div>
  );
}

export default App;
