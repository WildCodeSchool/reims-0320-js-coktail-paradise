import React from 'react';
import SearchBar from './components/SearchBar';
import './App.css';
import CocktailList from './components/CocktailList';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <CocktailList />
    </div>
  );
}

export default App;