const root = document.querySelector("#root");
const images = [
    'https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg',
    'https://phonoteka.org/uploads/posts/2021-05/1622404546_17-phonoteka_org-p-peizazh-v-stile-piksel-art-krasivo-26.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg',
    'https://oir.mobi/uploads/posts/2021-06/1622803069_29-oir_mobi-p-peizazh-dlya-nachinayushchikh-priroda-kras-30.jpg',
    'https://static.insales-cdn.com/images/products/1/1609/213943881/lg100.jpg'
];

let offset =  0;

const container = document.createElement("div");
container.classList.add("container");

const pictures = document.createElement("div");
pictures.classList.add("pictures");

const btns = document.createElement("div");
btns.classList.add("btns");

const btnsChild = btns.children;

root.append(container);
container.append(pictures, btns);

for (let i = 0; i < images.length; i++) {
    const image = document.createElement("div");
    image.classList.add("picture");
    image.style.backgroundImage = `url(${images[i]})`;
    pictures.append(image);
}

let slideInd = 0;
for (let i = 0; i < images.length; i++) {
    const btn = document.createElement('button');
    btns.append(btn);
    btnsChild[0].classList.add('btnActive');
    
    btn.onclick = () => {
        slideInd = i;
        pictures.style.left = `${slideInd*500*-1}px`;
        offset = slideInd*500;
        changeActive();
        btn.classList.add('btnActive');
    }

function changeActive() {
     for (let i = 0; i < btnsChild.length; i++) {
            btnsChild[i].classList.remove('btnActive');  
        }
        btnsChild[offset/500].classList.add('btnActive');
    }
}
// для кнопки вперёд
    document.querySelector('.slider-next').addEventListener('click',function(){
    offset+=500;
    if (offset>2000) {
        offset=0;
    }
    pictures.style.left= -offset +'px';
    changeActive();
   
})

    // для кнопки назад
    document.querySelector('.slider-prev').addEventListener('click',function(){
        offset-=500;
        if (offset<0) {
            offset=2000;
        }
        pictures.style.left= -offset +'px';
        changeActive()
    })




