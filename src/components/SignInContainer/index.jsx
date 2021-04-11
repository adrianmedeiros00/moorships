import React from "react";
import { Link } from 'react-router-dom'
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




const SignInContainer = () => {
  return (
    <Container>
      <MiniHeader>
        <LoginTitle>Login</LoginTitle>
        <BackArrow to='/'>
          <ArrowBackIcon fontSize='large' style={{fontSize:'40px'}}/>
        </BackArrow>
      </MiniHeader>
      <label htmlFor="name">Usuário</label>
      <SignInInput type="text" name="name" />
      <label htmlFor="password">Senha</label>
      <SignInInput type="password" name="password" />
      <Link to='/user'>
        <Button>Entrar</Button>
      </Link>
        <TextLink to='/forgot-password'>Esqueceu sua senha?</TextLink>
    </Container>
  );
};

export default SignInContainer;
