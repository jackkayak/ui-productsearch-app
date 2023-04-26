import React from 'react';

interface Props {
  count: number;
}

const ProductCount: React.FC<Props> = ({ count }) => (
  <div>{count} devices</div>
);

export default ProductCount;
