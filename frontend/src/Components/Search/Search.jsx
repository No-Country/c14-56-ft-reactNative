import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Search.css'


const Search = () => {
  return (
    <div className="search-bar">
      <i className="fa fa-search search-icon"></i>
      <input type="text" placeholder="Buscar" className="search-input" /> 
    </div>
  );
};

export default Search;



