import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Price({ price, currencyCode }) {
  if (!price || !currencyCode) {
    return null;
  }

  let fullPrice = '';
  if (currencyCode === 'USD') {
    fullPrice = `$${price}`;
  } else if (currencyCode === 'EUR') {
    fullPrice = `€${price}`;
  } else {
    fullPrice = `${price} ${currencyCode}`;
  }

  return (
    <p className="item-price">
      {fullPrice}
    </p>
  );
}
