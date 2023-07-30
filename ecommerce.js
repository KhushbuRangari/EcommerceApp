//  Promises ,  where js provide you with sepcial method with three states
// pending,resolved, rejected

// ES 6 introduced 
// promises necessary to api call
// https://dummyjson.con/products


// handle the promise of fetch using asynch
// fetch by default a get request

let mainbody = document.querySelector('.main')
   
async function fetchData(){
    
    let response = await fetch('https://dummyjson.com/products')
    // we are pasing the respone of fetch in a json format
    // since it is promise type function we are actualy 
    let data = await response.json();
    //  console.log(data.products);

    // select the main body
 let mainbodyinnerHtml = mainbody.innerHTML;
    // console.log(mainbodyinnerHtml);


    // push data in card structure

    data.products.map((element)=>{
        mainbody.innerHTML +=`  <div class="card">
        <div class="header" style="height: 30%;">Product Name ${element.title}</div>
        <div class="title"></div>
        <div class="description">${element.description}</div>
        <div class="image" style="height: 70%;"> <img src="    ${element.thumbnail}" alt=""></div></div>

    </div>`

    console.log(element.title);
    })
 
}


// format of card 
// header you have to have search box ( seraching based on title name)
// title,brand,image,button

