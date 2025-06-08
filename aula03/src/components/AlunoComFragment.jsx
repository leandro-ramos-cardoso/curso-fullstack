import React from 'react'

const AlunoComFragment = ({ nome, email, curso, media }) => {

    // OPERADOR TERNÁRIO (ACEITA APENAS DUAS OPCOES)
  const status = media >= 7 ? 'APROVADO' : 'REPROVADO'

  return (
    <>
        <h5 className='nomeAluno'>Nome: {nome}</h5>
        <p>Email: {email}</p>
        <p>Curso: {curso}</p>
        <p>Média: {media}</p>
        <p>Status: {status}</p>
    </>
  )
}

export default AlunoComFragment