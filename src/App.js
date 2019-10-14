import React from 'react';
import './App.css';
import Search from './pages/Search';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedBook from './pages/SavedBook';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Search} />
        <Route exact path='/saved' component={SavedBook} />
      </Switch>
    </Router>
  );
}

export default App;
