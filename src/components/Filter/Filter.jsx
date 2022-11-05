import React from 'react';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={css.label}>
      Find contact by name:
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};
export default Filter;
