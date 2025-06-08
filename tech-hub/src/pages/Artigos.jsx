import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Card } from 'react-bootstrap'

const Artigos = () => {

    const [artigos, setArtigos] = useState([])

    const urlBackend = "http://localhost:3000"

    useEffect(() => {
        axios.get(`${urlBackend}/artigos`)
        .then(response => setArtigos(response.data))
        .catch(error => console.error("Erro ao carregar a lista de artigos: ", error))
    }, [])

    return (
        <div>
            <h1 className="mb-4">Artigos de tecnologia</h1>
            {
                artigos.map(artigo => (
                    <Card className="mb-3" key={artigo.id}>
                        <Card.Body>
                            <Card.Title>{artigo.titulo}</Card.Title>
                            <Card.Text>{artigo.resumo}</Card.Text>
                            <Button variant="primary">Ler Mais</Button>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    )
}

export default Artigos