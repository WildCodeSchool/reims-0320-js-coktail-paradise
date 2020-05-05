import React from 'react';
import Select from './Select';

const SearchBar = ({ onSearch1, onSearch2, list, setKeywords1, setKeywords2 }) => (
  <div>
    <div className="textInput">
      <Select list={list} />
    </div>
    <div>
      <input type="text" name="ingredient1" id="ingredient1" setText={setKeywords1} />
      <button type="button" onClick={onSearch1}>Search</button>
    </div>
    <div>
      <input type="text" name="ingredient2" id="ingredient2" setText={setKeywords2} />
      <button type="button" onClick={onSearch2}>Search</button>
    </div>
  </div>

);


export default SearchBar;
