import React from "react";
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import {
  SignInInput,
  Button,
  Container,
  TextLink,
  LoginTitle,
  MiniHeader
} from "./styles";


const SignInContainer = () => {
  return (
    <Container>
      <MiniHeader>
        <LoginTitle>Login</LoginTitle>
        <Link to='/' 
          style={{ textDecoration: 'none', 
          color:'blueviolet', 
          display: 'flex', 
          alignItems:'center',
          justifyContent:'center',
          marginBottom:'28px'
        }} >
          <ArrowBackIcon fontSize='large' style={{fontSize:'40px'}}/>
        </Link>
      </MiniHeader>
      <label htmlFor="name">Usuário</label>
      <SignInInput type="text" name="name" />
      <label htmlFor="password">Senha</label>
      <SignInInput type="password" name="password" />
      <Link to='/user'>
        <Button>Entrar</Button>
      </Link>
      <Link to='/forgot-password' style={{ textDecoration: 'none' }}>
        <TextLink>Esqueceu sua senha?</TextLink>
      </Link>
    </Container>
  );
};

export default SignInContainer;
