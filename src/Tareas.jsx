import { useState } from "react"

export const Tareas = ({addTarea}) => {
    const [valorDoInput, setValorDoInput] = useState('')
  
const handleChange = (e) => {
    setValorDoInput(e.target.value)
   
}

const handleSubmit = (e) => {
    e.preventDefault()
    if (valorDoInput.trim() == '') return
    addTarea(valorDoInput)
    setValorDoInput('')




}
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder="Adicione sua tarea"
            value={valorDoInput}
            onChange={handleChange}
            />
            <button type="submit">Adicionar</button>
          
        </form>
        
        </>
    )
}
