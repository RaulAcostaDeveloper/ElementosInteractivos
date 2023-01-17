import { useState } from 'react';
import '../Css/ElementoInteractivo.css';
import './Css/ElementoInteractivo5.css';
import InputPlaceholderTop from './InputPlaceholderTop';

const ElementoInteractivo5 = ({titulo, explicacion})=>{
    const [miValor, setMiValor] = useState('');
    const [miOtroValor, setMiOtroValor] = useState('');
    return (
        <div className="elementoInteractivo ElementoInteractivo5">
            <div className='titulo'>
                {titulo}
            </div>
            <div className='explicacion'>
                {explicacion}
            </div>
            <div className='centrar'>
                <InputPlaceholderTop
                    placeholder={'Un número'}
                    type={'number'}
                    value={miValor}
                    onChangeValue={(value)=>setMiValor(value)}/>
                <InputPlaceholderTop
                    placeholder={'Tu nombre'}
                    type={'text'}
                    value={miOtroValor}
                    onChangeValue={(value)=>setMiOtroValor(value)}/>
            </div>

        </div>
    )
}
export default ElementoInteractivo5;