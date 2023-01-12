import { useEffect, useState } from 'react';
import './Css/Carrucel.css';
const Carrucel = ({milisegundosIntervalo, srcImagenes})=>{
    const [imagenesOrdenadas, setImagenesOrdenadas] = useState([]);

    // Invertir el arreglo... reverse() no funciona
    useEffect(()=>{
        let arrTemp = [];
        srcImagenes.forEach(element => {
            arrTemp.unshift(element);
        });
        setImagenesOrdenadas(arrTemp);
    },[srcImagenes]);

    useEffect(()=>{
        if (imagenesOrdenadas.length > 0) {
            // Efecto del traslado del carrucel
            let arrTemp = imagenesOrdenadas.map((el)=>el);
            setTimeout(() => {
                for (let index = 0; index < arrTemp.length; index++) {
                    if (index === 0) {
                        arrTemp[index] = imagenesOrdenadas[arrTemp.length-1];
                    } else {
                        arrTemp[index] = imagenesOrdenadas[index-1];
                    }
                }
                setImagenesOrdenadas(arrTemp);
            }, milisegundosIntervalo);
        }
    },[imagenesOrdenadas]);

    return (
        <div className='carrucel'>
            { imagenesOrdenadas.map( (img) => 
                    <img src={img.src} key={img.src} alt={img.title} />
            )}
        </div>
    )
}
export default Carrucel;