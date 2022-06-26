import './App.css';
import React from 'react';
import Location from './components/Location';
import Frankfurt from './pages/Frankfurt';
import Berlin from './pages/Berlin';
import Koln from './pages/Koln';
import Muchen from './pages/Muchen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    
      <Router>
        <Switch>
        <Route path='/' exact component={Location} />
          <Route path='/frankfurt'  component={Frankfurt} />
          <Route path='/berlin'  component={Berlin} />
          <Route path='/koln'  component={Koln} />
          <Route path='/muchen'  component={Muchen} />
        </Switch>
      </Router>
    
  );
}

export default App;
