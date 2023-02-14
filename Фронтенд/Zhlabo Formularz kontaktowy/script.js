const form = document.querySelector('#form');
const btn = document.querySelector('#submit-btn');
btn.onclick = function() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.querySelector('.input-names'));
        form.append('name', document.querySelector('.input-surnames'));
        form.append('name', document.querySelector('.input-streets'));
        form.append('name', document.querySelector('.input-nrsHome'));
        form.append('name', document.querySelector('.input-nrAparatments'));
        form.append('name', document.querySelector('.input-postcode'));
        form.append('name', document.querySelector('.input-sity'));
        form.append('name', document.querySelector('.input-div-countries'));
        form.append('name', document.querySelector('.select-div-countries'));
        fetch('url', {
            method: 'POST',
            body: JSON.stringify(form)
        }).then(res => {
            console.log(res);
        })
    })
  }



   




let i = 1;
    for(let li of carousel.querySelectorAll('li')) {
      li.style.position = 'relative';
      li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
      i++;
    }
    
    
let width = 320; 
let count = 4; 
    
let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');
    
let position = 0;
carousel.querySelector('.prev').onclick = function() {
      position += width * count;
      position = Math.min(position, 0)
      list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.next').onclick = function() {
      position -= width * count;
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };