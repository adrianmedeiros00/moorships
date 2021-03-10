import React from "react";
import {
  SignInInput,
  Button,
  Container,
  TextLink,
} from "./styles";

const SignInContainer = () => {
  return (
    <Container>
      <label htmlFor="name">Usuário</label>
      <SignInInput type="text" name="name" />
      <label htmlFor="password">Senha</label>
      <SignInInput type="password" name="password" />
        <Button>Entrar</Button>
      <TextLink href="#">Esqueceu sua senha?</TextLink>
    </Container>
  );
};

export default SignInContainer;
