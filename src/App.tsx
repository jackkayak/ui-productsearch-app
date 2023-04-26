import React, { useEffect, useState } from 'react';
import fetchData, { Device } from './fetchData';
import Header from './components/Header';
import Toolbar from './components/ToolBar';
import ProductList from './components/ProductList';
import ProductGrid from './components/ProductGrid';

const App: React.FC = () => {
  const [devices, setDevices] = useState<Array<Device>>([]);
  const [filteredDevices, setFilteredDevices] = useState<Array<Device>>([]);

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

  return (
    <div>
      <Header />
      <Toolbar devices={devices} onSearch={handleSearch} />
      <ProductList devices={filteredDevices} />
      <ProductGrid devices={filteredDevices} />
    </div>
  );
};

export default App;
