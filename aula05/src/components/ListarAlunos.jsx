import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, ListGroup } from 'react-bootstrap'

const ListarAlunos = () => {

    const urlDoBackend = "http://localhost:3000"
    const [alunos, setAlunos] = useState([])

    useEffect(() => {
        axios.get(`${urlDoBackend}/alunos`)
        .then(response => setAlunos(response.data))
        .catch(error => console.error("Houve um erro para obter a listagem de alunos: ", error))
    }, [])

    return (
        <Container className="mt-4">
            <h1 className="mb-4">
                Listagem de Alunos
            </h1>

            <ListGroup>
                {
                    alunos.map(aluno => (
                        <ListGroup.Item key={aluno.id}>
                            <strong>{aluno.nome}</strong> - {aluno.email}
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </Container>
    )
}

export default ListarAlunos