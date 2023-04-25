import React from 'react';
import UIlogo from '../assets/Ubiquiti_logo.svg'

const Header: React.FC = () => {
  return (
    <div className=" bg-[#F6F6F8]">
      <div className=" mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={UIlogo}
            alt="Logo"
            className="h-12 w-auto"
          />
          <h1 className="text-xl font-normal ml-2">Devices</h1>
        </div>
        <p className="text-sm font-medium mr-2">Frontend dev: Jack Kay</p>
      </div>
    </div>
  );
};

export default Header;