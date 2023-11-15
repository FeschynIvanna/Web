import React from 'react';

export default function Catalog() {
    const flowersData = [
        { id: 1, name: 'Рожі', price: 10 },
        { id: 2, name: 'Тюльпани', price: 8 },
        { id: 3, name: 'Лілії', price: 12 },
    ];

    return (
        <div>
            <h1>Всі види квітів</h1>
            <ul>
                {flowersData.map((flower) => (
                    <li key={flower.id}>
                        <span>{flower.name}</span>
                        <span>Ціна: ${flower.price}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
