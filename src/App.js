import './App.css';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useState , useEffect} from 'react';
import FormularioTareas from './Components/FormularioTareas';
import Header from './Components/Header';
import ListaTareas from './Components/ListaTareas';

const App = () => {
  //obtenemos las tareas guardadas de localstorage
  const tareasGuardadas = localStorage.getItem('tareas') ? 
      JSON.parse(localStorage.getItem('tareas') )
    : 
      [] 
    ;

//Establecemos es estado de las tareas
  const [tareas, cambiarTareas] = useState(
    tareasGuardadas
  );
//Guardando el estado dento de localstorage
  useEffect(()=>{
    localStorage.setItem('tareas',JSON.stringify(tareas));
  }, [tareas])

  let configMostrarCompletadas = ''
  if (localStorage.getItem('mostrarCompletadas') === null){
    configMostrarCompletadas= true;
  } else{
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
  }

  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);

  useEffect(()=>{
    localStorage.setItem('mostrarCompletadas',mostrarCompletadas.toString());
  }, [mostrarCompletadas])

  return (
    <div className='contenedor'>
      <Header  
        mostrarCompletadas={mostrarCompletadas} 
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
      />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
      <ListaTareas 
        tareas={tareas} 
        cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas}  
      ></ListaTareas>
    </div>
  );
}

export default App;
