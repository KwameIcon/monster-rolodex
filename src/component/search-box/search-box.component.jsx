import React from "react";

import './search-box.style.css'

export const SearchBox = ({ placeholder, handleChange }) => (
  <div>
    <input
      type="search"
      className="searchField"
      placeholder={placeholder}
      onChange = {handleChange}
    />
  </div>
);