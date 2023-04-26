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

  // this function takes in the device values from the fetchData.ts file. 
  // to add more search queries, like an SKU just plug that into the fetch and then here as well.
  // I just don't know each json data name to justify putting another in.

  // console.log(devices)
  //console.log(results);

  const handleSearch = () => {
    const results = devices.filter((device) => {
      const lineNameMatch = device.lineName?.toLowerCase().includes(query.toLowerCase());
      const lineIdMatch = device.lineId?.toLowerCase().includes(query.toLowerCase());
      const iconIdMatch = device.iconId?.toLowerCase().includes(query.toLowerCase());
      const productMatch = device.product?.toLowerCase().includes(query.toLowerCase());
  
      return lineNameMatch || lineIdMatch || iconIdMatch || productMatch;
    });
  
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
