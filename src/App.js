import './App.css';
import React from 'react'; 
import Row from './Row'
import requests from './Requests';
import Banner from './Banner'


function App() {
  return (
    <div className="app">
      <Banner  />
      <Row title = "Netflix originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title = "Trending now" fetchUrl={requests.fetchTrending} />
      <Row title = "Top rated" fetchUrl={requests.fetchTopRated} />

    </div>
  );
}

export default App;
