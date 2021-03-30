import React from "react";

import {
  Container,
  Row,
  Column,
  HeaderRowColor,
  InfoContainer
} from "./styles";

const ShipsList = ({headerTitleColumns, infoColumns, rowsAmount}) => {

  const createTitleColumns = (title) => 
    title.map( title => {
        return <Column>{title}</Column>
    })

  const createInfoColumns = (info) =>
    info.map( info => {
      return <Column>{info}</Column>
    })

  const createInfoRows = (rows) => {
    const rowsContent = []
    for(let i = 0; i < rows; i++){
      rowsContent.push(
      <Row>
        {createInfoColumns(infoColumns)}
      </Row>)
    }
    return rowsContent
  }
    

  return (
      <Container>
        <HeaderRowColor>
          <Row>
            {createTitleColumns(headerTitleColumns)}
          </Row>
        </HeaderRowColor>

        <InfoContainer>
               {createInfoRows(rowsAmount)}
        </InfoContainer>

      </Container>
  );
};

export default ShipsList;
