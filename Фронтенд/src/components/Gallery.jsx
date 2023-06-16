import React,{useEffect, useState} from 'react'
import axios from 'axios'



   
 
function Gallery() {
    const [fotos,setFotos] = useState([])
        
        useEffect(()=>{
            async function getFotos(){
                 try {
                    const getFoto = await axios.get('https://jsonplaceholder.typicode.com/photos');
                    setFotos(getFoto.data)
                    
                    if (getFoto.status !== 200){
                        throw new Error('Такого фото нет');
                    }
                    
                    } catch (error) {
                        console.error(error);
                }
            }
            getFotos()
            
        },[])

  return (
    <div>
        {fotos.map((foto) => (
        <img key={foto.id} src={foto.url} />
      ))}
        
    </div>
  );
}

export default Gallery