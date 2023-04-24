import React, { useEffect, useState } from 'react';
import fetchData, { Device } from './fetchData';
import ProductList from './components/ProductList';

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
      <ProductList devices={devices} />
    </div>
  );
};

export default App;
