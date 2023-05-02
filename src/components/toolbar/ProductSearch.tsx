import React, { useState } from 'react';
import { Device } from '../../fetchData';
import SearchIcon from '../../assets/Search-icon.svg'
import CloseIcon from '../../assets/Close-icon.svg'

type ProductSearchProps = {
  devices: Array<Device>;
  onSearch: (results: Array<Device>) => void;
};

const ProductSearch: React.FC<ProductSearchProps> = ({ devices, onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };



  // console.log(devices)
  //console.log(results);


// This handles search query types
  const handleSearch = () => {
    const results = devices.filter((device) => {
      const lineNameMatch = device.lineName?.toLowerCase().includes(query.toLowerCase());
      const lineIdMatch = device.lineId?.toLowerCase().includes(query.toLowerCase());
      const iconIdMatch = device.iconId?.toLowerCase().includes(query.toLowerCase());
      const productMatch = device.product?.toLowerCase().includes(query.toLowerCase());
      const IdMatch = device.id?.toLowerCase().includes(query.toLowerCase());
  
      return lineNameMatch || lineIdMatch || iconIdMatch || productMatch || IdMatch;
    });
  
    onSearch(results);
  };
  
  const handleClear = () => {
    setQuery('');
    onSearch(devices);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  // https://css-tricks.com/almanac/properties/c/caret-color/

  return (
    <div className="my-2 flex items-center bg-gray-100 rounded-lg py-1" style={{ width: '344px', marginLeft: '32px' }}>
      <img src={SearchIcon} alt="Search" className="ml-2" />
      <input
        type="text"
        placeholder="Search "
        className="py-1 pl-1 flex-grow bg-transparent outline-none " style={{caretColor: '#006FFF'}}
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {query && (
        <button onClick={handleClear} className="mx-2 focus:outline-none">
          <img src={CloseIcon} alt="Clear" />
        </button>
      )}
    </div>
  );
};

export default ProductSearch;