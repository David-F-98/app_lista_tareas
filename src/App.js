import './App.css';
import React from 'react';
import { useState } from 'react';
import FormularioTareas from './Components/FormularioTareas';
import Header from './Components/Header';

const App = () => {
  
  const [tareas, cambiarTareas] = useState(
    [
      {
        id: 1,
        texto: 'Lavar la ropa',
        completada: false
      },
      {
        id: 2,
        texto: 'Comprar arroz',
        completada: false
      }
    ]
  );

  return (
    <div className='contenedor'>
      <Header/>
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
    </div>
  );
}

export default App;
