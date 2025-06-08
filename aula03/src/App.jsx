import React from 'react'
import './App.css'
import AlunoComFragment from './components/AlunoComFragment'

const App = () => {

  const alunos = [
    { nome:'Leandro', email:'lrcardoso.jp@gmail.com', curso:'Sistemas de Informacao', media:8.00 },
    { nome:'Leandro2', email:'lrcardoso.jp@gmail.com', curso:'Sistemas de Informacao', media:9.00 },
    { nome:'Leandro3', email:'lrcardoso.jp@gmail.com', curso:'Sistemas de Informacao', media:5.00 }
  ]


  return (
    <>

      {
        alunos.map((aluno, index) => (
          <span key={index}>

            <AlunoComFragment nome={aluno.nome} email={aluno.email} curso={aluno.curso} media={aluno.media}/>

          </span>
        ))
      }

    </>
  )
}

export default App