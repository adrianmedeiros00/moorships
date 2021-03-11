import React from "react";
import { Container, Title, Button, Header } from "./styles";
import ShipsList from "../../components/ShipsList";
import { Link }  from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Container>
      <Header>
        <Title>MoorShips🚢</Title>
          <Link to='/signin'>
            <Button>Login</Button>
          </Link>
      </Header>
        <ShipsList/>  
    </Container>
    </>
  );
};

export default Home;
