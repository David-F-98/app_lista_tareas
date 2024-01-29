import './App.css';
import React from 'react';
import { useState } from 'react';
import FormularioTareas from './Components/FormularioTareas';
import Header from './Components/Header';
import ListaTareas from './Components/ListaTareas';

const App = () => {
  
  const [tareas, cambiarTareas] = useState(
    [
      {
        id: 1,
        texto: 'Lavar la ropa',
        completada: true
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
      <ListaTareas tareas={tareas}></ListaTareas>
    </div>
  );
}

export default App;
