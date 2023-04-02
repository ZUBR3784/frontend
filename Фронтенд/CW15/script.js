// // методы localStorage -локальное хранилище
// // setItem,getItem,removeItem,clear
// clear()- удал ВСЕ данн(всегда пусто)

// // setItem- добавл данн(ключ,данные)
// localStorage.setItem('name','joe');
// localStorage.setItem('age',40);
// localStorage.setItem('gender','male');


// // getItem- берём данн(ключ)
// const name = localStorage.getItem('name')
// const nameH = document.createElement('h1');
// nameH.innerText= name;
// document.body.append(nameH);

// // removeItem- удал данн(ключ)
// localStorage.removeItem('gender')
// localStorage.removeItem('name')
// localStorage.removeItem('age')


// // task1
// const btn = document.querySelector(".toggle");
// btn.onclick = () => {
//   const value = localStorage.getItem("number");

//   if (+value === 1) {
//     localStorage.setItem("number", 0);
//   } else {
//     localStorage.setItem("number", 1);
//   }
// };



// task2
// Создать форму с полем ввода(input). 
// При отправке формы значение поля 
// ввода должно сохраниться в local storage.

// К прошлому примеру добавьте кнопку, 
// которая считывает значение из localStorage 
// и помещает в input.

// Добавить кнопку, которая очищает localStorage 
// от наших данных


const form=document.querySelector('#send');
const input=document.querySelector('#input');
const show = document.querySelector('#show')
const deleteBtn= document.querySelector('#delete')

form.onsubmit=(e)=>{
    e.preventDefault();
    localStorage.setItem("text", input.value);
    input.value=""
}

show.onclick=()=>{
    const text= localStorage.getItem("text")
    input.value=text

    // input.setAttribute('placeholder',text)
}
deleteBtn.onclick=()=>{
    // // localStorage.removeItem('text')
    // localStorage.setItem("text", '');
    localStorage.clear()
}

deleteBtn.classList.

