import { useState } from "react"
import { Tareas } from "./Tareas"

export const ToDoList = () => {
  const [lista, setLista] = useState([])
  const [hecho, setHecho] = useState(false)

  const addTarea = (nuevaTarea) => {
    setLista([...lista, nuevaTarea])
  }

  const handleRemoverTarea = (indexParaRemover) => {
    setLista((prevLista) => prevLista.filter((_, index) => index !== indexParaRemover));
  };

  const handleCheck = () => {
    setHecho(!hecho)

    const className = hecho && 'hecho'
    
  }

  return (
    <>
      <Tareas addTarea={addTarea} />

      <ul>
        {lista.map((tarea, index) => (
          <li key={index}> <button className="casilla"></button> {tarea} <button className="remover"  onClick={() => handleRemoverTarea(index)}>Remover Tarea</button></li>))}

        
      </ul>

    </>
  )
}
