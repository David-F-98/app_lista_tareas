import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { v4 as uuidv4 } from 'uuid';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
const FormularioTareas = ({tareas, cambiarTareas}) => {
    const [inputTarea,cambiarInputTarea] = useState('');

    const handleInput = (e) =>{
        cambiarInputTarea(e.target.value);
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        cambiarTareas(
            [
                ...tareas,
                {
                    id: uuidv4(),
                    texto: 'Edite o Ponga una Tarea',
                    completada: false
                }
            ]
        );
    }
    
    return (         
        <form className='formulario-tareas' onSubmit={handleSubmit}>
            <input 
                type='text' 
                className='formulario-tareas__input'
                placeholder='Escribe una tarea'
                value={inputTarea}
                onChange={(e)=> handleInput(e)}
                ></input>
            <button 
                type='submit'
                className='formulario-tareas__btn'
                >
                <FontAwesomeIcon 
                    icon={faCirclePlus} className='formulario-tareas__icono-btn'
                    />
            </button>
        </form>
     );
}
 
export default FormularioTareas;