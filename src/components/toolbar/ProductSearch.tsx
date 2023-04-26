import React, { useState } from 'react';
import { Device } from '../../fetchData';

type ProductSearchProps = {
  devices: Array<Device>;
  onSearch: (results: Array<Device>) => void;
};

const ProductSearch: React.FC<ProductSearchProps> = ({ devices, onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    const results = devices.filter(
      (device) =>
        device.id.includes(query) ||
        device.name.toLowerCase().includes(query.toLowerCase()) ||
        device.iconId.includes(query) ||
        device.lineName.toLowerCase().includes(query.toLowerCase()) ||
        device.product.toLowerCase().includes(query.toLowerCase())
    );
    onSearch(results);
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
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default ProductSearch;
