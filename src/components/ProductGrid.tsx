import React from 'react';
import { Device } from '../fetchData';

interface Props {
  devices: Array<Device>;
}

const ProductList: React.FC<Props> = ({ devices }) => {
  return (
    <div className="bg-white  max-w-full min-h-screen">
      <div className=" mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-10">Search for your product</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {devices.map((device) => (
            <div key={device.id} className="bg-white border border-[#DBDCE1] rounded-lg shadow-md overflow-hidden">
              <img
                src={`https://static.ui.com/fingerprint/ui/icons/${device.iconId}_${device.resolutions[4][0]}x${device.resolutions[4][1]}.png`}
                alt={device.name}
                className="object-contain bg-[#F6F6F8] w-full h-40 sm:h-56"
              />
              <div className="p-4">
                <p className="text-[16px] capitalize font-normal .black-65">{device.product}</p>
                <p className="text-[14px] font-normal .black-45">{device.lineName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
