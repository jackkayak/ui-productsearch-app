import React from 'react';
import { Device } from '../fetchData';
import ProductSearch from './toolbar/ProductSearch';

type ToolBarProps = {
  devices: Array<Device>;
  onSearch: (results: Array<Device>) => void;
};

const ToolBar: React.FC<ToolBarProps> = ({ devices, onSearch }) => {
  return (
    <div className='border border-t-[#F6F6F8] border-b-[#F6F6F8]'>
      <ProductSearch devices={devices} onSearch={onSearch} />
    </div>
  );
};

export default ToolBar;