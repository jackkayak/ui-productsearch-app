import React, { useEffect, useState } from 'react';
import fetchData, { Device } from './fetchData';
import ProductList from './components/ProductList';
import ProductGrid from './components/ProductGrid';
import Header from './components/Header';
import fetchPropertyNames from './Api/utils';

const App: React.FC = () => {
  const [devices, setDevices] = useState<Array<Device>>([]);

   useEffect(() => {
    const fetchDevices = async () => {
      const data = await fetchData();
      setDevices(data);
    };
    fetchDevices();
  }, []);

  useEffect(() => {
    fetchPropertyNames();
  }, []);

  return (
    <div>
      <Header />
      <ProductList devices={devices} />
      <ProductGrid devices={devices} />
    </div>
  );
};

export default App;