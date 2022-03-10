import React from 'react'
import Nav from './Components/Nav/Nav'
import Row from './Components/Row/Row'
import Banner from './Components/Banner/Banner'
import requests from './Components/requests';
function App() {

  return (
    <div>

      <Nav />
      <Banner />
      <Row isLarge title='NETFLIX ORIGINAL' fechUrl={requests.netflexOriginal} />
      <Row title='Trending' fechUrl={requests.trending} />
      <Row title='Top Rated' fechUrl={requests.topRated} />
      <Row title='Commedy' fechUrl={requests.commedy} />
      <Row title='Horror Movies' fechUrl={requests.horror} />
      <Row title='Action' fechUrl={requests.Action} />
      <Row title='Romance' fechUrl={requests.romance} />
      <Row title='Documenteries' fechUrl={requests.documentaries} />

    </div>
  );
}

export default App;
