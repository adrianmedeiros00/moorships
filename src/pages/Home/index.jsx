import React, {useState, useEffect} from "react";
import ShipsList from "../../components/ShipsList";
import { Container, Title, Header, ShipListContainer } from "./styles";
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import server from "../../config/axios";

const Home = () => {
  const [ships, setShips] = useState([])

  useEffect(() => {
    async function getShips() {
      const response = await server.get('/ships')
      console.log(response)
      setShips(response.data)
    }
    getShips()
  }, [])

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
            infoColumns={ships}
            rowsAmount={ships.length}
          />
        </ShipListContainer>
      </Container>
  );
};

export default Home;
