import React from "react";
import ShipsList from "../../components/ShipsList";
import { Container, Title, Button, Header } from "./styles";
import { Link } from 'react-router-dom'
import Footer from "../../layout/Footer";


const Home = () => {
  return (
      <Container>
        <Header>
          <Title>ShipsMoor</Title>
          <Link to='/signin'>
            <Button>Login</Button>
          </Link>
        </Header>
<<<<<<< HEAD
          <ShipsList
            headerTitleColumns={['Navio', 'Berço', 'Entrada', 'Saída']}
            infoColumns={['info1', 'info2', 'info3', 'info4']}
            rowsAmount={10}
          />    
      </Container>
        <Footer/>
    </>
=======
        <ShipsList
          headerTitleColumns={['Navio', 'Berço', 'Entrada', 'Saída']}
          infoColumns={['info1', 'info2', 'info3', 'info4']}
          rowsAmount={10}
        />
        <Footer/>
      </Container>
>>>>>>> d9a01876945a56b4174e65d93d2eba9704d9e53f
  );
};

export default Home;
