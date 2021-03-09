import React from "react";
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
      <ButtonContainer>
        <Button>Entrar</Button>
        <Button>Usuário Comum</Button>
      </ButtonContainer>
      <TextLink href="#">Esqueceu sua senha?</TextLink>
    </Container>
  );
};

export default SignInContainer;
