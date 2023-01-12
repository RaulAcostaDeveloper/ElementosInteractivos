import '../Css/ElementoInteractivo.css';
import Circulo from './Circulo';
const ElementoInteractivo1 = ({titulo, explicacion})=>{
    return (
        <div className="elementoInteractivo ElementoInteractivo1">
            <div className='titulo'>
                {titulo}
            </div>
            <div className='explicacion'>
                {explicacion}
            </div>
            <Circulo/>

        </div>
    )
}
export default ElementoInteractivo1;