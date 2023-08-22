
function handleClickCart () {
    const price = productPrice('k-accessories-price');
    const totalPrice = productPrice('total-price');
    const totalPriceSum = price + totalPrice;
    console.log(price, totalPrice, totalPriceSum);
    totalPriceSet('total-price', totalPriceSum);
    totalPriceSet('final-total', totalPriceSum);
    productList('K. Accessories');


    const buttonPurchase = document.getElementById('btn-disabled');
    buttonPurchase.removeAttribute('disabled');

    const priceTotal = totalPriceSet('total-price');
    const couponBtn = document.getElementById('appy-coupon');
    if (priceTotal > 200) {
        couponBtn.removeAttribute("disabled");
    }




}

// cart-2
function handleClickCart2 () {
    const price = productPrice('k-accessories-price2');
    const totalPrice = productPrice('total-price');
    const totalPriceSum = price + totalPrice
    console.log(price, totalPrice, totalPriceSum);
    totalPriceSet('total-price', totalPriceSum);
    totalPriceSet('final-total', totalPriceSum);
    productList('K. Accessories');
}
// cart-3
function handleClickCart3 () {
    const price = productPrice('home-cooker-price');
    const totalPrice = productPrice('total-price');
    const totalPriceSum = price + totalPrice
    console.log(price, totalPrice, totalPriceSum);
    totalPriceSet('total-price', totalPriceSum);
    totalPriceSet('final-total', totalPriceSum);
    productList('Home Cooker');
}
// cart-4
function handleClickCart4 () {
    const price = productPrice('sports-back-cap');
    const totalPrice = productPrice('total-price');
    const totalPriceSum = price + totalPrice
    console.log(price, totalPrice, totalPriceSum);
    totalPriceSet('total-price', totalPriceSum);
    totalPriceSet('final-total', totalPriceSum);
    productList('Sports Back Cap');
}
// cart-5
function handleClickCart5 () {
    const price = productPrice('full-jersey-set');
    const totalPrice = productPrice('total-price');
    const totalPriceSum = price + totalPrice
    console.log(price, totalPrice, totalPriceSum);
    totalPriceSet('total-price', totalPriceSum);
    totalPriceSet('final-total', totalPriceSum);
    productList('Full Jersey Set');
}
// cart-6
function handleClickCart6 () {
    const price = productPrice('sports-cates');
    const totalPrice = productPrice('total-price');
    const totalPriceSum = price + totalPrice
    console.log(price, totalPrice, totalPriceSum);
    totalPriceSet('total-price', totalPriceSum);
    totalPriceSet('final-total', totalPriceSum);
    productList('Sports cates');
}
// cart-7
function handleClickCart7 () {
    const price = productPrice('single-relax-chair');
    const totalPrice = productPrice('total-price');
    const totalPriceSum = price + totalPrice
    console.log(price, totalPrice, totalPriceSum);
    totalPriceSet('total-price', totalPriceSum);
    totalPriceSet('final-total', totalPriceSum);
    productList('Single Relax Chair');
}
// cart-8
function handleClickCart8 () {
    const price = productPrice('children-play');
    const totalPrice = productPrice('total-price');
    const totalPriceSum = price + totalPrice
    console.log(price, totalPrice, totalPriceSum);
    totalPriceSet('total-price', totalPriceSum);
    totalPriceSet('final-total', totalPriceSum);
    productList('Children play');
}
// cart-9
function handleClickCart9 () {
    const price = productPrice('flexible-sofa');
    const totalPrice = productPrice('total-price');
    const totalPriceSum = price + totalPrice
    console.log(price, totalPrice, totalPriceSum);
    totalPriceSet('total-price', totalPriceSum);
    totalPriceSet('final-total', totalPriceSum);
    productList('Flexible Sofa');
}



// discount price
// document.getElementById('applyPromoButton').addEventListener('click', function () {
//     const promoCode = document.getElementById('promoCode').value;
//     const originalPrice = 100; // Replace with your original price

//     // Simulate checking the promo code
//     if (promoCode === 'SELL200') {
//         const discountAmount = 20; // 50% discount
//         const discountedPrice = (originalPrice * (100 - discountAmount)) / 100;
        
//         document.getElementById('discountedPrice').textContent = `Total Price: $${discountedPrice.toFixed(2)}`;
//     } else {
//         document.getElementById('discountedPrice').textContent = 'Invalid Promo Code';
//     }
// });




// common function
function productPrice(product) {
    const priceElement = document.getElementById(product);
    const priceElementString = priceElement.innerText;
    const priceElementNumber = parseFloat(priceElementString);
    return priceElementNumber;
}

function totalPriceSet (id, totalPrice){
    const productPriceElement = document.getElementById(id);
    productPriceElement.innerText = totalPrice;
}

function productList(productName){
    const productList = document.getElementById('product-list');
    const h2 = document.createElement("h2");
    const setList = productList.childElementCount;
    h2.innerText = `${setList + 1 } ${productName}`
    productList.appendChild(h2);
}