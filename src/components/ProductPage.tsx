import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchData, { Device } from '../fetchData';

interface ProductPageProps {
  devices: Device[];
}

const ProductPage: React.FC<ProductPageProps> = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Device | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const products = await fetchData();
      const foundProduct = products.find((device) => device.id === productId);
      setProduct(foundProduct || null);
    };

    fetchProduct();
  }, [productId]);

  return (
    <div>
      <h1>add product name prop</h1>
      <p>Product ID: {productId}</p>
      {product && (
        <div>
          <h2>{product.name}</h2>
          
        </div>
      )}
    </div>
  );
};

export default ProductPage;

