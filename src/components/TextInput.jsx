import React from 'react';

const TextInput = ({ setText }) => (
  <input onChange={(event) => setText(event.target.value)} type="text" />
);

export default TextInput;
