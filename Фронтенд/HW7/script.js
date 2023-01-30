// 1)К сегодняшней форме добавьте кнопку. При клике на кнопку 
// с помощью alert выводите итоговую сумму всех товаров.
// 2)Создайте input для ввода пароля. Рядом с input-ом 
// добавьте так же кнопку. При первом клике на кнопку текст 
// должен скрыться(вместо букв звезодчки, либо точки), 
// а при повторном нажатии должен появиться обратно.


const form = document.querySelector(".form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const sectionProducts = document.querySelector("#products");
const passwordInput = document.querySelector("#password");
let passwordBtn = document.querySelector('#password-buttom')





const products = [];

form.onsubmit = (e) => {
  e.preventDefault();
  products.push({
    title: title.value,
    price: price.value,
  });

  newProducts();

  title.value = "";
  price.value = "";
};

function createNode(title, price) {
  let div = document.createElement("div");
  div.classList.add("product");

  let titleP = document.createElement("p");
  let priceP = document.createElement("p");

  titleP.innerText = title;
  priceP.innerText = price;

  div.append(titleP, priceP);
  sectionProducts.append(div);
}

function newProducts(){
    sectionProducts.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        createNode(products[i].title, products[i].price)
        
    }
}

function summa() {
    let sumOFAll = 0
    for (let i = 0; i < products.length; i++) {
        sumOFAll+=+products[i].price
    }
    alert('Общая сумма товаров равна '+sumOFAll+' $')
    
}



function changeVisible() {
    if (passwordInput.getAttribute('type')==='password') {
      passwordInput.setAttribute('type','text')
      alert('Сохраните в тайне ваш пароль!!')
    }else{
      passwordInput.setAttribute('type','password')
    }
}
