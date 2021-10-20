import React from 'react';

const SearchInput = ({ search, searchEvent }) => {
  return (
    <div className="input-group flex-nowrap">
      <span className="input-group-text">
        <i className="fas fa-search"></i>
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Search by task name"
        aria-label="Search"
        onChange={searchEvent}
        value={search}
        aria-describedby="search"
      />
    </div>
  );
};

export default SearchInput;
