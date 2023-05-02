import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../assets/Back-icon.svg';

interface Props {
  productName: string;
  onBackClick: () => void;
  location?: {
    pathname: string;
  };
}

const ProductPageToolbar: React.FC<Props> = ({ productName, onBackClick }) => {
  return (
    <div className=" border-t-2 border-b-2 border-t-[#F6F6F8] border-b-[#F6F6F8] px-4 py-4 flex justify-between items-center >">
      <div style={{ marginLeft: '32px' }}>
        <Link to="/" onClick={onBackClick}>
          <img src={backIcon} alt="Back" />
        </Link>
      </div>
      <div>
        <h1 className="text-[14px] black-45 font-normal ">{productName}</h1>
      </div>
      <div></div>
    </div>
  );
};

export default ProductPageToolbar;



