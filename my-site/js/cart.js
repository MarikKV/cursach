function drawProducts(){
    const cart = storageGet("cart") || [];
    let products_html = ``;
    cart.forEach( function(product, index){
        products_html +=
        `
        <tr>
            <th>${index + 1}</th>
            <td>
                <img src=" ${product.photo}" height="100" />
            </td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>
                <button 
                    type="button" 
                    class="btn btn-outline-danger btn-sm" 
                    onclick="deleteProduct(${index})"
                    >Видалити</button>
            </td>
        </tr>
        `
    } )
    document.getElementById("cart_table").innerHTML = products_html;
}

function deleteProduct(index){
    const cart = storageGet("cart") || [];

    cart.splice(index, 1);

    storageSave("cart", cart);

    drawProducts();
}


function makeOrder(){
    if(storageGet("cart").length < 1) {
        displayMessage('message-error', 'Корзина', 'Корзина пуста', 4000); 
        return
    }

    const order = {
        name:  document.getElementById("name").value,
        email: document.getElementById("email").value,
        cart: storageGet("cart")
    }
    
    const orders = storageGet("orders") || [];
    order.push(order);
    storageSave("orders", orders);
}


drawProducts();