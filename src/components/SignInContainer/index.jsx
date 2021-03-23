import React from "react";
import { Link } from 'react-router-dom'
import { ButtonsContainer } from "../../pages/UserActionsPage/styles";
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
      <Link to='/atracador-actions'>
        <Button>Entrar</Button>
      </Link>
      <TextLink href="/forgot-password?">Esqueceu sua senha?</TextLink>
    </Container>
  );
};

export default SignInContainer;
