import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, LoginTitle, SignInInput } from '../../components/SignInContainer/styles'
import { Text } from './styles'

export const ForgotPassword = () => {
    return (
        <Container style={{ maxWidth: '480px' }}>
            <LoginTitle>Recuperação de senha</LoginTitle>
            <Text>Enviaremos um e-mail para a recuperação de sua senha.</Text>
            <label htmlFor='email'>Email</label>
            <SignInInput type='email' name='email'></SignInInput>
            <Link to='/signin'>
                <Button>Voltar</Button>
            </Link>
            <Button onClick={() => alert('Email enviado com sucesso.')}>Enviar</Button>
        </Container>
    )
}

export default ForgotPassword