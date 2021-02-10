import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Title({ title }) {
  if (!title) {
    return null;
  }

  const MAX_TEXT_LENHTH = 50;
  let text = title;
  if (text.length > MAX_TEXT_LENHTH) {
    text = `${text.slice(0, MAX_TEXT_LENHTH + 1)}…`;
  }

  return (
    <p className="item-title">{text}</p>
  );
}
