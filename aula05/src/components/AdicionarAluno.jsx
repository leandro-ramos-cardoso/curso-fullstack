import { React, useState } from 'react';
import { Button, Container, Form, Card } from 'react-bootstrap';
import axios from 'axios'

const AdicionarAluno = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const urlDoBackend = "http://localhost:3000"

    const handleReset = () => {
        setNome("");
        setEmail("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const dadosDoForm = {
            nome: nome,
            email: email
        }

        const request = axios.post(`${urlDoBackend}/alunos`, dadosDoForm)

        alert("Aluno cadastrado com sucesso!")

        handleReset();
    };

    return (
        <Container className="d-flex justify-content-center align-items-center mt-5">
            <Card style={{ width: '100%', maxWidth: '500px' }} className="p-4 shadow">
                <Card.Body>
                    <Card.Title className="text-center mb-4">
                        Cadastro de Alunos
                    </Card.Title>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="nome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                                placeholder="Digite o nome completo"
                            />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="exemplo@email.com"
                            />
                        </Form.Group>

                        <div className="d-flex justify-content-between">
                            <Button variant="primary" type="submit">
                                Cadastrar
                            </Button>

                            <Button variant="outline-secondary" type="button" onClick={handleReset}>
                                Limpar
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default AdicionarAluno;
