import React, {useEffect} from 'react';
import fetchData from './fetchData';
import ProductList from './components/ProductList';

// calls fetch function to access property names in json file
const App: React.FC = () => {
   useEffect(() => {
     fetchData();
  }, []);

  return (
    <div>
      <h1>Search for your product</h1>
      <ProductList />
    </div>
  );
}

export default App;