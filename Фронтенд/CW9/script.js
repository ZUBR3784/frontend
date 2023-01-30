// const forma = document.querySelector('form');
// const btn = document.querySelector('button');
// const nameK = document.querySelector('#name');

// // // first var with btn
// // btn.onclick = (e) =>{
// //     // preventDefault- Для отмены
// //     e.preventDefault();
// //     alert('Я работаю');
// // }


// // input value
// // sec var
// forma.onsubmit= (e)=>{
//     e.preventDefault();
//     alert(nameK.value);

// }


// project
// const form = document.querySelector('.form');
// const title = document.querySelector('#title');
// const price = document.querySelector('#price');
// const sectionProducts = document.querySelector('#products')

// const products=[];

// form.onsubmit = (e) =>{
//     e.preventDefault();
//     products.push({
//         title: title.value,
//         price: price.value,
//     })

//     createNode(title.value,price.value)
   
//     title.value = "";
//     price.value = "";
// }

// function createNode(title, price) {
//     const div = document.querySelector('div');
//     div.classList.add('product')
//     const titleP = document.querySelector('p');
//     const priceP = document.querySelector('p');

//     titleP.innerText = title
//     priceP.innerText = price

//     div.append(titleP, priceP)
//     sectionProducts.append(div)
// }






// const form = document.querySelector(".form");
// const title = document.querySelector("#title");
// const price = document.querySelector("#price");
// const sectionProducts = document.querySelector("#products");

// const products = [];

// form.onsubmit = (e) => {
//   e.preventDefault();
//   products.push({
//     title: title.value,
//     price: price.value,
//   });

//   newProducts();

//   title.value = "";
//   price.value = "";
// };

// function createNode(title, price) {
//   let div = document.createElement("div");
//   div.classList.add("product");

//   let titleP = document.createElement("p");
//   let priceP = document.createElement("p");

//   titleP.innerText = title;
//   priceP.innerText = price;

//   div.append(titleP, priceP);
//   sectionProducts.append(div);
// }

// function newProducts(){
//     sectionProducts.innerHTML = "";
//     for (let i = 0; i < products.length; i++) {
//         createNode(products[i].title, products[i].price)
        
//     }
// }



