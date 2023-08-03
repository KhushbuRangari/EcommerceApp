let shoppingCart = document.querySelector('.shopping-cart')

console.log(shoppingCart);


document.querySelector('#cart-btn').onclick=()=>{
    shoppingCart.classList.toggle('active');
} 