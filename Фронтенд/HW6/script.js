// // Создайте параграф и одну кнопку. 
// // Добавьте стили для этих элементов используя javascript.
// // Сделайте тaк, чтобы при клике на кнопку исчезал параграф, 
// // а при повторном клике появлялся обратно.

    let p = document.querySelector('p');
    function unvisible(){
    if (p.classList[0] === 'show') {
        p.classList.remove('show')
    }else{
        p.classList.add('show')
        }
    }
    

//     // Создайте массив, содержащий названия цветов. 
//     // На основе этого массива создайте список. 
//     // При наведении на один из пунктов должен поменяться цвет 
//     // фона всего документа на данный цвет.

//     const array =['red','blue','green','black','white']
//     const doc = document.body
//     for (let i = 0; i < array.length; i++) {
//         let pColor =document.createElement('p')
//         pColor.innerHTML=array[i]
//         pColor.style.color=array[i]
//         doc.append(pColor)

//         pColor.onmouseup=()=>{
//             doc.style.background=array[i]

//         }
        
//     }


    // // // 3)Создайте массив с Вашими любимыми фильмами. 
    // // // Напишите цикл, который создает заголовки на основе 
    // // // этого массива. При клике на заголовок внизу появляется 
    // // // краткое описание данного фильма.

    // const array2 = [
    //     {title:'Alone at home',
    //     src:'media/од.jpg',
    //     description:'Американское семейство отправляется из Чикаго в Европу, но в спешке сборов бестолковые родители забывают дома... одного из своих детей.'},
        
    //     {title:'Alone at home 2',
    //     src:'media/одд.jpg',
    //     description:'Самый маленький герой Америки устраивает большой переполох в Нью-Йорке! Кевин МакКалистер вернулся! Но теперь он один не дома, а в Нью-Йорке и у него достаточно денег и кредитных карточек'},

    //     {title:'Spider-man',
    //     src:'media/см.jpg',
    //     description:'Питер Паркер – обыкновенный школьник. Однажды он отправился с классом на экскурсию, где его кусает странный паук-мутант.'},

    //     {title:'Kasino',
    //     src:'media/кас.jpg',
    //     description:'Никто не может сравниться с Сэмом Ротстином. Никто не умеет зарабатывать деньги, как он. Никто не умеет работать так самоотверженно и аккуратно, как трудяга Сэм. За свои неоспоримые достоинства Ротстин получил кличку Ас. И именно поэтому боссы мафии решили поручить Асу заправлять огромным шикарным казино в Лас-Вегасе. А чтобы Сэму никто не мешал работать, мафиози отправили вслед за Асом друга детства Ротстина - Никки Санторо, отпетого бандита и безжалостного головореза.'},];

    // let divM = document.createElement('div')
   
    // for (let i = 0; i < array2.length; i++) { 
    //     let div1 = document.createElement('div');

    //     let img = document.createElement('img');
    //     img.setAttribute('src',array2[i].src);
        
    //     let h2 = document.createElement('h2');
    //     h2.innerText=array2[i].title;
        
    //     h2.onclick=()=>{
    //         let p = document.createElement('p')
    //         p.innerText= array2[i].description;
    //         div1.append(p)
    //     }
    //     div1.append(h2,img,)
    //     divM.append(div1)
    // }
    // document.body.append(divM)







    // const array =[{src:'media/од.jpg'},{src:'media/одд.jpg'},{src:'media/см.jpg'},{src:'media/кас.jpg'},];
    // let div1 = document.createElement('div');
    // let div2 = document.createElement('div');
    // let bigImg = document.createElement('img');
    
    // for (let i = 0; i < array.length; i++) {
    //     let h2 = document.createElement('h2');
    //         h2.innerText='ghjfgyk';
    //         div1.append(h2)
    
    //     let img = document.createElement('img');
    //     img.setAttribute('src',array[i].src);
    //     img.setAttribute('class','little-img');
    //     div1.append(img,h2);
    
    //     img.onclick = ()=>{
    //         bigImg.setAttribute('src',array[i].src);
    //         bigImg.setAttribute('class','big-img');
    //         div2.append(bigImg);
    //     }
    // }
    // document.body.append(div1,div2);





// // 4)Клавиатура на Вашем экране! Создайте кнопки(button) 
// // со всеми английскими буквами. Застилизуйте их так, 
// // чтобы на экране была копия клавиатуры (только английские буквы, 
// // цвета и размеры кнопок выбирайте на свой вкус).
// // 5)Доработайте предыдущий скрипт так, чтобы при нажатии на 
// // кнопку ,сверху видеть буквы, на которые нажимает 
// // пользователь(имитация клавиатуры). 
// // Подсказка: можете использовать параграф.

// const p = document.querySelector('#text');
// const btns = document.querySelectorAll('button');
// console.log(btns);
// for(let btn of btns){
//     btn.addEventListener('click',(e)=>{
//         if(e.target.textContent==='удалить'){
//             p.innerText = p.textContent.slice(0,-1)
//         }else{
//            p.innerText+=e.target.textContent 
//         }  
//         })
//     }


    
    


 







    
    


// печатать буквы в параграфе

// let pContent = p.textContent;
// addEventListener("onclick", (event)=> {
// pContent+=event.key;
// p.innerText=pContent
// } )









// let button = document.querySelectorAll('.button');
// let p = document.querySelector('#text');
// let clear = document.createElement('p');
// clear.innerText='Delete'

// for (let button in button) {
//   button.onclick = function () {
//   p.textContent = p.textContent + key.textContent;
//   }
// };

// clear.onclick = function () {
//   p.textContent = '';
// };