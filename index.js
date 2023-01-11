let api = new XMLHttpRequest;
api.open('GET', 'https://dummyjson.com/products', true);
api.send();

api.addEventListener("load", function() {
    let data = JSON.parse(api.responseText);
    console.log(data.products);
    let datap = data.products

    let cart = "";
    for (let i = 0; i < datap.length; i++) {

        cart += `<div class="col-md-4 mt-3"><div class="boxes"> <div class="img"><img src="${datap[i].thumbnail}"></div> <div class="info"><p id="brand">BRAND: ${datap[i].brand}</p><br><p id="title">TITLE: ${datap[i].title}</p><br>
<p id="price">PRICE: $ ${datap[i].price}</p></div></div></div>`
    }

    document.getElementById('box').innerHTML = cart;

})