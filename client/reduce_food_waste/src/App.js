import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Location from './components/Location';
import Stores from './components/Stores';


function App() {
  return (
<>
<Router>
  <Location/>
        <Switch>
        <Route path='/stores' component={Stores} />
        </Switch>
      </Router>
</>
  );
}

export default App;
