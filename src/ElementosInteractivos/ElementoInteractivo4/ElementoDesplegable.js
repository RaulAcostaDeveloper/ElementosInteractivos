import { useEffect, useState } from 'react';
import './Css/ElementoDesplegable.css';
const ElementoDesplegable = ({titulo, tiempo, animado=false, children})=>{
    const [mostrarContenido, setMostrarContenido] = useState(true);
    const [idActualContenido, setIdActualContenido] = useState(Math.floor(Math.random() * 1000));
    useEffect(()=>{
        let contenido = document.getElementById(idActualContenido+'contenido');
        contenido.style.display='none';
    },[]);
    const toggleContenido = () => {
        // Obtiene el elemento actuál
        let contenido = document.getElementById(idActualContenido+'contenido');
        if (mostrarContenido) {
            setMostrarContenido(false);
            contenido.style.display='block';
            // El elemento.clienteHeight es la altura natural del elemento
            if (animado) {
                contenido.animate([
                    { height: '0px', color:'transparent' },
                    { height: `${contenido.clientHeight}px`, color:'rgb(13, 13, 13)' },
                ], {
                    duration: tiempo,
                }); 
            }
        } else {
            setMostrarContenido(true);            
            if (animado) {
                contenido.animate([
                    { height: `${contenido.clientHeight}px`, color:'rgb(13, 13, 13)' },
                    { height: '0px', color:'transparent' },
                ], {
                    duration: tiempo,
                }); 
                setTimeout(() => {
                    contenido.style.display='none';
                }, tiempo);
            } else {
                contenido.style.display='none';
            }
        }
    }
    return (
        <div className="elementoDesplegable">
            <div className="titulo" onClick={()=>toggleContenido()}>
                <img src={mostrarContenido?'./right-arrow-bold.png':'./down-arrow-bold.png'}/>
                {titulo}
            </div>
            <div className="contenido" id={idActualContenido + 'contenido'}>
                {children}
            </div>
        </div>
    )
}
export default ElementoDesplegable;