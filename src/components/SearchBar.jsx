import React from 'react';
import Select from './Select';
import Button from './Button';

const SearchBar = ({ onSearch, list }) => (
  <div className="textInput">
    <Select list={list} />
    <Button onClick={onSearch} />
  </div>
);


export default SearchBar;
