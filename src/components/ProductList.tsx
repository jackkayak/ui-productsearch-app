import React, { useEffect, useState } from 'react';
import getProducts, { Product } from '../Api/deviceAPI';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Array<Product>>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data.sort((a: Product, b: Product) => b.name.localeCompare(a.name)));
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-10">Search for your product</h1>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
              <div className="py-5 px-6">
                <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                <p className="text-gray-800">{product.model}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
