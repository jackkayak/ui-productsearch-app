import React, { useState } from 'react';
import CloseIcon from '../../assets/Close-icon.svg';

interface FilterProps {
  productLines: string[];
  selectedProductLines: string[];
  onProductLineToggle: (productLine: string) => void;
  onFilterToggle: () => void;
  onClearFilters: () => void;
}

const Filter: React.FC<FilterProps> = ({
  productLines,
  selectedProductLines,
  onProductLineToggle,
  onFilterToggle,
  onClearFilters
}) => {
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [selectedLines, setSelectedLines] = useState(selectedProductLines);
 const [, setShowAllProducts] = useState(false);


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

  const clearFilters = () => {
    setSelectedLines([]);
    setShowAllProducts(true); 
    onClearFilters();
    
  };

 
  return (
    <div className="relative ">
      <button className="ml-2 mr-8 black-45 transition ease-linear duration-600" onClick={toggleFilter}>
        {isFilterVisible ? (
          <img src={CloseIcon} alt="Close Icon" />
        ) : (
          'Filter'
        )}
      </button>
      {isFilterVisible && (
        <div className="absolute top-0 right-0 -mt-6 -mr-2 bg-white shadow-lg w-64 pt-2 pb-[32px] z-10 ">
          <div className="flex items-center justify-between px-4 py-[22px] border-b-2 border-b-[#F6F6F8]">
            <div className="black-65 font-normal text-[14px] ">Filter</div>
            <button onClick={toggleFilter}>
              <img src={CloseIcon} alt="Close Icon" />
            </button>
          </div>
          <div className="px-4 py-2">
            <div className="font-bold text-[14px] py-5">Product Line</div>
          </div>
          {uniqueProductLines.map((productLine) => (
  <div key={productLine} className="flex items-center px-4 py-1 black-65">
    <input
      type="checkbox"
      id={productLine}
      checked={selectedLines.includes(productLine)}
      onChange={() => handleProductLineToggle(productLine)}
      className="cursor-pointer custom-checkbox-input"
    />
    <label htmlFor={productLine} className="ml-2 cursor-pointer text-[14px]">
      {productLine}
    </label>
    {selectedLines.includes(productLine) && (
      <span className="checkmark">&#10003;</span>
    )}
  </div>
))}
{selectedLines.length > 0 && (
            <div className="px-4 py-2">
              <button
                className="btn-primary cursor-pointer"
                onClick={clearFilters}
              >
                Clear Filters
              </button>
            </div>
          )}

        </div>
      )}
    </div>
  );

          };

export default Filter;