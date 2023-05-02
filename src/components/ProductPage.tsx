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
/* Some products dont have 257 x 257 resolution, so this is an attempt at a fallback solution. Still getting small images here and there even with 257x257, unsure of how else to troubleshoot.  */
  const iconUrl =
  product.resolutions[4]
    ? `https://static.ui.com/fingerprint/ui/icons/${product.iconId}_${product.resolutions[4][0]}x${product.resolutions[4][1]}.png`
    : product.resolutions[3]
    ? `https://static.ui.com/fingerprint/ui/icons/${product.iconId}_${product.resolutions[3][0]}x${product.resolutions[3][1]}.png`
    : product.resolutions[2]
    ? `https://static.ui.com/fingerprint/ui/icons/${product.iconId}_${product.resolutions[2][0]}x${product.resolutions[2][1]}.png`
    : null;

  return (
    <div className='flex flex-col items-center pp-padding' >
    <div >
      <div className=" flex items-center" >
  
        
        {iconUrl && (
          <img src={iconUrl} alt={product.name} className="object-contain" />
  )}
<div/>
{/* Add data points as needed here from the fetchData.ts */}
  <table className="black-65 ml-8" style={{ minWidth: '400px'}} >
  <tbody>
  <tr className="border-b border-b-[#EDEDF0]">
      <td className="text-left py-2">Product Line</td>
      <td className="text-right py-2" >{product.lineName}</td>
    </tr>
    <tr className="border-b border-b-[#EDEDF0]">
      <td className="text-left py-2">ID</td>
      <td className="text-right py-2" >{product.lineId}</td>
    </tr>
    <tr className="border-b border-b-[#EDEDF0]">
      <td className="text-left py-2">Name</td>
      <td className="text-right py-2" >{product.product}</td>
    </tr>
    <tr className="border-b border-b-[#EDEDF0]">
      <td className="text-left py-2">Short name</td>
      <td className="text-right py-2" >{product.shortnames[0]}</td>
    </tr>
     {/* conditional renders as not all json objects have these */}
     {product.maxPower && (
    <tr className="border-b border-b-[#EDEDF0]">
      <td className="text-left py-2">Max. power</td>
      <td className="text-right py-2" >{product.maxPower}</td>
    </tr>
  )}
  {product.maxSpeedMegabitsPerSecond && (
    <tr className="border-b border-b-[#EDEDF0]">
      <td className="text-left py-2">Speed</td>
      <td className="text-right py-2"  >{product.maxSpeedMegabitsPerSecond}</td>
    </tr>
  )}
  {product.numberOfPorts && (
    <tr className="border-b border-b-[#EDEDF0]">
      <td className="text-left py-2">Number of ports</td>
      <td className="text-right py-2" >{product.numberOfPorts}</td>
    </tr>
  )}
  </tbody>
</table>



      </div>
      </div>
    </div>
  );
  
};

export default ProductPage;
