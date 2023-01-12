import '../Css/ElementoInteractivo.css';
import './Css/ElementoInteractivo4.css';
import ElementoDesplegable from './ElementoDesplegable';

const ElementoInteractivo4 = ({titulo, explicacion})=>{
    return (
        <div className="elementoInteractivo ElementoInteractivo4">
            <div className='titulo'>
                {titulo}
            </div>
            <div className='explicacion'>
                {explicacion}
            </div>
            <div className='centrar'>
                <ElementoDesplegable titulo={'Titulo, elemento desplegable con animación activada'} tiempo={500} animado={true}>
                    {/* Recomendable editar el estilo del contenido interno */}
                    <div className='contenidoInterno'>
                        <h3>Hola mundo</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolorum expedita nostrum magnam dicta explicabo unde sapiente aliquam tempora provident! Aperiam quod quaerat vitae optio deleniti laudantium, earum esse consequatur!</p>
                        <img src='./logo512.png'/>
                        <a href=''>Hola mundo</a>
                    </div>
                </ElementoDesplegable>
            </div>
            <div className='centrar'>
                <ElementoDesplegable titulo={'Titulo, elemento desplegable sin animación activada'} tiempo={1000} animado={false}>
                    {/* Recomendable editar el estilo del contenido interno */}
                    <div className='contenidoInterno'>
                        <h3>Hola mundo</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolorum expedita nostrum magnam dicta explicabo unde sapiente aliquam tempora provident! Aperiam quod quaerat vitae optio deleniti laudantium, earum esse consequatur!</p>
                        <img src='./logo512.png'/>
                    </div>
                </ElementoDesplegable>
            </div>
        </div>
    )
}
export default ElementoInteractivo4;