import React, { useEffect, useState } from 'react';
import fetchData, { Device } from './fetchData';
import Header from './components/Header';
import Toolbar from './components/ToolBar';
import ProductList from './components/ProductList';
import ProductGrid from './components/ProductGrid';

const App: React.FC = () => {
  const [devices, setDevices] = useState<Array<Device>>([]);

  useEffect(() => {
    const fetchDevices = async () => {
      const data = await fetchData();
      setDevices(data);
    };
    fetchDevices();
  }, []);

  return (
    <div>
      <Header />
      <Toolbar devices={devices} />
      <ProductList devices={devices} />
      <ProductGrid devices={devices} />
    </div>
  );
};

export default App;
