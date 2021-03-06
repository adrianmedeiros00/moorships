import { Container, SignInInput, Button , SignInContainer, Title, TextLink} from './styles'


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
                    <Button>Entrar</Button>
                    <TextLink href='#'>Esqueceu sua senha?</TextLink>
                </SignInContainer>
            </Container>
        </>
    )
}