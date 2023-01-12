import { useEffect } from 'react';
import './Css/Circulo.css';
const Circulo = ()=>{
    // No usar estados, porque no se actualizan de manera inmediata en la ejecución
    let marginActual = 0;
    let ejecutandoseAnimacionEntrada = false;
    let ejecutandoseAnimacionSalida = false;
    let intervaloDeMovimiento;
    let circuloExteriorElemento;
    useEffect(()=>{
        circuloExteriorElemento = document.getElementById('circuloExterior');
    },[])
    const onMouseDown =()=>{
        // Previene sobre ejecuciones
        if (!ejecutandoseAnimacionSalida && !ejecutandoseAnimacionEntrada && marginActual === 0) {
            ejecutandoseAnimacionSalida = true;
            marginActual = 0;
            // Inicia el intervalo de salida
            intervaloDeMovimiento = setInterval(() => {
                if (marginActual <= 220) {
                    // Aumenta el margen izquierdo
                    circuloExteriorElemento.style.marginLeft = `${marginActual}px`;
                    marginActual = marginActual + 4;
                } else {
                    // Setea el margen final y termina el intervalo
                    marginActual = 220;
                    clearInterval(intervaloDeMovimiento);
                    ejecutandoseAnimacionSalida = false;
                }
            }, 10);
        }
    }
    const onMouseUp =()=>{
        // Previene ejecuciones indeseadas
        if (!ejecutandoseAnimacionEntrada && !ejecutandoseAnimacionSalida && marginActual === 220) {
            ejecutandoseAnimacionEntrada = true;
            // Inicia el intervalo de reversa
            intervaloDeMovimiento = setInterval(() => {
                if (marginActual >= 0) {
                    // Reduce el margen izquierdo
                    circuloExteriorElemento.style.marginLeft = `${marginActual}px`;
                    marginActual = marginActual - 4;
                } else {
                    // Reinicia a 0 (por seguridad) y termina el intervalo
                    marginActual = 0;
                    clearInterval(intervaloDeMovimiento);
                    ejecutandoseAnimacionEntrada = false;
                }
            }, 10);
        }
    }
    return (
        <div className="circulo" onMouseDown={()=>onMouseDown()} onMouseUp={()=>onMouseUp()}>
            <div className='interior'>
                <img src="./miFoto.jpg" alt="Foto de perfil interior"/>
            </div>
            <div className='exterior' id="circuloExterior">
                <img src="./MiOtraFoto.jpg" alt="Foto de perfil exterior" />
            </div>
        </div>
    )
}
export default Circulo;