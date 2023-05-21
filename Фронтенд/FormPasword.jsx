import React from 'react'

function FormPasword() {
    const checkPasword = (e) => {
        e.preventDefault();
        const inputContent = document.querySelector('#inp').value;
        
        if (inputContent.length>=8) {
            const p = document.createElement('p');
            p.innerText=`Пароль: ${inputContent} сложный`;
            document.querySelector('#root').append(p)
            
        } else if (inputContent.length>=4){
            const p = document.createElement('p');
            p.innerText=`Пароль: ${inputContent} средний`;
            document.querySelector('#root').append(p)
        } else{
          
            const p = document.createElement('p');
            p.innerText=`Пароль: ${inputContent} слабый`;
            document.querySelector('#root').append(p)
        }
       
    }
  return (<>
    <form onSubmit={checkPasword}>
        <input id='inp' type="text" name='title' placeholder='Введите пароль' required />
        <button type='submit'>Проверить надежность пароля</button>
    </form>
    
    </>
    
  )
}

export default FormPasword