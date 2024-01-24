import './App.css';
import HomePage from './views/HomePage/HomePage';
import DetailPage from './views/DetailPage/DetailPage';
import FormPage from './views/FormPage/FormPage';

function App() {
  return (
    <div className="App">
      <HomePage/>
      <DetailPage/>
      <FormPage/>
    </div>
  );
}

export default App;
