import { useEffect, useState } from 'react';
import './Css/Carrucel.css';

// OPCIONES
// milisegundosIntervalo, 1000 es un segundo
// srcImagenes, arreglo con objetos [{src:'./ruta.jpg', title:'titulo imagen'},]
// relacionAspecto, puede ser carrucelAncho, carrucelAlto, carrucelCuadrado
const Carrucel = ({milisegundosIntervalo=1000, srcImagenes, relacionAspecto = 'carrucelAncho'})=>{
    const [arregloActual, setArregloActual] = useState([]);

    // Invertir el arreglo para que se muestre la primera
    useEffect(()=>{
        setArregloActual(srcImagenes.map((el)=>el));
    },[srcImagenes]);

    //Efecto del traslado del carrucel
    useEffect(()=>{
        setTimeout(() => {
            let arrTemp = arregloActual.map((el)=>el);
            for (let index = 0; index < arrTemp.length; index++) {
                if (index === arrTemp.length-1) {
                    arrTemp[index] = arregloActual[0];
                } else {
                    arrTemp[index] = arregloActual[index+1];
                }
            }
            setArregloActual(arrTemp);
        }, milisegundosIntervalo);
    },[arregloActual, milisegundosIntervalo]);

    return (
        <div className={relacionAspecto}>
            { arregloActual.length > 0 &&
                <img className='imgEnCarrucel' src={arregloActual[0].src} alt={arregloActual[0].title} />
            }
        </div>
    )
}
export default Carrucel;