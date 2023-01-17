import '../Css/ElementoInteractivo.css';
import CarrucelControles from './CarrucelControles';

const ElementoInteractivo3 = ({titulo, explicacion})=>{
    let arregloImagenes = [
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
    ];
    return (
        <div className="elementoInteractivo ElementoInteractivo3">
            <div className='titulo'>
                {titulo}
            </div>
            <div className='explicacion'>
                {explicacion}
            </div>
            <div className='centrar'>
                {/*opciones carrucelControlesAlto, carrucelControlesAncho o carrucelControlesCuadrado */}
                <CarrucelControles
                    srcImagenes={ arregloImagenes }
                    relacionAspecto='carrucelControlesCuadrado'
                />
            </div>
        </div>
    )
}
export default ElementoInteractivo3;