import React from "react";
import { Link } from 'react-router-dom'
import {
  SignInInput,
  Button,
  Container,
  TextLink,
  LoginTitle,
} from "./styles";


const SignInContainer = () => {
  return (
    <Container>
      <LoginTitle>Login</LoginTitle>
      <label htmlFor="name">Usuário</label>
      <SignInInput type="text" name="name" />
      <label htmlFor="password">Senha</label>
      <SignInInput type="password" name="password" />
      <Link to='/'>
        <Button>Voltar</Button>
      </Link>
      <Link to='/user-actions'>
        <Button>Entrar</Button>
      </Link>
      <Link to='/forgot-password'>
        <TextLink>Esqueceu sua senha?</TextLink>
      </Link>
    </Container>
  );
};

export default SignInContainer;
