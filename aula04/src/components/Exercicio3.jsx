import React from 'react'

const Exercicio3 = () => {

    const condicao = false

    const estiloCondicional = condicao 
    ? {
        color: '#ffa500',
        backgroundColor: '#808080',
        height: '150px',
        margin: '20px'
     }
    : {
        color: '#00800',
        backgroundColor: '#ffff00',
        height: '100px',
        margin: '10px'
    }

  return (
    <div style={estiloCondicional}>
        Texto com estilo inline dinâmico!
    </div>
  )
}

export default Exercicio3