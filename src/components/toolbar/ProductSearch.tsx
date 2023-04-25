import React, { useState } from 'react';

type ProductSearchProps = {
  onSearch: (query: string) => void;
};

const ProductSearch: React.FC<ProductSearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="my-4">
      <input
        type="text"
        placeholder="Search products..."
        className="p-2 border border-gray-300 rounded-lg mr-2"
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default ProductSearch;
