const nameEdit = document.getElementById("name_edit");
const colorEdit = document.getElementById("color_edit");
const heightEdit = document.getElementById("height_edit");
const priceEdit = document.getElementById("price_edit");
const flowers = JSON.parse(localStorage.getItem("flowers"));

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
    localStorage.setItem('flowers', JSON.stringify(flowers));
})
