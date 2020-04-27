import React from 'react';
import Select from './Select';
import Button from './Button';

const SearchBar = ({ onSearch }) => (
  <div className="textInput">
    <Select />
    <Button onClick={onSearch} />
  </div>
);


export default SearchBar;
