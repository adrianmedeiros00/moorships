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
                <Button>Voltar</Button>
                <Button>Entrar</Button>
          </ButtonContainer>
      <TextLink href="/forgot-password?">Esqueceu sua senha?</TextLink>
    </Container>
  );
};

export default SignInContainer;
