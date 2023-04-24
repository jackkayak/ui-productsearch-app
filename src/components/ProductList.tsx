import React from 'react';
import { Device } from '../fetchData';

interface Props {
  devices: Array<Device>;
}

const ProductList: React.FC<Props> = ({ devices }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-10">Search for your product</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-1 px-2 text-left">Product Icon</th>
              <th className="py-1 px-2 text-left">Product Line</th>
              <th className="py-1 px-2 text-left">Product Name</th>
            </tr>
          </thead>
          <tbody>
            {devices.map((device) => (
              <tr key={device.id} className="hover:bg-gray-100 border-b border-gray-200 py-10">
                <td className="py-1 px-2 text-left whitespace-nowrap">
                <img src={`https://static.ui.com/fingerprint/ui/icons/${device.iconId}_${device.resolutions[0][0]}x${device.resolutions[0][0]}.png`} alt={device.name} className="object-contain" />
                  </td>
                <td className="py-1 px-2 bold text-left">{device.lineName}</td>
                <td className="py-1 px-2 text-left">
                {device.product} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
