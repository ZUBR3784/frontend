
// Создайте массив с ссылками на картинки. 
// На основе этого массива формируется множество 
// маленьких картинок в верхней части интерфейса. 
// При нажатии на одну из картинок забирается ссылка 
// на эту картинку и в нижней части интерфейса 
// отображается в большем размере.
const array =[{src:'media/волк.jpg'},{src:'media/девушка.jpg'},{src:'media/коты.jpg'},{src:'media/пляж.jpg'},];
let div1 = document.createElement('div');
let div2 = document.createElement('div');
let bigImg = document.createElement('img');

for (let i = 0; i < array.length; i++) {

    let img = document.createElement('img');
    img.setAttribute('src',array[i].src);
    img.setAttribute('class','little-img');
    div1.append(img);

    img.onclick = ()=>{
        bigImg.setAttribute('src',array[i].src);
        bigImg.setAttribute('class','big-img');
        div2.append(bigImg);
    }
}
document.body.append(div1,div2);
