let shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#cart-btn").onclick = () => {
  shoppingCart.classList.toggle("active");
};

let mainBody = document.querySelector(".card-container");
let dataGlobal = [];

async function fetchProductData(startChar, endChar) {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    dataGlobal = data.products.filter((product) => {
      const firstChar = product.brand.charAt(0).toUpperCase();
      return firstChar >= startChar && firstChar <= endChar;
    });

    dataGlobal.sort((a, b) => {
      const brandA = a.brand.toUpperCase();
      const brandB = b.brand.toUpperCase();
      if (brandA < brandB) {
        return -1;
      }
      if (brandA > brandB) {
        return 1;
      }
      return 0;
    });

    console.log(dataGlobal);
    productsFetch();
  } catch (error) {
    console.error("Error Fetching the data.........", error);
  }
}

function productsFetch() {
  mainBody.innerHTML = "";
  dataGlobal.map((product) => {
    mainBody.innerHTML += 
    // `
    //       <div class="products-container">
    //         <h3>Products Info App</h3>
    //         <h4>id: ${product.id}</h4>
    //         <h4>Category: ${product.category}</h4>
    //         <div class="products-info">
    //           <img src="${product.thumbnail}" alt="Product Picture" class="images">      
    //           <h4>Title: ${product.title}</h4>
    //           <h4>Description: ${product.description}</h4>
    //           <h4>Brand: ${product.brand}</h4>
    //           <h4>Price: Rs.${product.price}</h4>
    //         </div>
    //       </div>
    //     `;
    `<div class="card " style="font-size: 10px;width: 240px; height: 360px;
         margin: 6px; border: 2px solid  rgb(21, 37, 82)  box-shadow: 10px 3px 15px #464444;" id="${product.title}">
        <img src="${product.thumbnail}" style="height: 100px; width: 100%" class="card-img-top" alt="...">
        <div class="card-body align-self-center" >
          <h5 class="card-title" >${product.title}</h5>
          <p class="card-text text-start" >Desc: ${product.description}</p>
          <p class="card-text fs-6 text-start" >Category: ${product.category}</p>
          <p class="card-text text-start" >Price: Rs.${product.price}</p>
        </div>
        <a href="#" class="btn btn-outline-primary">Add to Cart</a>
      </div>
`
  });
}

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const startChar = button.getAttribute("data-start");
    const endChar = button.getAttribute("data-end");
    fetchProductData(startChar, endChar);
  });
});

// Fetch data initially for the entire range (A-Z)
fetchProductData("A", "Z");
