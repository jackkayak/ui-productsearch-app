import React from 'react';
import { Device } from '../fetchData';
import ProductCount from './ProductCount';
import { useNavigate } from 'react-router-dom';

interface Props {
  devices: Array<Device>;
}

const ProductList: React.FC<Props> = ({ devices }) => {
  const navigate = useNavigate();

  const handleRowClick = (id: string, productName: string) => {
    navigate(`/product/${id}/${productName}`); // adding the product name to the url finally helped pass it to the productpagetoolbar
  };



  return (
    <div className="bg-white min-h-screen">
      <div className="ml-20 mr-12 py-10">
        <div
          className="chart-container"
          style={{ height: '80vh', overflowY: 'scroll', overflowX: 'hidden', marginBottom: '5rem', width: '100%', marginTop: '23px' }}
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="black-65 font-bold uppercase text-sm leading-normal">
                <th className="py-1 font-normal text-[#BDBDBD] lowercase">
                  <ProductCount count={devices.length} />
                </th>
                <th className="py-1 text-left">Product Line</th>
                <th className="py-1 text-left" style={{ paddingRight: '871px' }}>Name</th>
              </tr>
            </thead>
            <tbody className="black-65 font-normal">
              {devices.map((device) => (
                <tr
                  className="hover:bg-gray-100 hover:text-color-[#006FF] border-b border-gray-200 py-10  cursor-pointer"
                  key={device.id}
                  onClick={() => handleRowClick(device.id, device.product)}
                >
                  <td className="py-1 pl-4 text-left whitespace-nowrap">
                    <img
                      src={`https://static.ui.com/fingerprint/ui/icons/${device.iconId}_${device.resolutions[0][0]}x${device.resolutions[0][0]}.png`}
                      alt={device.name}
                      className="object-contain"
                      style={{ marginLeft: '72px', marginRight: '40px' }}
                    />
                  </td>
                  <td className="py-1 text-left" style={{ paddingRight: '217px' }}>
                    {device.lineName}
                  </td>
                  <td className="py-1 text-left capitalize" style={{ marginRight: '792px' }}>
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
