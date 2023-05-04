// // 2)Создать текстовый слайдер на основе следующего массива(текст поменяйте на свой вкус).

const arr =[
  {
    id: '1',
    title: "1О компании",
    text: '1Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas pariatur enim in reprehenderit. Quae, itaque quaerat. Sapiente qui harum velit cum repellat nihil ratione cumque? Aperiam vel provident iusto pariatur.'
  },
  {
    id: 2,
    title: "2О компании",
    text: "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas pariatur enim in reprehenderit. Quae, itaque quaerat. Sapiente qui harum velit cum repellat nihil ratione cumque? Aperiam vel provident iusto pariatur.",
  },
  {
    id: 3,
    title: "3О компании",
    text: "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas pariatur enim in reprehenderit. Quae, itaque quaerat. Sapiente qui harum velit cum repellat nihil ratione cumque? Aperiam vel provident iusto pariatur.",
  },
  {
    id: 4,
    title: "4О компании",
    text: "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas pariatur enim in reprehenderit. Quae, itaque quaerat. Sapiente qui harum velit cum repellat nihil ratione cumque? Aperiam vel provident iusto pariatur.",
  },
  {
    id: 5,
    title: "5О компании",
    text: "5Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas pariatur enim in reprehenderit. Quae, itaque quaerat. Sapiente qui harum velit cum repellat nihil ratione cumque? Aperiam vel provident iusto pariatur.",
  },
  {
    id: 6,
    title: "6О компании",
    text: "6Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas pariatur enim in reprehenderit. Quae, itaque quaerat. Sapiente qui harum velit cum repellat nihil ratione cumque? Aperiam vel provident iusto pariatur.",
  },
];

const sliderLine = document.querySelector('.slider-line');
// const sliderLine =  document.createElement('div');

for (let i = 0; i < arr.length; i++) {
   
    const objOfArr = document.createElement('div');
    objOfArr.classList.add('containers');
    
    const h1 = document.createElement('h1');
    h1.innerText = arr[i].id;
    
    const h2 = document.createElement('h2');
    h2.innerText = arr[i].title;
    
    const p = document.createElement('p');
    p.innerText = arr[i].text;
   
    sliderLine.append(objOfArr);
    objOfArr.append(h1,h2,p);
}





let offset = 0; //смещение от левого края

document.querySelector('.slider-next').addEventListener('click',function(){
    offset+=300;//смещаем на ширину одной картинки
    if (offset>1500) {/*не даёт сделать отступ больше чем есть картинок =(сум ширины карт за окном) */
        offset=0;
    }
    sliderLine.style.left= -offset +'px';
    
})

// для кнопки назад
document.querySelector('.slider-prev').addEventListener('click',function(){
    offset-=300;//смещаем на ширину одной картинки
    if (offset<0) {/*не даёт сделать отступ больше чем есть картинок =(сум ширины карт за окном) */
        offset=1500;
    }
    sliderLine.style.left= -offset +'px';
    
})
