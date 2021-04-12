import React, {useState} from 'react'
import { BackArrow, Button, Container, LoginTitle, MiniHeader, SignInInput } from '../../components/SignInContainer/styles'
import { Text, Wrapper } from './styles'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import server from '../../config/axios'


export const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    async function handleSubmitEmail() {
        try {
            const response = await server.put('/users', {
                email
            })

            console.log(response.data)
        } catch (err) {
            console.log(err.message)
        }
    }
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
            <SignInInput type='email' onChange={(e) => setEmail(e.target.value)} name='email'></SignInInput>
            <Button onClick={() => handleSubmitEmail()}>Enviar</Button>
            </Container>
        </Wrapper>

    )
}

export default ForgotPassword