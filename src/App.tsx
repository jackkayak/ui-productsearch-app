import React, { useEffect, useState } from 'react';
import fetchData, { Device } from './fetchData';
import Header from './components/Header';
import Toolbar from './components/ToolBar';
import ProductList from './components/ProductList';
import ProductGrid from './components/ProductGrid';
import { ViewMode } from './components/toolbar/Selector';

const App: React.FC = () => {
  const [devices, setDevices] = useState<Array<Device>>([]);
  const [filteredDevices, setFilteredDevices] = useState<Array<Device>>([]);
  const [activeViewMode, setActiveViewMode] = useState(ViewMode.Grid);
  const [selectedProductLines, setSelectedProductLines] = useState<string[]>([]);

  useEffect(() => {
    const fetchDevices = async () => {
      const data = await fetchData();
      setDevices(data);
      setFilteredDevices(data);
    };
    fetchDevices();
  }, []);

  const handleSearch = (results: Array<Device>) => {
    setFilteredDevices(results);
  };

  const onViewModeToggle = () => {
    setActiveViewMode(prevMode => prevMode === ViewMode.Grid ? ViewMode.List : ViewMode.Grid);
  };

  const handleProductLineToggle = (productLine: string) => {
    const updatedSelectedProductLines = selectedProductLines.includes(productLine)
      ? selectedProductLines.filter((line) => line !== productLine)
      : [...selectedProductLines, productLine];

    setSelectedProductLines(updatedSelectedProductLines);

    if (updatedSelectedProductLines.length === 0) {
      setFilteredDevices(devices);
    } else {
      const filteredDevices = devices.filter((device) =>
        updatedSelectedProductLines.includes(device.lineName)
      );
      setFilteredDevices(filteredDevices);
    }
  };

  const handleFilterToggle = () => {
    // Handle filter toggle
  };

  return (
    <div>
      <Header />
      <Toolbar
        devices={devices}
        onSearch={handleSearch}
        onViewModeToggle={onViewModeToggle}
        productLines={devices.map((device) => device.lineName)}
        activeViewMode={activeViewMode}
        selectedProductLines={selectedProductLines}
        onProductLineToggle={handleProductLineToggle}
        onFilterToggle={handleFilterToggle}
      />
      {activeViewMode === ViewMode.Grid ? (
        <ProductGrid devices={filteredDevices} />
      ) : (
        <ProductList devices={filteredDevices} />
      )}
    </div>
  );
};

export default App;
