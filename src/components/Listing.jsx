/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

/*
  Вопрос: где правильнее создавать контейнер (<div className="item-list">)
  В компоненте который работает в этомконтнейнере? (Типа сам себе создал)
  Или выше в Аpp (типа App создает контейнеры и кладет туда компоненты, чтобы знать кто где лежит)
*/

export default function Listing({ items }) {
  if (!items) {
    return null;
  }

  return (
    <div className="item-list">
      {items.map(((item) => <Item key={item.listing_id} item={item} />))}
    </div>
  );
}

Listing.propTypes = {
  items: PropTypes.array,
};
