import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label>
    Let's find somebody
    <input type="text" value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired
};

export default Filter;