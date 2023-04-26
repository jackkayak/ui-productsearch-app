import React, { useState } from 'react';
import { Device } from '../fetchData';
import ProductSearch from './toolbar/ProductSearch';
import GridIcon from './../assets/Grid.svg';
import ListIcon from './../assets/List.svg';

type Props = {
  devices: Device[];
};

const ToolBar: React.FC<Props> = ({ devices }) => {
  const [view, setView] = useState<'list' | 'grid'>('list');
  const [filteredDevices, setFilteredDevices] = useState<Device[]>(devices);

  const handleViewChange = (view: 'list' | 'grid') => {
    setView(view);
  };

  const handleSearch = (results: Device[]) => {
    setFilteredDevices(results);
  };

  return (
    <div className="flex justify-between items-center">
      <ProductSearch devices={devices} onSearch={handleSearch} />
      <div>
        <button
          className="p-2 mr-2"
          onClick={() => handleViewChange('list')}
        >
          <img src={ListIcon} alt="List View" />
        </button>
        <button
          className="p-2"
          onClick={() => handleViewChange('grid')}
        >
          <img src={GridIcon} alt="Grid View" />
        </button>
      </div>
    </div>
  );
};

export default ToolBar;
