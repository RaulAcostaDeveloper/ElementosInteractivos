import '../Css/ElementoInteractivo.css';
import Carrucel from './Carrucel';

const ElementoInteractivo2 = ({titulo, explicacion})=>{
    return (
        <div className="elementoInteractivo ElementoInteractivo2">
            <div className='titulo'>
                {titulo}
            </div>
            <div className='explicacion'>
                {explicacion}
            </div>
            <div className='centrar'>
                <Carrucel milisegundosIntervalo={3000}
                    srcImagenes={
                        [
                            {
                                src:'./ImagenesElementoInteractivo2/001.jpg',
                                title:'001.jpg',
                            },
                            {
                                src:'./ImagenesElementoInteractivo2/002.jpg',
                                title:'002.jpg',
                            },
                            {
                                src:'./ImagenesElementoInteractivo2/003.jpg',
                                title:'003.jpg',
                            },
                            {
                                src:'./ImagenesElementoInteractivo2/004.jpg',
                                title:'004.jpg',
                            },
                            {
                                src:'./ImagenesElementoInteractivo2/005.jpg',
                                title:'005.jpg',
                            },
                        ]
                    }
                />
            </div>
        </div>
    )
}
export default ElementoInteractivo2;