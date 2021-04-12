import React, {useState, useEffect} from "react";
import moment from 'moment'
import {
  Container,
  Row,
  Column,
  HeaderRowColor,
  InfoContainer
} from "./styles";
import server from "../../config/axios";


const ShipsList = ({ headerTitleColumns, table }) => {
  const [slots, setSlots] = useState([])
  const [ships, setShips] = useState([])
  
  useEffect(() => {
    async function getShips() {
      const response = await server.get('/ships')
      setShips(response.data)
    }

    async function getSlots() {
      const response = await server.get('/slots')
      setSlots(response.data)
    }

    if(table === 'home') {
      getShips()
    }
    if(table === 'dashboard') {
      getSlots()
    }
  }, [table])

  const createTitleColumns = (title) =>
    title.map(title => {
      return <Column>{title}</Column>
    })

  return (
    <Container>
      <HeaderRowColor>
        <Row>
          {createTitleColumns(headerTitleColumns)}
        </Row>
      </HeaderRowColor>

      {table === 'home' ? ships.map((ship) => {
        return(
          <InfoContainer key={ship.id}>
              <Row>
              <Column>{ship.name}</Column>
              <Column>{ship.slot}</Column>
              <Column>{moment(ship.created_at).format('L')}</Column>
              <Column>{ship.type}</Column>
              </Row>
          </InfoContainer>
        )
      }) : null}

      {table === 'dashboard' ? slots.map(slot => {
        return(
          <InfoContainer>
            <Row>
              <Column>{slot.id}</Column>
              <Column>{slot.situation}</Column>
            </Row>
          </InfoContainer>
        )
      }) : null}
    </Container>
  )
}

export default ShipsList;
