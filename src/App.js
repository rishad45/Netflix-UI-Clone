import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPoster from './Components/Rowposter/Rowposter';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPoster/>
    </div>
  );
}

export default App;
