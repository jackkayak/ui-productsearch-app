import React from 'react';
import { Device } from '../fetchData';

interface Props {
  devices: Array<Device>;
}

const ProductList: React.FC<Props> = ({ devices }) => {
  return (
    <div className="bg-white min-h-screen">
      <div className="container ml-5 py-10">
        <h1 className="text-4xl font-bold mb-10">Search for your product</h1>
        <div className="chart-container" style={{ height: "80vh", overflowY: "scroll",overflowX: "hidden", marginBottom: "5rem", width:"100%", marginTop: "23px" }}>
          <table className="w-full border-collapse">
            <thead>
              <tr className=" .black-65 font-bold uppercase text-sm leading-normal">
                <th className="py-1 text-left">Product Icon</th>
                <th className="py-1 text-left">Product Line</th>
                <th className="py-1 text-left" style={{ paddingRight: "871px" }}>Name</th>
              </tr>
            </thead>
            <tbody className='.black-45 font-normal'>
              {devices.map((device) => (
                <tr key={device.id} className="hover:bg-gray-100 hover:text-color-[#006FF] border-b border-gray-200 py-10">
                  <td className="py-1 pl-4 text-left whitespace-nowrap">
                    <img
                      src={`https://static.ui.com/fingerprint/ui/icons/${device.iconId}_${device.resolutions[0][0]}x${device.resolutions[0][0]}.png`}
                      alt={device.name}
                      className="object-contain"
                      style={{ marginLeft: '72px', marginRight: "40px" }}
                    />
                  </td>
                  <td className="py-1 text-left" style={{ paddingRight: '217px' }}>
                    {device.lineName}
                  </td>
                  <td className="py-1 text-left capitalize" style={{ paddingRight: '792px' }}>
                    <div className="product-name-cell w-full">
                      {device.product}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
