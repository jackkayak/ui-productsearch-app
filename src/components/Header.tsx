import React from 'react';
import UIlogo from '../assets/Ubiquiti_logo.svg';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className=" bg-[#F6F6F8] ">
      <div className=" mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
          <img
            src={UIlogo}
            alt="Logo"
            className="h-12 w-auto"
          />
          </Link>
          
          <h1 className="text-xl text-[#838691] font-normal ml-2">Devices</h1>
          
        </div>
        <p className="text-sm font-medium mr-2">Frontend dev: Jack Kay</p>
      </div>
    </div>
  );
};

export default Header;