import React from "react";
import ShipsList from "../../components/ShipsList";
import { Container, Title, Button, Header } from "./styles";
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Container>
        <Header>
          <Title>MoorShips</Title>
          <Link to='/signin'>
            <Button>Login</Button>
          </Link>
        </Header>
        <ShipsList headerTitleColumns={['Navio','Berço','Entrada','Saída','ID']} infoColumns={['info1','info2','info3','info4','info5']}/>
      </Container>
    </>
  );
};

export default Home;
