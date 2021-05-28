let admin = JSON.parse( localStorage.getItem('admin') );
if( admin != true ){
    window.location = 'index.html';
}

function saveProduct(){
    const new_product = {
        name:  document.getElementById('name').value,
        image: document.getElementById('image').value,
        price: document.getElementById('price').value,
        count: document.getElementById('count').value
    }

    let products = storageGet("products") || [];

    products.push(new_product)

    storageSave("products", products);
}