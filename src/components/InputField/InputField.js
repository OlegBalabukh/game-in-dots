import React, { useState } from 'react';
import './InputField.css';

const InputField = () => {
  const [input, setInput] = useState("");

  const handleChange = ({ target: { value }}) => {
    setInput(value)
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


