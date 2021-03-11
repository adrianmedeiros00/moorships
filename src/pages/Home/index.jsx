import React from "react";
import { Container, Title, Button, Header } from "./styles";
import ShipsList from "../../components/ShipsList";

const Home = () => {
  return (
    <>
    <Container>
      <Header>
        <Title>MoorShips🚢</Title>
        <a href="/signin">
          <Button>Login</Button>
        </a>
      </Header>
        <ShipsList/>  
    </Container>
    </>
  );
};

export default Home;
