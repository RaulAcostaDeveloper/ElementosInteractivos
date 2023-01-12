import { useEffect, useState } from 'react';
import './Css/InputPlaceholderTop.css';
// Requiere ser invocado así

// <InputPlaceholderTop
// placeholder={'Un número'}
// type={'number'}
// value={miValor}
// onChangeValue={(value)=>setMiValor(value)}/> 

const InputPlaceholderTop = ({placeholder='', type='text', value='', onChangeValue}) => {
    const [idPlaceholderActual] = useState(Math.floor(Math.random() * 1000));
    const [miPlaceholder, setMiPlaceholder] = useState('');
    useEffect(()=>{
        setMiPlaceholder(placeholder)
    },[placeholder]);
    // Primer render
    useEffect(()=>{
        let elPlaceholder = document.getElementById(idPlaceholderActual+placeholder);
        elPlaceholder.style.display='none';
    },[idPlaceholderActual, placeholder]);

    const onFocusInput =()=>{
        // Quita el placeholder nativo
        setMiPlaceholder('');
        // Pone el placeholder externo
        let elPlaceholder = document.getElementById(idPlaceholderActual+placeholder);
        elPlaceholder.style.display='block';
        elPlaceholder.animate([
            { top: '0px', color:'transparent'},
            { top: '-20px', color:'rgb(13, 13, 13)'},
        ], {
            duration: 300,
        }); 
    }

    const onFocusOutInput =()=>{
        // Pone el placeholder nativo
        setMiPlaceholder(placeholder);
        // Quita el placeholder externo
        let elPlaceholder = document.getElementById(idPlaceholderActual+placeholder);
        elPlaceholder.animate([
            { top: '-20px', color:'rgb(13, 13, 13)'},
            { top: '0px', color:'transparent'},
        ], {
            duration: 300,
        });
        setTimeout(() => {
            elPlaceholder.style.display='none';
        }, 250);
    }
    return (
        <div className='inputPlaceholderTop'>
            <div className='input'>
                <input 
                    placeholder={miPlaceholder} 
                    type={type} 
                    value={value} 
                    onChange={(e)=>onChangeValue(e.target.value)}
                    onFocus={()=>onFocusInput()}
                    onBlur={()=>onFocusOutInput()}/>
                <div className='placeholderExterno' id={idPlaceholderActual+placeholder}>
                    {placeholder}
                </div>
            </div>
        </div>
    )
}
export default InputPlaceholderTop;