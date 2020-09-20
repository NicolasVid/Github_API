import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

import './searchbar.scss';

const SearchBar = ({ search, onSubmit, onChange }) => (
  <div className="search-bar">
    <form onSubmit={(event) => onSubmit(event)}>
      <Input onChange={(event) => onChange(event.target.value)} value={search} className="search-bar__Input" size="large" icon="search" placeholder="Rechercher..." iconPosition="left" />
    </form>
  </div>
);

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
