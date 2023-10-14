const flowers = [
    {
        name: "Rose",
        color: "Pink",
        height: 40,
        price: 131
    },
    {
        name: "Poppy",
        color: "Red",
        height: 20,
        price: 53
    },
    {
        name: "Sunflower",
        color: "Yellow",
        height: 65,
        price: 122
    },
    {
        name: "Tulip",
        color: "Orange",
        height: 30,
        price: 65
    },
    {
        name: "Iris",
        color: "Blue",
        height: 45,
        price: 76
    }
];
function displayFlowers() {
    let containers = document.querySelectorAll(".flowers_container");
    for (let i in flowers) {
        let flower = flowers[i];
        let container = containers[i];
        
        let name_div = container.querySelector(".name");
        let color_div = container.querySelector(".color");
        let height_div = container.querySelector(".height");
        let price_div = container.querySelector(".price");
        
        name_div.textContent = "Name: " + flower.name;
        color_div.textContent = "Color: " + flower.color;
        height_div.textContent = "Height: " + flower.height;
        price_div.textContent = "Price: " + flower.price;
    }
}

// Викликаємо displayFlowers() при завантаженні сторінки
document.addEventListener("DOMContentLoaded", function () {
    displayFlowers();
});

let total_price = 0;
for (let i of flowers) {
    total_price += i.price;
}
document.write("Total price: " + total_price);

function renderFlowers() {
    let containers = document.querySelectorAll(".flowers_container"); 
    for (let i in flowers) {
        let container = containers[i];
        let name_div = container.querySelector(".name");
        let color_div = container.querySelector(".color");
        let height_div = container.querySelector(".height");
        let price_div = container.querySelector(".price");
        name_div.textContent = null;
        color_div.textContent = null;
        height_div.textContent = null;
        price_div.textContent = null;
    }
    displayFlowers();
}
function sortFlowersByHeightDesc(){
    flowers.sort(function(a, b){
        return b.height - a.height;
    });
    renderFlowers();
}
function sortFlowersByHeightAsc(){
    flowers.sort(function(a, b){
        return a.height - b.height;
    });
    renderFlowers();
}
function sortFlowersByPriceDesc(){
    flowers.sort(function(a, b){
        return b.price - a.price;
    });
    renderFlowers();
}
function sortFlowersByPriceAsc(){
    flowers.sort(function(a, b){
        return a.price - b.price;
    });
    renderFlowers();
}
const HeightDes = document.getElementById("height__des");
HeightDes.addEventListener("click", sortFlowersByHeightDesc);
const HeightAsc = document.getElementById("height__asc");
HeightAsc.addEventListener("click", sortFlowersByHeightAsc);
const PriceDes = document.getElementById("price__des");
PriceDes.addEventListener("click", sortFlowersByPriceDesc);
const PriceAsc = document.getElementById("price__asc");
PriceAsc.addEventListener("click", sortFlowersByPriceAsc);
const pointer = document.querySelector(".pointer");
const list = document.querySelectorAll(".sort li");
pointer.addEventListener('click', () => {
    list.forEach((item) => {item.classList.toggle('active');
});
});

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const resultDiv = document.getElementById("result");
searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    resultDiv.classList.toggle('active');
    const targetName = searchInput.value;
    const foundFlower = flowers.find(function(flower) {
    return flower.name === targetName;
    });
    if (foundFlower) {
    resultDiv.innerHTML = `Name: ${foundFlower.name}<br>
    Color: ${foundFlower.color}<br>
    Height: ${foundFlower.height}<br>
    Price: ${foundFlower.price}`;
    } else {
    resultDiv.innerHTML = 'Flower not found.';
    }
});

/// ...

document.addEventListener('DOMContentLoaded', function () {
    // Отримуємо форму для створення квітки
    const addFlowerForm = document.getElementById('addFlowerForm');

    // Прикріплюємо обробник події для подання форми
    addFlowerForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Зупиняємо стандартну поведінку форми

        // Отримуємо значення полів форми
        const name = document.getElementById('name').value;
        const color = document.getElementById('color').value;
        const height = document.getElementById('height').value;
        const price = document.getElementById('price').value;

        // Створюємо новий елемент для квітки
        const flowerItem = document.createElement('div');
        flowerItem.className = 'flower-item';

        // Заповнюємо HTML-код для нової квітки
        flowerItem.innerHTML = `
            <h3>${name}</h3>
            <p><strong>Color:</strong> ${color}</p>
            <p><strong>Height:</strong> ${height} cm</p>
            <p><strong>Price:</strong> $${price}</p>
        `;

        // Отримуємо контейнер для квіток на головній сторінці і додаємо нову квітку
        const flowerContainer = document.getElementById('flower_container');
        flowerContainer.appendChild(flowerItem);

        // Очищуємо поля форми
        document.getElementById('name').value = '';
        document.getElementById('color').value = '';
        document.getElementById('height').value = '';
        document.getElementById('price').value = '';
    });
});
