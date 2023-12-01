const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3001; 

app.use(cors());

const flowersData = [
    {
        id: 1,
        title: 'Ірис',
        img: 'images2.jpg',
        price: '49.99',
        description: 'Дуже гарний ірис',
    },
    {
        id: 2,
        title: 'Соняшник',
        img: 'images3.jpg',
        price: '99.99',
        description: 'Великий і яскравий соняшник',
    },
    {
        id: 3,
        title: 'Троянда',
        img: 'images6.jpg',
        price: '70.00',
        description: 'Червона троянда з красивим запахом',
    },
    {
        id: 4,
        title: 'Тюльпан',
        img: 'images1.jpg',
        price: '45.50',
        description: 'Ніжний тюльпан рожевого кольору',
    },
    {
        id: 5,
        title: 'Орхідея',
        img: 'images5.jpg',
        price: '88.60',
        description: 'Невелика орхідея рожевого кольору',
    },
    {
        id: 6,
        title: 'Фіалка',
        img: 'images4.jpg',
        price: '30.00',
        description: 'Ніжна фіалка',
    }
];

app.get('/api/flowers', (req, res) => {
    const { filters, search } = req.query;

    let filteredFlowers = flowersData;

    if (search) {
        filteredFlowers = filteredFlowers.filter((flower) =>
            flower.title.toLowerCase().includes(search.toLowerCase())
        );
    }

    if (filters) {
        const { minPrice, maxPrice } = JSON.parse(filters);

        if (minPrice && maxPrice) {
            filteredFlowers = filteredFlowers.filter(
                (flower) =>
                    parseFloat(flower.price) >= parseFloat(minPrice) &&
                    parseFloat(flower.price) <= parseFloat(maxPrice)
            );
        }
    }

    res.json(filteredFlowers);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
