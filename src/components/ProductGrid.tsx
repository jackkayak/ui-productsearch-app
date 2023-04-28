import React from 'react';
import { Link } from 'react-router-dom';
import { Device } from '../fetchData';
import ProductCount from './ProductCount';

interface Props {
  devices: Array<Device>;
}

const ProductGrid: React.FC<Props> = ({ devices }) => {
  return (
    <div className="bg-white  max-w-full min-h-screen">
      <div className=" mx-auto px-4 sm:px-6 lg:px-14">
        <h1 className="font-normal text-[#BDBDBD] lowercase py-5">
          <ProductCount count={devices.length} />
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {devices.map((device) => (
            <Link to={`/product/${device.id}`} key={device.id}>
            <div key={device.id} className="bg-white border border-[#DBDCE1] rounded-lg overflow-hidden">
              <img
                src={`https://static.ui.com/fingerprint/ui/icons/${device.iconId}_${device.resolutions[4][0]}x${device.resolutions[4][1]}.png`}
                alt={device.name}
                className="object-contain bg-[#F6F6F8] w-full h-40 sm:h-56"
              />
              <div className="p-4">
                <p className="text-[14px] capitalize font-bold black-65">{device.product}</p>
                <p className="black-45 text-[12px] font-normal ">{device.lineName}</p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
