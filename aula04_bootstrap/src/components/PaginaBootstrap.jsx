import React from 'react'
import { Button, Card, Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap'

const PaginaBootstrap = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#">
                    ReactNews
                </Navbar.Brand>
                <Nav>
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Sobre</Nav.Link>
                    <Nav.Link href="#">Contato</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

        <Container className="mt-4">
            <Card className="mb-4">

                <Card.Body>
                    <Card.Title>Bem-vindo ao React Bootstrap!</Card.Title>
                    <Card.Text>
                        Aqui estamos usando componentes prontos do bootstrap adaptados para o React.
                        É uma forma rápida e elegante de montar interfaces responsivas.
                    </Card.Text>
                    <Button variant="primary">Saiba mais</Button>
                </Card.Body>
            </Card>

            <Form>
                <Row>
                    { /* Coluna 1 (Campo nome) */ }
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formNome" >
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Digite seu nome"></Form.Control>
                        </Form.Group>
                    </Col>

                    { /* Coluna 2 (Campo email) */ }
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Digite seu email"></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formMensagem">
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Digite seu email"></Form.Control>
                </Form.Group>

                <Button variant="success" type="submit">
                    Enviar
                </Button>


            </Form>


        </Container>

    </div>
  )
}

export default PaginaBootstrap