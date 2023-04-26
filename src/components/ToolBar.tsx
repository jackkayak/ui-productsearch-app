import React, { useState } from 'react';
import { Device } from '../fetchData';

type ProductSearchProps = {
  devices: Array<Device>;
  onSearch: (results: Array<Device>) => void;
};

const ToolBar: React.FC<ProductSearchProps> = ({ devices, onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    const results = devices.filter((device) => {
      const lineName = device?.lineName?.toLowerCase?.();
      const name = device?.name?.toLowerCase?.();
      return lineName?.includes(query.toLowerCase()) || name?.includes(query.toLowerCase());
    });
    onSearch(results);
  };
  

  return (
    <div>
      <input type="text" placeholder="Search" value={query} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default ToolBar;
