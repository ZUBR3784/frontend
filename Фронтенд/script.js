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
const main = document.querySelector('main')
const sliderLine = document.querySelector('.slider-line');

for (let i = 0; i < arr.length; i++) {
    const objOfArr = document.createElement('div');
    objOfArr.classList.add('containers');
    const btn = document.createElement('button');
    btn.innerText = arr[i].id;
    btn.onclick=()=>{
      sliderLine.style.left = (-arr[i].id +1) * 300 + 'px'
    }
    
    
    const h2 = document.createElement('h2');
    h2.innerText = arr[i].title;
    
    const p = document.createElement('p');
    p.innerText = arr[i].text;
   
    sliderLine.append(objOfArr);
    objOfArr.append(h2,p);
    main.append(btn)
}


let offset = 0; //смещение от левого края
btn.addEventListener('click',function(){
  alert("hi")
  sliderLine.style.left = arr[i].id * 300 + 'px'

    })

