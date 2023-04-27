import React from 'react';
import { Device } from '../fetchData';
import ProductSearch from './toolbar/ProductSearch';
import ActiveGridIcon from '../assets/Grid-Active.svg';
import DefaultGridIcon from '../assets/Grid-Default.svg';
import ActiveListIcon from '../assets/List-Active.svg';
import DefaultListIcon from '../assets/List-Default.svg';
import Selector, {ViewMode} from './toolbar/Selector';

type ToolBarProps = {
  devices: Array<Device>;
  onSearch: (results: Array<Device>) => void;
  onViewModeToggle: () => void;
  activeViewMode: ViewMode;
};

const ToolBar: React.FC<ToolBarProps> = ({ devices, onSearch, onViewModeToggle, activeViewMode }) => {
  return (
    <div className="border-t-2 border-b-2 border-t-[#F6F6F8] border-b-[#F6F6F8] flex justify-between items-center pr-2 py-2">
      <ProductSearch devices={devices} onSearch={onSearch} />
      <div>
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
      </div>
    </div>
  );
};

export default ToolBar;