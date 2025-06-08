import React from 'react'
import { useState } from 'react'

const HookMegaSena = () => {

    // Sao vazios pq assim que abre a tela nao tem nada ainda
    const [numeroSorteado, setNumeroSorteado] = useState(null)
    const [listaDeSorteados, setListaDeSorteados] = useState ([])

    function sortearNumero() {

        if(listaDeSorteados.length >= 6) {
            alert('Já temos 6 números sorteados!')
            return 
       }

        // Sorteia um numero e armazena em um array
        let sorteado = Math.floor(Math.random() * 60) + 1

        // Abastecendo o setNumeroSorteado
        setNumeroSorteado(sorteado)

        // Recebe um array porem como copia para nao sobescrever os valores
        setListaDeSorteados([...listaDeSorteados, sorteado])
    }

    function reiniciarSorteio() {
        setNumeroSorteado(null)
        setListaDeSorteados([])
        return
    }

  return (
    <div>
        <h1>Sorteador da Mega em React</h1>
        <p>Último sorteado: {numeroSorteado}</p>

        <button onClick={sortearNumero}>
            Sortear Número
        </button>

        <p>Lista de Sorteados: {listaDeSorteados.join(' - ')}</p>

        <button onClick={reiniciarSorteio}>Reiniciar sorteio</button>

    </div>
  )
}

export default HookMegaSena