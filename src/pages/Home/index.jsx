import React from "react";
import ShipsList from "../../components/ShipsList";
import { Container, Title, Header, ShipListContainer } from "./styles";
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

const Home = () => {
  return (
      <Container>
        <Header>
          <Title>ShipsMoor</Title>
          <Link to='/signin'>
            <Button size='lg' colorScheme='blue' w='150px' h='40px' fontWeight='light'>Login</Button>
          </Link>
        </Header>
        <ShipListContainer>
          <ShipsList
            headerTitleColumns={['Navio', 'Berço', 'Entrada', 'Saída']}
            infoColumns={['info1', 'info2', 'info3', 'info4']}
            rowsAmount={6}
          />
        </ShipListContainer>
      </Container>
  );
};

export default Home;
