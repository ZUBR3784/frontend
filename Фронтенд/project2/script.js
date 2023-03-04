// form start
const form = document.querySelector("#product-form");
const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const list = document.querySelector("#product-list");
const objItems = localStorage.getItem('obj');



// массив с продуктами
const products = []; 




// провека данных в localStorage
if (objItems!=='') {
  const valueOfObjItems = JSON.parse(objItems); 
   
  for (let i = 0; i < valueOfObjItems.length; i++) {
    
    let item = document.createElement("li"); 
    item.innerText = `${valueOfObjItems[i].name} - ${valueOfObjItems[i].price}$`; 
    products.push(valueOfObjItems[i])
    
    list.append(item)
  }
}


// функция для добавляения продукта в массив

function newProduct(name, price) {
  products.push({ name: name, price: price });
}



// функция для обновления пунктов в списке
function updateList() {
  list.innerHTML = "";
  products.forEach((product) => {
    let item = document.createElement("li");
    item.innerText = `${product.name} - ${product.price}$`;
    list.append(item);
  });
}



// обработчик отправки формы
form.onsubmit = (e) => {
  e.preventDefault();
  const nameValue = nameInput.value;
  // const priceValue = +priceInput.value;
  const priceValue = parseFloat(priceInput.value);
  newProduct(nameValue, priceValue);
  nameInput.value = "";
  priceInput.value = "";
  updateList();
  writeLocalStorage(products)
};



function writeLocalStorage(value) {
    const stringObj=JSON.stringify(value);
    localStorage.setItem('obj',stringObj)
}


