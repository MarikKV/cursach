const products = storageGet("products");
const all_products = document.getElementById("all_products");

function drawProducts(){
    let products_html = ``;

    products.forEach( function(product, index){
        products_html +=
        `
        <div class="card" style="width: 18rem;">
            <img 
                src="https://content2.rozetka.com.ua/goods/images/big/45254637.jpg" 
                class="card-img-top" 
                style="	width: auto;height: 230px;margin: 10px auto 0;">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between ">
                    <b>Кількість</b>
                    <p>10</p>
                </li>
                <li class="list-group-item d-flex justify-content-between ">
                    <b>Ціна</b>
                    <p>1000</p>
                </li>
            </ul>
            <div class="card-body">
                <button type="button" class="btn btn-primary btn-sm">В корзинy</button>
            </div>
        </div>
        `
    } )

    all_products.innerHTML = products_html;
}

drawProducts();

console.log(products);