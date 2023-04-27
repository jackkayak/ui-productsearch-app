import React, { useState } from 'react';
import CloseIcon from '../../assets/Close-icon.svg';

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
      <button className="ml-2 mr-8 black-45" onClick={toggleFilter}>
        {isFilterVisible ? (
          <img src={CloseIcon} alt="Close Icon" />
        ) : (
          'Filter'
        )}
      </button>
      {isFilterVisible && (
        <div className="absolute top-0 right-0 -mt-6 -mr-2 bg-white shadow-md rounded-md w-64 py-2 z-10">
          <div className="flex items-center justify-between px-4 py-5 border-b-2 border-b-[#F6F6F8]">
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
                className="cursor-pointer"
  
              />
              <label htmlFor={productLine} className="ml-2 cursor-pointer text-[14px]">
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