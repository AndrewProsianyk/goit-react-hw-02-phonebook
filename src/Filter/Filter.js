import React from 'react';

const Filter = ({ value, onChange }) => (
  <label>
    Let's find somebody
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;