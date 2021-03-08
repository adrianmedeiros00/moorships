import { Container, SignInInput, Button , SignInContainer, Title, TextLink, ButtonContainer } from './styles'


export default function SignIn({title}){
    return(
        <>
            <Container>
                <Title>{title}</Title>
                <SignInContainer>
                    <label htmlFor='name'>Usuário</label>
                    <SignInInput type='text' name='name' />
                    <label htmlFor='password'>Senha</label>
                    <SignInInput type='password' name='password' />
                        <ButtonContainer>
                            <Button>Entrar</Button>
                            <Button>Usuário Comum</Button>
                        </ButtonContainer>
                    <TextLink href='#'>Esqueceu sua senha?</TextLink>
                </SignInContainer>
            </Container>
        </>
    )
}