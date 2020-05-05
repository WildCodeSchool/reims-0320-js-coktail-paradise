import React from 'react';
import Select from './Select';

const SearchBar = ({ onSearch1, onSearch2, list, setKeywords1, setKeywords2 }) => (
  <div>
    <div className="textInput">
      <Select list={list} />
    </div>
  </div>

);


export default SearchBar;
