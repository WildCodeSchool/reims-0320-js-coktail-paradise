import React from 'react';
import TextInput from './TextInput';
import Button from './Button';

const SearchBar = ({ setKeywords, onSearch }) => (
  <div className="textInput">
    <TextInput setText={setKeywords} />
    <Button onClick={onSearch} />
  </div>
);


export default SearchBar;
