import React, { PropTypes } from 'react';
import './SearchBar.css';

const SearchBar = (props) => (
  <div className="searchBar">
    <input
      className="input"
      onChange={(e) => props.updateText(e.target.value)}
    />
    <button
      className="button"
      onClick={props.fetchSongs}>
      {props.buttonName}
    </button>
  </div>
);

SearchBar.propTypes = {
  fetchSongs: PropTypes.func,
  updateText: PropTypes.func,
};

export default SearchBar;
