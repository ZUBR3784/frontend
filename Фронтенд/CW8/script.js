// // // object style
// const elem = document.getElementById('about');
// // elem.style.color='red';
// // elem.style.fontSize = '40px';

// // sccText
// elem.style.cssText = 'color: blue; font-size: 30px'



// const div = document.createElement('div');
// div.style.border = '1px solid purple';
// div.style.width = '100px';
// div.style.height = '100px';
// document.body.append(div);

// // 
// // onmousedown,onmouseover,onmouseout
// div.onmouseover= () =>{
//     div.style.backgroundColor ='yellow'
// }
// div.onmouseout= () =>{
//     div.style.backgroundColor ='white'
// }




// Написать цикл, который создает множество div-ов 
// c цветами от rgb(128, 128, 0) до rgb(128, 128, 255). 
// У дивов цвет должен меняться с шагом 5.
// for (let i = 0; i <= 255; i+=5) {
//     let div = document.createElement('div');
//     div.style.border = '1px solid black';
//     div.style.width = '10px';
//     div.style.height = '10px';
    
    
//     // div.style.backgroundColor =`rgb(128, 128,${i} )` 
//     document.body.append(div)

// div.onmouseover= () =>{
//     div.style.backgroundColor =`rgb(128, 128,${i} )` ;
    
// }
// div.onmouseout= () =>{
//     div.style.backgroundColor ='white';
// }
// div.onclick = () =>{
//     // div.style.marginLeft ='10px';
//     div.style.display ='inline-block'
// }
// }



// // classList

// classList.add('start');
// classList.remove('start')
// classList.replace('start', 'end') /*заменяет стили класса старт на енд */

// const div = document.createElement('div');
// document.body.append(div);
// for (let i = 0; i < 10; i++) {
//     let p = document.createElement('p');
//     p.innerHTML=i;
//     div.append(p);
//     p.onclick = ()=>{
//         // if (p.classList[0] === "active") {
//         //     p.classList.remove('active')
//         // }else{
//         //     p.classList.add('active')
//         // }


//         // toggle - second variant
//         // p.classList.toggle('active', i>10);

//     }
// }

// translation
const words = [
    {
      ru: "собака",
      en: "dog",
    },
    {
      ru: "кошка",
      en: "cat",
    },
    {
      ru: "стол",
      en: "table",
    },
    {
      ru: "телефон",
      en: "telephone",
    },
  ];

// // first variant

// for (let i = 0; i < words.length; i++) {
//     let div = document.createElement('div');
//     let p = document.createElement('p');
//     p.innerText = words[i].en;
//     div.append(p)
//     document.body.append(div)
//     div.onclick = () =>{
//         if (p.textContent === words[i].en) {
//            p.innerHTML = words[i].ru 
//         }else{
//             p.innerHTML = words[i].en 
//         } 
//     }
// }



// sec variant

for (let i = 0; i < words.length; i++) {
    let div = document.createElement('div');
    let pRu = document.createElement('p');
    pRu.innerText = words[i].ru;
    pRu.classList.add('hide')

    let pEn = document.createElement('p');
    pEn.innerText = words[i].en;
    pEn.classList.add('show')
    
    div.append(pRu, pEn)
    document.body.append(div)

    div.onclick=()=>{
        if (pEn.classList[0] === 'show') {
            pEn.classList.replace('show', 'hide')
            pRu.classList.replace('hide', 'show')
            
        } else {
            pEn.classList.replace('hide', 'show')
            pRu.classList.replace('show', 'hide')
            
        }
    }
}
