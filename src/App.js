import { useState, useEffect } from 'react'
import React from 'react'
import Navbar from './container/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Planets from './container/Planets'
import People from './container/People'

function App() {
  const [people, setPeople] = useState([])
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    async function getPeople() {
      let resp = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await resp.json();
      setPeople(data.results);
    }

    async function getPlanets() {
      let resp = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await resp.json();
      setPlanets(data.results);
    }

    getPlanets()
    getPeople();
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/people'>
            <People data={people} />
          </Route>
          <Route exact path='/planets'>
            <Planets data={planets} />
          </Route>
          <Route exact path='/'>
            <People />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
