import React from 'react';

// Функция для форматирования цены
const formatPrice = (price, currencyCode) => {
    switch (currencyCode) {
        case 'USD':
            return `$${price.toFixed(2)}`;
        case 'EUR':
            return `€${price.toFixed(2)}`;
        default:
            return `${price.toFixed(2)} ${currencyCode}`;
    }
};

// Функция для определения уровня остатка
const getQuantityLevel = (quantity) => {
    if (quantity <= 10) {
        return 'low';
    } else if (quantity <= 20) {
        return 'medium';
    } else {
        return 'high';
    }
};

// Компонент списка предложений
const Listing = ({ items }) => {
    return (
        <div className="item-list">
            {items.map((item) => (
                <div className="item" key={item.listing_id}>
                    <div className="item-image">
                        <a href={item.url}>
                            {/* Проверяем наличие объекта item.title перед попыткой получить его длину */}
                            {item.MainImage && item.MainImage.url_570xN && (
                                <img src={item.MainImage.url_570xN} alt={item.title} />
                            )}
                        </a>
                    </div>
                    <div className="item-details">
                        {/* Добавляем проверку наличия объекта item.title перед попыткой получить его длину */}
                        <p className="item-title">
                            {item.title && item.title.length > 50 ? `${item.title.substring(0, 50)}...` : item.title}
                        </p>
                        <p className="item-price">{formatPrice(parseFloat(item.price), item.currency_code)}</p>
                        <p className={`item-quantity level-${getQuantityLevel(item.quantity)}`}>
                            {item.quantity} left
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Listing;
