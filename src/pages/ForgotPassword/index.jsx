import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, LoginTitle, MiniHeader, SignInInput } from '../../components/SignInContainer/styles'
import { Text, Wrapper } from './styles'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { Colors } from '../../assets/constants/Colors'

export const ForgotPassword = () => {
    return (
        <Wrapper>
            <Container style={{ maxWidth: '480px' }}>
            <MiniHeader>
                <LoginTitle>Recuperação de senha</LoginTitle>
                <Link to='/signin' 
                style={{
                    textDecoration:'none', 
                    color:`${Colors.quaternaryColor}`, 
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
        </Wrapper>

    )
}

export default ForgotPassword