import React from 'react';
import { Device } from '../fetchData';
import ProductSearch from './toolbar/ProductSearch';
import ActiveGridIcon from '../assets/Grid-Active.svg';
import DefaultGridIcon from '../assets/Grid-Default.svg';
import ActiveListIcon from '../assets/List-Active.svg';
import DefaultListIcon from '../assets/List-Default.svg';
import Selector, {ViewMode} from './toolbar/Selector';
import Filter from './toolbar/Filter';

type ToolBarProps = {
  devices: Array<Device>;
  onSearch: (results: Array<Device>) => void;
  onViewModeToggle: () => void;
  activeViewMode: ViewMode;
  productLines: string[]; // Add the productLines prop
  selectedProductLines: string[];
  onProductLineToggle: (productLine: string) => void;
  onFilterToggle: () => void;
};

const ToolBar: React.FC<ToolBarProps> = ({ 
  devices, 
  onSearch, 
  onViewModeToggle, 
  activeViewMode, 
  productLines,
  selectedProductLines, 
  onProductLineToggle, 
  onFilterToggle, }) => {
  return (
    <div className="border-t-2 border-b-2 border-t-[#F6F6F8] border-b-[#F6F6F8] flex justify-between items-center pr-2 py-2">
      <ProductSearch devices={devices} onSearch={onSearch} />
      <div className='flex items-center' >
        <Selector
          active={activeViewMode === ViewMode.Grid}
          activeIcon={ActiveGridIcon}
          defaultIcon={DefaultGridIcon}
          onClick={onViewModeToggle}
        />
        <Selector
          active={activeViewMode === ViewMode.List}
          activeIcon={ActiveListIcon}
          defaultIcon={DefaultListIcon}
          onClick={onViewModeToggle}
        />
        <Filter
        productLines={productLines}
        selectedProductLines={selectedProductLines}
        onProductLineToggle={onProductLineToggle}
        onFilterToggle={onFilterToggle}
      />
      </div>
    </div>
  );
};

export default ToolBar;