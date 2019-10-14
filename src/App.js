import React from 'react';
import Nav from './components/Nav';
import './App.css';
import Jumbotron from './components/Jumbotron';
import SearchCard from './components/SearchCard';
import Results from './components/Results';

function App() {
  return (
    <div className='container'>
      <Nav />
      <Jumbotron />
      <SearchCard />
      <Results />
    </div>
  );
}
export default App;
