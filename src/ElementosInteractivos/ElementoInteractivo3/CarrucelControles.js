import { useEffect, useState } from 'react';
import './Css/CarrucelControles.css';

// OPCIONES
// srcImagenes, arreglo con objetos [{src:'./ruta.jpg', title:'titulo imagen'},]
// relacionAspecto, puede ser carrucelControlesAncho, carrucelControlesAlto, carrucelControlesCuadrado
const CarrucelControles = ({srcImagenes, relacionAspecto = 'carrucelControlesAncho'})=>{
    const [arregloActual, setArregloActual] = useState([]);

    // Invertir el arreglo para que se muestre la primera
    useEffect(()=>{
        setArregloActual(srcImagenes.map((el)=>el));
    },[srcImagenes]);

    const imagenAnterior = ()=> {
        let arrTemp = arregloActual.map((el)=>el);
        for (let index = 0; index < arrTemp.length; index++) {
            if (index === 0) {
                arrTemp[index] = arregloActual[arrTemp.length-1];
            } else {
                arrTemp[index] = arregloActual[index-1];
            }
        }
        setArregloActual(arrTemp)
    }

    const imagenPosterior = () =>{
        let arrTemp = arregloActual.map((el)=>el);
        for (let index = 0; index < arrTemp.length; index++) {
            if (index === arrTemp.length-1) {
                arrTemp[index] = arregloActual[0];
            } else {
                arrTemp[index] = arregloActual[index+1];
            }
        }
        setArregloActual(arrTemp);
    }
    
    return (
        <div className={'carrucelControles ' + relacionAspecto}>
            { arregloActual.length > 0 &&
                <img className='imgEnCarrucel' src={arregloActual[0].src} alt={arregloActual[0].title} />
            }
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