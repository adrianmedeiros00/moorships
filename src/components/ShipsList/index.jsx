import React from "react";
import moment from 'moment'
import {
  Container,
  Row,
  Column,
  HeaderRowColor,
  InfoContainer
} from "./styles";


const ShipsList = ({ headerTitleColumns, infoColumns, rowsAmount }) => {
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
      {infoColumns.map((info) => {
        return(
          <InfoContainer>
            <Row>
            <Column>{info.name}</Column>
            <Column>{info.slot}</Column>
            <Column>{moment(info.created_at).format('L')}</Column>
            <Column>{info.type}</Column>
            </Row>
          </InfoContainer>
        )
      })}
    </Container>
  )
}

export default ShipsList;
