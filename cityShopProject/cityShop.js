//for shopping cart toggle
let shoppingCart = document.querySelector('.shopping-cart')
document.querySelector('#cart-btn').onclick=()=>{
    shoppingCart.classList.toggle('active');
} 

let content = document.querySelector(".content");
let showProductList = document.querySelector("#list1");
let carousel1 = document.querySelector("#carousel1")
let category = document.querySelector(".dropdown-menu")
var dataGlobal = [];
var categoryData = [];

async function getData() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    dataGlobal =data.products;
    const newar = [];

    //----get distinct category ----
    for (let i = 0; i < dataGlobal.length; i++) {
        const element = dataGlobal[i].category;
         newar.push(element)
      }
     // -- distinct category --
     categoryData = newar.filter((ele, i, ar) => { return ar.indexOf(ele) === i })
    //  console.log(categoryData);
}
async function fetchproducts() {
    content.innerHTML = '';
    carousel1.innerHTML ='';
    dataGlobal.map((element)=>{
        showProductList.innerHTML += `<div class="card " style="font-size: 10px;width: 240px; height: 280px;
         margin: 6px; border: 2px solid  rgb(21, 37, 82)  box-shadow: 10px 3px 15px #464444;" id="${element.title}">
        <img src="${element.thumbnail}" style="height: 100px; width: 100%" class="card-img-top" alt="...">
        <div class="card-body align-self-center" >
          <h5 class="card-title" >${element.title}</h5>
          <p class="card-text" >${element.description}</p>
        </div>
        <a href="#" class="btn btn-outline-primary">Add to Cart</a>
      </div>
`
    })
}
async function loadCategory() {
    category.innerHTML='';
    categoryData.forEach(element => {
        category.innerHTML += ` 
    <li><a class="dropdown-item" href="#">${element}</a></li>
  `
    });

}




