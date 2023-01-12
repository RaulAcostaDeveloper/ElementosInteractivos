import { useEffect, useState } from 'react';
import './Css/CarrucelControles.css';
const CarrucelControles = ({milisegundosIntervalo, srcImagenes})=>{
    const [imagenesOrdenadas, setImagenesOrdenadas] = useState([]);

    // Invertir el arreglo... reverse() no funciona
    useEffect(()=>{
        let arrTemp = [];
        srcImagenes.forEach(element => {
            arrTemp.unshift(element);
        });
        setImagenesOrdenadas(arrTemp);
    },[srcImagenes]);


    const imagenAnterior = ()=> {
        let arrTemp = imagenesOrdenadas.map((el)=>el);
        for (let index = 0; index < arrTemp.length; index++) {
            if (index === arrTemp.length-1) {
                arrTemp[index] = imagenesOrdenadas[0];
            } else {
                arrTemp[index] = imagenesOrdenadas[index+1];
            }
        }
        setImagenesOrdenadas(arrTemp);
    }
    const imagenPosterior = () =>{
        let arrTemp = imagenesOrdenadas.map((el)=>el);
        for (let index = 0; index < arrTemp.length; index++) {
            if (index === 0) {
                arrTemp[index] = imagenesOrdenadas[arrTemp.length-1];
            } else {
                arrTemp[index] = imagenesOrdenadas[index-1];
            }
        }
        setImagenesOrdenadas(arrTemp);
    }
    return (
        <div className='carrucelControles'>
            { imagenesOrdenadas.map( (img) => 
                    <img className='imgEnCarrucel' src={img.src} key={img.src} alt={img.title} />
            )}
            <button className='leftButton' onClick={()=>imagenAnterior()}>
                <img src='./left-arrow.png' alt='Left button'/>
            </button>            
            <button className='rightButton' onClick={()=>imagenPosterior()}>
                <img src='./right-arrow.png' alt='Right button'/>
            </button>
        </div>
    )
}
export default CarrucelControles;