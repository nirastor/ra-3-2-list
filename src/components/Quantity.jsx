import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Quantity({ quantity }) {
  if (!quantity) {
    return null;
  }

  let className = 'item-quantity';

  if (quantity <= 10) {
    className += ' level-low';
  } else if (quantity <= 20) {
    className += ' level-medium';
  } else {
    className += ' level-high';
  }

  return (
    <p className={className}>
      {`${quantity} left`}
    </p>
  );
}
