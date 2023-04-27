import React, { useState } from 'react';

interface FilterProps {
  productLines: string[];
  selectedProductLines: string[];
  onProductLineToggle: (productLine: string) => void;
  onFilterToggle: () => void;
}

const Filter: React.FC<FilterProps> = ({
  productLines,
  selectedProductLines,
  onProductLineToggle,
  onFilterToggle,
}) => {
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [selectedLines, setSelectedLines] = useState(selectedProductLines);

  const toggleFilter = () => {
    setFilterVisible((prevState) => !prevState);
    onFilterToggle();
  };

  const handleProductLineToggle = (productLine: string) => {
    const updatedLines = selectedLines.includes(productLine)
      ? selectedLines.filter((line) => line !== productLine)
      : [...selectedLines, productLine];

    setSelectedLines(updatedLines);
    onProductLineToggle(productLine);
  };

  const uniqueProductLines = Array.from(new Set(productLines));

  return (
    <div className="relative">
      <button className="ml-2" onClick={toggleFilter}>
        Filter
      </button>
      {isFilterVisible && (
        <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md w-64 py-2">
          {uniqueProductLines.map((productLine) => (
            <div key={productLine} className="flex items-center">
              <input
                type="checkbox"
                id={productLine}
                checked={selectedLines.includes(productLine)}
                onChange={() => handleProductLineToggle(productLine)}
              />
              <label htmlFor={productLine} className="ml-2">
                {productLine}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
