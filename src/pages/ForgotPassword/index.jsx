import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, LoginTitle, MiniHeader, SignInInput } from '../../components/SignInContainer/styles'
import { Text } from './styles'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

export const ForgotPassword = () => {
    return (
        <Container style={{ maxWidth: '480px' }}>
            <MiniHeader>
                <LoginTitle>Recuperação de senha</LoginTitle>
                <Link to='/signin' 
                style={{
                    textDecoration:'none', 
                    color:'blueviolet', 
                    display: 'flex', 
                    alignItems:'center',
                    justifyContent:'center',
                    marginBottom:'70px'
                }}>
                    <ArrowBackIcon fontSize='large' style={{fontSize:'40px'}}/>
                </Link>
            </MiniHeader>
            <Text>Enviaremos um e-mail para a recuperação de sua senha.</Text>
            <label htmlFor='email'>Email</label>
            <SignInInput type='email' name='email'></SignInInput>
            <Button onClick={() => alert('Email enviado com sucesso.')}>Enviar</Button>
        </Container>
    )
}

export default ForgotPassword