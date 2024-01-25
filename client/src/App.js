import {Routes, Route} from "react-router-dom";
import './App.css';
import LandingPage from './views/landingPage/landingPage';
import HomePage from './views/homePage/homePage';
import DetailPage from './views/detailPage/detailPage';
import FormPage from './views/formPage/formPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/landing" element={<LandingPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/detail:id" element={<DetailPage/>} />
        <Route path="/form" element={<FormPage/>} />
      </Routes>
    </div>
  );
}

export default App;
