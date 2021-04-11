import React from 'react'
import { BackArrow, Button, Container, LoginTitle, MiniHeader, SignInInput } from '../../components/SignInContainer/styles'
import { Text, Wrapper } from './styles'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'


export const ForgotPassword = () => {
    return (
        <Wrapper>
            <Container style={{ maxWidth: '480px' }}>
            <MiniHeader>
                <LoginTitle>Recuperação de senha</LoginTitle>
                <BackArrow to='/signin'>
                    <ArrowBackIcon fontSize='large' style={{fontSize:'40px'}}/>
                </BackArrow>
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