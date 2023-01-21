// // Как найти?…
// // Таблицу с id="age-table".
// // Все элементы label внутри этой таблицы (их три).
// // Первый td в этой таблице (со словом «Age»).
// // Форму form с именем name="search".
// // Первый input в этой форме.
// // Последний input в этой форме.

// let table = document.querySelector("#age-table");
// let allElemOfT = document.querySelectorAll("label");
// let firstTdInT = document.querySelector("td");
// let form = document.getElementsByName('search');
// let firstInput = document.querySelector('input');
// let lastInput = document.querySelector('input');
// lastInput[lastInput.length-1]





// // Написать скрипт, который выводит списки с товарами в интерфейс (на основе массива с объектами).
// // Внизу каждого списка выводится итоговая сумма товара. 
// // А так же в самом конце выводится итоговая сумма и количество всех товаров.

// const array = [

//     {
//     title: "BMW",
//     price: "40000",
//     count: "15"
//     },
//     {
//     title: "Toyota",
//     price: "20000",
//     count: "13"
//     },
//     {
//     title: "Ford",
//     price: "30000",
//     count: "20"
//     },
//     {
//     title: "Chevrolet",
//     price: "60000",
//     count: "9"
//     },
//     {
//     title: "Volkswagen",
//     price: "30000",
//     count: "13"
//     },
//     ]

//     let allCost=0;
//     let numOfGoods=0;
//     for (let i = 0; i < array.length; i++) {
//         let carList = document.createElement('ul');
//         let titles = document.createElement('li');
//         titles.innerText=array[i].title;
//         let prices = document.createElement('li');
//         prices.innerText= array[i].price;
//         let counts = document.createElement('li');
//         counts.innerText= array[i].count;
//         let fullPrice = document.createElement('li');
//         fullPrice.innerText= +array[i].price* +array[i].count;
//         carList.append(titles,prices,counts,fullPrice);
//         document.body.append(carList);
//         allCost+=+array[i].price* +array[i].count;
//         numOfGoods+= +array[i].count;
//     }
//     let allCostP=document.createElement('p');
//     allCostP.innerText="Общая стоимость всех машин нашего магазина: "+allCost +"$.";
//     let numOfGoodsP=document.createElement('p');
//     numOfGoodsP.innerText="Общее количество машин в нашем магазине: "+numOfGoods + "штук.";
//     document.body.append(allCostP,numOfGoodsP);





// // // 2)Напишите скрипт, который выводит в интерфейс следующую 
// // // таблицу(html должен быть пустым, все элементы создаются строго с помощью скриптов):

// const values = [
//     {name:'Full name', position:'Position', salary:'Salary'},
//     {name:'Bill Gates', position:'Founder Microsoft', salary:'1000$'},
//     {name:'Steve Jobs', position:'Founder Apple', salary:'1200$'},
//     {name:'Larry Page', position:'Founder Google', salary:'1100$'},
//     {name:'Mark Zuckeberg', position:'Founder Facebook', salary:'1300$'},
// ]

// let table = document.createElement('table');

// for (let i = 0; i < values.length; i++) {
//     let tr = document.createElement('tr');
//     let td = document.createElement('td');
//     td.innerHTML = i === 0 ? '№' : i;
//     tr.style
//     tr.append(td);
//     td = document.createElement('td');
//     td.innerHTML = values[i].name;
//     tr.append(td);
//     td = document.createElement('td');
//     td.innerHTML = values[i].position;
//     tr.append(td);
//     td = document.createElement('td');
//     td.innerHTML = values[i].salary;
//     tr.append(td);
//     table.append(tr)
// }
// document.body.append(table);