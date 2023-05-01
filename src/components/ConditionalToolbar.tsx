import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Toolbar from './ToolBar';
import ProductPageToolbar from './ProductPageToolbar';
import { Device } from '../fetchData';
import { ViewMode } from './toolbar/Selector';

interface ConditionalToolbarProps {
  devices: Array<Device>;
  onSearch: (results: Array<Device>) => void;
  onViewModeToggle: () => void;
  activeViewMode: ViewMode;
  productLines: string[];
  selectedProductLines: string[];
  onProductLineToggle: (productLine: string) => void;
  onFilterToggle: () => void;
  getProductById: (productId: string) => Device | undefined;
}

const ConditionalToolbar: React.FC<ConditionalToolbarProps> = ({
  devices,
  onSearch,
  onViewModeToggle,
  activeViewMode,
  productLines,
  selectedProductLines,
  onProductLineToggle,
  onFilterToggle,
  getProductById,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const productId = location.pathname.split('/')[2];
  const product = getProductById(productId);

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <>
      {product ? (
        <ProductPageToolbar productName={product?.product || ''} onBackClick={handleBackClick} />
      ) : (
        <Toolbar
          devices={devices}
          onSearch={onSearch}
          onViewModeToggle={onViewModeToggle}
          activeViewMode={activeViewMode}
          productLines={productLines}
          selectedProductLines={selectedProductLines}
          onProductLineToggle={onProductLineToggle}
          onFilterToggle={onFilterToggle}
        />
      )}
    </>
  );
};

export default ConditionalToolbar;
