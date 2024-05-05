import React from 'react';
import './App.css';
import Listing from './components/Listing/Listing';
import listingsData from './data/etsy.json';

// Компонент приложения
function App() {
  return (
    <div className="app">
      {/* Проверяем наличие данных перед их использованием */}
      {listingsData.length > 0 ? (
        <Listing items={listingsData} /> // Отображаем компонент списка предложений с данными
      ) : (
        <p>No listings available</p> // Выводим сообщение об отсутствии данных, если список пустой
      )}
    </div>
  );
}

export default App;
