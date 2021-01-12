import './App.css';
import React from 'react'; 
import Row from './Row'
import requests from './Requests';


function App() {
  return (
    <div className="App">
      <h1>let's built this</h1>

      <Row title = "NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title = "TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title = "TOP RATED" fetchUrl={requests.fetchTopRated} />

    </div>
  );
}

export default App;
