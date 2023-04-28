import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../assets/backIcon.svg';

interface Props {
  productName: string;
  onBackClick: () => void;
}

const ProductPageToolbar: React.FC<Props> = ({ productName, onBackClick }) => {
  return (
    <div className="border-t-2 border-b-2 border-t-[#F6F6F8] border-b-[#F6F6F8] px-4 py-2 flex justify-between items-center">
      <div>
        <Link to="/" onClick={onBackClick}>
          <img src={backIcon} alt="Back" className="h-5 w-5" />
        </Link>
      </div>
      <div>
        <h1 className="text-[14px] black-45 font-normal">{productName}</h1>
      </div>
      <div></div>
    </div>
  );
};

export default ProductPageToolbar;
