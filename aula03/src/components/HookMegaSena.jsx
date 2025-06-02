import React from 'react'
import { useState } from 'react'

const HookMegaSena = () => {

    const [numeroSorteado, setNumeroSorteado] = useState(null)
    const [listaDeSorteados, setListaDeSorteados] = useState([])

    function sortearNumero() {

        if (listaDeSorteados.length >= 6) {
            alert("Já temos 6 números sorteados!")
            return
        }

        let sorteado = Math.floor(Math.random() * 60) + 1
        setNumeroSorteado(sorteado)
        setListaDeSorteados([...listaDeSorteados, sorteado])
        
    }

  return (
    <div>
        <h1>Sorteador da Mega em React</h1>
        <p>Último sorteado: {numeroSorteado}</p>
        <button onClick={sortearNumero}>Sortear Número</button>
        <p>Lista de Sorteados: {listaDeSorteados.join(" - ")}</p>
    </div>
  )
}

export default HookMegaSena