import React from 'react';

export enum ViewMode {
    Grid = 'grid',
    List = 'list',
  }

type SelectorProps = {
  active: boolean;
  activeIcon: string;
  defaultIcon: string;
  onClick: () => void;
};

const Selector: React.FC<SelectorProps> = ({
  active,
  activeIcon,
  defaultIcon,
  onClick,
}) => {
  return (
    <button onClick={onClick} className='mr-2'>
      <img src={active ? activeIcon : defaultIcon} alt="Toggle" />
    </button>
  );
};

export default Selector;

