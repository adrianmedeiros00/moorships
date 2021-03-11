import React from "react";
import { Link }  from 'react-router-dom'
import {
  SignInInput,
  Button,
  Container,
  TextLink,
  ButtonContainer,
} from "./styles";



const SignInContainer = () => {
  return (
    <Container>
      <label htmlFor="name">Usuário</label>
      <SignInInput type="text" name="name" />
      <label htmlFor="password">Senha</label>
      <SignInInput type="password" name="password" />
            <Link to='/'>
              <Button>Voltar</Button>
            </Link>
              <Button>Entrar</Button>
      <TextLink href="/forgot-password?">Esqueceu sua senha?</TextLink>
    </Container>
  );
};

export default SignInContainer;
