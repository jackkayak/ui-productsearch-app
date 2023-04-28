import React from 'react';
import { useParams } from 'react-router-dom';
import { Device } from '../fetchData';

interface Props {
  devices: Array<Device>;
}

const ProductPage: React.FC<Props> = ({ devices }) => {
  const { productid } = useParams<{ productid: string }>();

  // Find the device with the matching productid
  const product = devices.find((device) => device.id === productid);

  if (!product) {
    // Handle case when product is not found
    return <div>Product not found.</div>;
  }

  return (
    <div className='flex justify-center items-center h-screen'>
    <div>
      <div className="flex items-center">
        <img
          src={`https://static.ui.com/fingerprint/ui/icons/${product.iconId}_${product.resolutions[4][0]}x${product.resolutions[4][1]}.png`}
          alt={product.name}
          className="object-contain"
        />
        <div className="ml-4">
          <h1>{product.product}</h1>
          <p>ID: {product.id}</p>
          <p>Line: {product.lineName}</p>
          // need to add more properties from json on fetch file
        </div>
      </div>
      </div>
    </div>
  );
  
};

export default ProductPage;
