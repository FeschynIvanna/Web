document.addEventListener('DOMContentLoaded', function () {
    const get_url = 'http://localhost:5000/get';
    const form = document.querySelector('.add_flower_form');
    const url = 'http://localhost:5000/add';
    fetch(get_url)
        .then(response => response.json())
        .then(flowers => {
            console.log('Data received:', flowers);

            form.addEventListener('submit', function (e) {
                e.preventDefault();
                const name = document.getElementById('add_flower_name').value;
                const color = parseInt(document.getElementById('add_flower_color').value);
                const height = parseInt(document.getElementById('add_flower_height').value);
                const price = parseInt(document.getElementById('add_flower_price').value);

                const flower = {
                    name: name,
                    color: color,
                    height: height,
                    price: price
                };
                flowers.push(flower);
                console.log(flowers);

                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(flower),
                })
                .then(response => {
                    console.log('Flower created successfully:', response.json());
                })
                .catch(error => {
                    console.error('Some error occurred:', error);
                });


                document.getElementById('add_flower_name').value = '';
                document.getElementById('add_flower_color').value = '';
                document.getElementById('add_flower_height').value = '';
                document.getElementById('add_flower_price').value = '';
            }) 

        })
        .catch(error =>{
            console.error('Some error occurred:', error);
        });
    });


// const form = document.querySelector('.add_flower_form');
// form.addEventListener('submit', function (e) {
//     const name = document.getElementById('add_flower_name').value;
//     const color = document.getElementById('add_flower_color').value;
//     const height = parseInt(document.getElementById('add_flower_height').value);
//     const price = parseInt(document.getElementById('add_flower_price').value);

//     const flower = {
//         name: name,
//         color: color,
//         height: height,
//         price: price
//     };
//     let flowers = JSON.parse(localStorage.getItem('flowers')) || [];
//     flowers.push(flower);
//     localStorage.setItem('flowers', JSON.stringify(flowers));

//     document.getElementById('add_flower_name').value = '';
//     document.getElementById('add_flower_color').value = '';
//     document.getElementById('add_flower_height').value = '';
//     document.getElementById('add_flower_price').value = '';

//     window.location.href = "index.html";
// });

