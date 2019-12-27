import React, { useState } from 'react';
import './DropDown.css';

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("Pick game mode");

  const toggleOpen = () => setIsOpen(!isOpen);

  const toggleMode = (mode) => {
    setMode(mode);
    setIsOpen(false);
  }

  const menuClass = `dropdown-menu${isOpen ? " show" : ""}`;
  const chevronClass = `fa fa-chevron-${isOpen ? "up" : "down"}`;

  return (
    <div className="dropdown">
      <button
        className="btn dropdown-toggle"
        type="button"
        id="dropdownBtn"
        data-toggle="dropdown"
        onClick = {toggleOpen}
      >
        { mode }
        <i className={chevronClass}></i>
      </button>
      <div className={menuClass} id="dropdownMenu">
        <button
          className="dropdown-item"
          type="button"
          onClick={() => toggleMode("Easy")}
        > Easy</button>
        <button
          className="dropdown-item"
          type="button"
          onClick={() => toggleMode("Normal")}
        > Normal </button>
        <button
          className="dropdown-item"
          type="button"
          onClick={() => toggleMode("Hard")}
        > Hard </button>
      </div>
    </div>
  )
}

export default DropDown;