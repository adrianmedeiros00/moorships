import React from "react";
import { Container, Title, Button, Header } from "./styles";
import TableContainer from '../../components/TableContainer/index'

const Home = () => {
  return (
    <Container>
      <Header>
        <Title>MoorShips🚢</Title>
        <Button>Login</Button>
      </Header>
        <TableContainer/>
    </Container>
  );
};

export default Home;
