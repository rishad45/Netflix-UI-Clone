import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
// importing components 
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPoster from './Components/Rowposter/Rowposter';
// importing urls
import {originalsUrl,actionsUrl, comediesUrl, DocumentariesUrl} from './Constants/constants'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPoster title = 'Netflix Originals' url={originalsUrl}/>
      <RowPoster title='Action' isSmall url={actionsUrl}/> 
      <RowPoster title='Comedies' isSmall url={comediesUrl}/> 
      <RowPoster title='Documentaries' isSmall url={DocumentariesUrl}/> 
    </div>
  );
}

export default App;
