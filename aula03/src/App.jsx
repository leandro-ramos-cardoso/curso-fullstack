import React from 'react'
import AlunoComFragment from './components/AlunoComFragment'



const App = () => {

  const alunos = [
    { nome: "Kelson" , email: "kelson@gmail.com", curso: "fullstack", media: 7.00 },
    { nome: "Kelson 2" , email: "kelson@gmail.com", curso: "fullstack", media: 5.00 },
    { nome: "Kelson 3" , email: "kelson@gmail.com", curso: "fullstack", media: 10.00 }
  ]

  return (
    <>

    {
      alunos.map((aluno, index) => (
         <span key={index}><AlunoComFragment nome={aluno.nome} email={aluno.email} curso={aluno.curso} media={aluno.media}/></span>
      ))
    }

    </>
  )
}

export default App