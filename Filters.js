// Filters.js
import React from "react";
import "./Filters.css";

const Filters = ({ filters, onFilterChange, onApplyFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <div className="filters">
      <h2>Filters</h2>
      <input
        type="text"
        name="company"
        value={filters.company}
        onChange={handleChange}
        placeholder="Company Name"
      />
      {/* Other filter options */}
      <button onClick={onApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default Filters;
