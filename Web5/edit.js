document.addEventListener('DOMContentLoaded', function () {
    const nameEdit = document.getElementById("name_edit");
    const colorEdit = document.getElementById("color_edit");
    const heightEdit = document.getElementById("height_edit");
    const priceEdit = document.getElementById("price_edit");
    const url = 'http://localhost:5000/edit';
    const get_url = 'http://localhost:5000/get';
    fetch(get_url)
        .then(response => response.json())

        .then(flowers => {
            console.log('Data received:', flowers);

            const chooseName = document.querySelector(".choose_name");    
            chooseName.addEventListener('submit', function(e){
                const nameToEdit = document.getElementById('name_to_edit').value;
                const flowerToEdit = flowers.find(function(flower){
                    return flower.name === nameToEdit;
                });

                e.preventDefault();
                const editingForm = document.querySelector(".editing_form");
                editingForm.classList.add("active");
                nameEdit.value = flowerToEdit.name;
                colorEdit.value = flowerToEdit.color;
                heightEdit.value = flowerToEdit.height;
                priceEdit.value = flowerToEdit.price;
            })

                const finishEditing = document.querySelector(".editing_form");
                finishEditing.addEventListener('submit', function(e){
                    e.preventDefault();
                    let editedFlower = flowers.find(function(flower){
                        return flower.name === nameEdit.value;
                    })

                    editedFlower.name = nameEdit.value;
                    editedFlower.color = parseInt(colorEdit.value);
                    editedFlower.height = parseInt(heightEdit.value);
                    editedFlower.price = parseInt(priceEdit.value);

                    fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(editedFlower)
                    })

                    .then(response =>{
                        console.log('Flower edited successfully:', response.json());
                    })
                    .catch(error => {
                        console.error('Some error occurred:', error);
                    });
                });
                    })
    .catch(error =>{
        console.error('Some error occurred:', error);
    });
})


// const nameEdit = document.getElementById("name_edit");
// const colorEdit = document.getElementById("color_edit");
// const heightEdit = document.getElementById("height_edit");
// const priceEdit = document.getElementById("price_edit");
// const flowers = JSON.parse(localStorage.getItem("flowers"));

// const chooseName = document.querySelector(".choose_name");    
// chooseName.addEventListener('submit', function(e){
//     const nameToEdit = document.getElementById('name_to_edit').value;
//     const flowerToEdit = flowers.find(function(flower){
//         return flower.name === nameToEdit;
//     });
//     e.preventDefault();
//     const editingForm = document.querySelector(".editing_form");
//     editingForm.classList.add("active");
//     nameEdit.value = flowerToEdit.name;
//     colorEdit.value = flowerToEdit.color;
//     heightEdit.value = flowerToEdit.height;
//     priceEdit.value = flowerToEdit.price;
// })

// const finishEditing = document.querySelector(".editing_form");
// finishEditing.addEventListener('submit', function(e){
//     e.preventDefault();
//     let editedFlower = flowers.find(function(flower){
//         return flower.name === nameEdit.value;
//     })
//     editedFlower.name = nameEdit.value;
//     editedFlower.color = parseInt(colorEdit.value);
//     editedFlower.height = parseInt(heightEdit.value);
//     editedFlower.price = parseInt(priceEdit.value);
//     localStorage.setItem('flowers', JSON.stringify(flowers));
// })
