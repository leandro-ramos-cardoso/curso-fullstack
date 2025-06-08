import React from 'react'
import { useState } from 'react'

const TodoList = () => {
    
    const [tarefas, setTarefas] = useState([])
    const [novaTarefa, setNovaTarefa] = useState('')

    function adicionarTarefa() {
        // Faz copia do array atual e depois add no fim da copia a novaTarefa
        setTarefas([...tarefas, novaTarefa])
        setNovaTarefa('')
    }

  return (
    <div>
        <h1>Lista de tarefas</h1>
        <input 
            type='text'
            placeholder='Digite uma nova tarefa...'
            value={novaTarefa} // Valor atual
            // Mudar valor na nova tarefa quando for digitando as coisas
            onChange={(e) => setNovaTarefa(e.target.value)}
        >
    
        </input>
        <button onClick={adicionarTarefa}>
            Adicionar
        </button>

        <div>
            {
                // Mapeando cada tarefa e Cada tarefa tem uma chave
                tarefas.map((tarefa, index) => (
                    <p key={index}>{tarefa}</p>
            ))
            
            }
        </div>
    </div>
  )
}

export default TodoList