async function fetchProductData(startChar, endChar) {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    console.log(data);
    // Search products based on alphabets
    function filterProductsByAlphabet(data, startChar, endChar) {
        return data.filter((product) => {
          const firstChar = product.products.brand.charAt(0).toUpperCase();
          return firstChar >= startChar && firstChar <= endChar;
        });
      }


    // Fetch product details from the dummy api
    function fetchProducts(productsCart) {
      let mainBody = document.querySelector(".card-container");
      console.log(data);

      let mainBodyInnerHtml = mainBody.innerHTML;
      console.log(mainBodyInnerHtml);

      productsCart.sort((a, b) => {
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

      productsCart.forEach((product) => {
        mainBody.innerHTML += `
                    <div class = "products-container">
                    <h2>Products Info App</h2>
                    <h4>Category: ${product.products.category}</h4>
                    <div class = "products-info">
                    <h4>Description: ${product.products.description}</h4>
                    <h4>Brand: ${product.products.brand}</h4>
                <img src = ${product.products.images.png} alt = "Product Picture" class = "images">      
                <h4>Price: ${product.products.price}</h4>
                </div>
                </div>
                `;
      });
    }
    const productsCart = filterProductsByAlphabet(data, startChar, endChar);
    fetchProducts(productsCart);
  } catch (error) {
    console.error("Error Fetching the data.........", error);
  }
}

let btn1 = document.querySelector(".button");
btn1.addEventListener("click", () => {
    fetchProductData("A", "H");
})
let btn2 = document.querySelector(".button");
btn2.addEventListener("click", () => {
    fetchProductData("I", "M");
})

let btn3 = document.querySelector(".button");
btn3.addEventListener("click", () => {
    fetchProductData("N", "S");
})

let btn4 = document.querySelector(".button");
btn4.addEventListener("click", () => {
    fetchProductData("U", "Z");
})

// fetchProductData();
