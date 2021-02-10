import './App.css';
import React, { useState } from 'react';
import Listing from './components/Listing';

export default function App() {
  const [data, setData] = useState(null);

  /*
    Затычка дл получения данных
    вместо хука для componentDidMount
    Коряво но работает
  */
  if (!data) {
    const URL = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/props/listing/data/etsy.json';
    fetch(URL)
      .then((response) => response.json())
      .then((arr) => setData(arr));
  }

  return (
    <div>
      <Listing items={data} />
    </div>
  );
}
