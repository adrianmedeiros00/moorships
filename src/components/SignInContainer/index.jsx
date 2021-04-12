import React, {useState} from "react";
import { useHistory } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import {
  SignInInput,
  Button,
  Container,
  TextLink,
  LoginTitle,
  MiniHeader,
  BackArrow
} from "./styles";
import server from "../../config/axios";

const SignInContainer = () => {
  const history = useHistory()
  const [user, setUser] = useState({})
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSignIn() {
    try{
      const response = await server.post('/sessions', {
        email,
        password
      })

      setUser(response.data);

      history.push('/user', {user})
    } catch(err) {
      console.log(err.message)
    }

  }

  return (
    <Container>
      <MiniHeader>
        <LoginTitle>Login</LoginTitle>
        <BackArrow to='/'>
          <ArrowBackIcon fontSize='large' style={{fontSize:'40px'}}/>
        </BackArrow>
      </MiniHeader>
      <label htmlFor="name">Usuário</label>
      <SignInInput type="text" onChange={(e) => setEmail(e.target.value)} name="name" />
      <label htmlFor="password">Senha</label>
      <SignInInput type="password" onChange={(e) => setPassword(e.target.value)} name="password" />
      <Button onClick={() => handleSignIn()}>Entrar</Button>
      <TextLink to='/forgot-password'>Esqueceu sua senha?</TextLink>
    </Container>
  );
};

export default SignInContainer;
