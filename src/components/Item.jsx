/* eslint-disable react/prop-types */
import React from 'react';
import Price from './Price';
import Title from './Title';
import Quantity from './Quantity';

export default function Item({ item }) {
  if (!item) {
    return null;
  }

  /*
    Одна картинка была битая и выдвала ошибку, поэтому такая проверка.
    Не знаю насколько это правильно.
  */
  const imgSrc = item.MainImage && item.MainImage.url_570xN;

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={imgSrc} alt="someAlt" />
        </a>
      </div>
      <div className="item-details">
        <Title title={item.title} />
        <Price price={item.price} currencyCode={item.currency_code} />
        <Quantity quantity={item.quantity} />
      </div>
    </div>
  );
}
