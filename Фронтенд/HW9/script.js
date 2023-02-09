const btn = document.querySelector('#btn');
const foto = document.querySelector('#image');
const p = document.querySelector('#p');

    function unvisible(){
    if (p.textContent === 'Вот так выглядит рассвет....') {
        p.innerText = ' А вот так закат';
        img.setAttribute('src','media/закат.jpg' );
        btn.textContent='Ещё разок ;)'
    }else{
        p.innerText = 'Вот так выглядит рассвет....'
        img.setAttribute('src','media/rassvet.jpg' )
        }
    }
btn.onmousedown=(e)=>{
    btn.style.color='blue';

}
btn.onmouseout=(e)=>{
    btn.style.color='green';
    btn.textContent='Да ладно, может ещё поиграем????'
}
btn.onmouseover=(e)=>{
    btn.style.color='red';
    btn.textContent='Жми скорее, чего тянешь? :)))'
}
      
        