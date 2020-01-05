import React, { useState } from 'react';
import './InputField.css';

const InputField = ({ setName }) => {

  const handleChange = ({ target: { value }}) => {
    setName(value)
  }

  return (
    <input
      className="form-control"
      id="input"
      type="text"
      placeholder="Enter your name"
      onChange={handleChange}
      />
  )
}

export default InputField;


