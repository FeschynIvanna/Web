const form = document.querySelector('.add_flower_form');
form.addEventListener('submit', function (e) {
    const name = document.getElementById('add_flower_name').value;
    const color = document.getElementById('add_flower_color').value;
    const height = parseInt(document.getElementById('add_flower_height').value);
    const price = parseInt(document.getElementById('add_flower_price').value);

    const flower = {
        name: name,
        color: color,
        height: height,
        price: price
    };
    let flowers = JSON.parse(localStorage.getItem('flowers')) || [];
    flowers.push(flower);
    localStorage.setItem('flowers', JSON.stringify(flowers));

    document.getElementById('add_flower_name').value = '';
    document.getElementById('add_flower_color').value = '';
    document.getElementById('add_flower_height').value = '';
    document.getElementById('add_flower_price').value = '';

    window.location.href = "index.html";
});
