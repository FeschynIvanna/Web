let flowers = [
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

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.add_flower_form');
    const url = 'http://localhost:5000/view';
    const get_url = 'http://localhost:5000/get';

    fetch(get_url)
        .then(response => response.json())
        .then(flowers => {
            console.log('Data received:', flowers); 
            displayObjectsOnPage(flowers);

            function renderFlowers(){
                let containers = document.querySelectorAll(".flower_container");
                for (let i in cars){
                    let container = containers[i];
                    let name_div = container.querySelector(".name");
                    let color_div = container.querySelector(".color");
                    let height_div = container.querySelector(".height");
                    let price_div = container.querySelector(".price");
                    name_div.innerHTML = null;
                    color_div.innerHTML = null;
                    height_div.innerHTML = null;
                    price_div.innerHTML = null;
                }
                displayObjectsOnPage(flowers);
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

            function searchFlower(){
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
                    resultDiv.textContent = `Name: ${foundFlower.name}\n
                    Color: ${foundFlower.color}\n
                    Height: ${foundFlower.height}\n
                    Price: ${foundFlower.price}`;
                } else {
                    resultDiv.textContent = 'Flower not found.';
                }
                });
            }
            searchFlower();

            flowers.forEach(flower => {
                console.log(flower);
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(flower),
                })
                .then(response => {
                    console.log('Flower created successfully:', response);
                })
                .catch(error => {
                    console.error('Some error occurred:', error);
                });
            });
        })
        .catch(error =>{
            console.error('Some error occurred:', error);
        });
});


function displayObjectsOnPage(objects) {
    const allFlowers = document.querySelector(".flowers");
}

function total_price(){
    let container = document.querySelector(".total");
    let total_price = 0;
    for (let i of flowers){
        total_price += i.price;
    }
    let total_price_paragraph = document.createElement("p");
    total_price_paragraph.textContent = ("Total price: " + total_price);
    container.appendChild(total_price_paragraph);
}
total_price();

// function renderFlowers() {
//     let containers = document.querySelectorAll(".flowers_container"); 
//     for (let i in flowers) {
//         let container = containers[i];
//         let name_div = container.querySelector(".name");
//         let color_div = container.querySelector(".color");
//         let height_div = container.querySelector(".height");
//         let price_div = container.querySelector(".price");
//         name_div.textContent = null;
//         color_div.textContent = null;
//         height_div.textContent = null;
//         price_div.textContent = null;
//     }
//     displayFlowers();
// }
// function sortFlowersByHeightDesc(){
//     flowers.sort(function(a, b){
//         return b.height - a.height;
//     });
//     renderFlowers();
// }
// function sortFlowersByHeightAsc(){
//     flowers.sort(function(a, b){
//         return a.height - b.height;
//     });
//     renderFlowers();
// }
// function sortFlowersByPriceDesc(){
//     flowers.sort(function(a, b){
//         return b.price - a.price;
//     });
//     renderFlowers();
// }
// function sortFlowersByPriceAsc(){
//     flowers.sort(function(a, b){
//         return a.price - b.price;
//     });
//     renderFlowers();
// }
// const HeightDes = document.getElementById("height__des");
// HeightDes.addEventListener("click", sortFlowersByHeightDesc);
// const HeightAsc = document.getElementById("height__asc");
// HeightAsc.addEventListener("click", sortFlowersByHeightAsc);
// const PriceDes = document.getElementById("price__des");
// PriceDes.addEventListener("click", sortFlowersByPriceDesc);
// const PriceAsc = document.getElementById("price__asc");
// PriceAsc.addEventListener("click", sortFlowersByPriceAsc);
// const pointer = document.querySelector(".pointer");
// const list = document.querySelectorAll(".sort li");
// pointer.addEventListener('click', () => {
//     list.forEach((item) => {item.classList.toggle('active');
// });
// });


// function searchFlower(){
//     const searchInput = document.getElementById("searchInput");
//     const searchButton = document.getElementById("searchButton");
//     const resultDiv = document.getElementById("result");
//     searchButton.addEventListener("click", function(event) {
//     event.preventDefault();
//     resultDiv.classList.toggle('active');
//     const targetName = searchInput.value;
//     const foundFlower = flowers.find(function(flower) {
//         return flower.name === targetName;
//     });
//     if (foundFlower) {
//         resultDiv.textContent = `Name: ${foundFlower.name}\n
//         Color: ${foundFlower.color}\n
//         Height: ${foundFlower.height}\n
//         Price: ${foundFlower.price}`;
//     } else {
//         resultDiv.textContent = 'Flower not found.';
//     }
//     });
// }
// searchFlower();

// function displayObjectsOnPage(objects) {
//     const allFlowers = document.querySelector(".flowers");
//     allFlowers.innerHTML = ''
//     for (let index = 0; index < objects.length; index++) {
//         const displayElement = document.createElement("div");
//         displayElement.id = "displayObject";
//         displayElement.classList.add("flower_container");
//         displayElement.innerHTML = '';
//         const object = objects[index];
//         const objectDiv = document.createElement('div');
//         objectDiv.innerHTML = `
//             <div class="name">
//             <p>Name: ${object.name}</p>
//             </div>
//             <div class="color">
//             <p>Color: ${object.color}</p>
//             </div>
//             <div class="height">
//             <p>Height: ${object.height}</p>
//             </div>
//             <div class="price">
//             <p>Price: ${object.price}</p>
//             </div>
//         `;
//         displayElement.appendChild(objectDiv);
        
//         allFlowers.appendChild(displayElement)
//     }
    
// }

// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.querySelector('.add_flower_form');
//     flowers = JSON.parse(localStorage.getItem("flowers"));
//     displayObjectsOnPage(flowers);
//     localStorage.setItem("flowers", JSON.stringify(flowers));
    
// });

// function total_price(){
//     let container = document.querySelector(".total");
//     let total_price = 0;
//     for (let i of flowers){
//         total_price += i.price;
//     }
//     let total_price_paragraph = document.createElement("p");
//     total_price_paragraph.textContent = ("Total price: " + total_price);
//     container.appendChild(total_price_paragraph);
// }

// total_price();