import React from "react";
import ShipsList from "../../components/ShipsList";
import { Container, Title, Button, Header } from "./styles";
import { Link } from 'react-router-dom'
import Footer from "../../layout/Footer";

const Home = () => {
  return (
    <>
      <Container>
        <Header>
          <Title>ShipsMoor</Title>
          <Link to='/signin'>
            <Button>Login</Button>
          </Link>
        </Header>
          <ShipsList
            headerTitleColumns={['Navio', 'Berço', 'Entrada', 'Saída']}
            infoColumns={['info1', 'info2', 'info3', 'info4']}
            rowsAmount={10}
          />    
      </Container>
        <Footer/>
    </>
  );
};

export default Home;
