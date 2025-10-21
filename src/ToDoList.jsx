import { useState } from "react"
import { Tareas } from "./Tareas"

export const ToDoList = () => {
  const [lista, setLista] = useState([])

  const addTarea = (nuevaTarea) => {
    setLista([...lista, nuevaTarea])
  }

  const handleRemoverTarea = (indexParaRemover) => {
    setLista((prevLista) => prevLista.filter((_, index) => index !== indexParaRemover));
  };



  return (
    <>
      <Tareas addTarea={addTarea} />

      <ul>
        {lista.map((tarea, index) => (
          <li key={index}>{tarea}<button onClick={() => handleRemoverTarea(index)}>Remover Tarea</button></li>))}
      </ul>

    </>
  )
}
