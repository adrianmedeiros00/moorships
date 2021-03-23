import React from "react";

import {
  Container,
  Row,
  Column,
  HeaderRowColor,
  InfoContainer
} from "./styles";

const ShipsList = ({headerTitleColumns, infoColumns}) => {

  const createHeaderColumns = (title) => 
    title.map( title => {
        return <Column>{title}</Column>
    })

  const createInfoColumns = (info) =>
    info.map( info => {
      return <Column>{info}</Column>
    })

  return (
    <>
      <Container>
        <HeaderRowColor>
          <Row>
            {createHeaderColumns(headerTitleColumns)}
          </Row>
        </HeaderRowColor>

        <InfoContainer>
          <Row>
            {createInfoColumns(infoColumns)}
          </Row>
          <Row>
            {createInfoColumns(infoColumns)}
          </Row>
          <Row>
            {createInfoColumns(infoColumns)}
          </Row>
          <Row>
            {createInfoColumns(infoColumns)}
          </Row>
          <Row>
            {createInfoColumns(infoColumns)}
          </Row>
          <Row>
            {createInfoColumns(infoColumns)}
          </Row>
          <Row>
            {createInfoColumns(infoColumns)}
          </Row>
          <Row>
            {createInfoColumns(infoColumns)}
          </Row>
        </InfoContainer>

   
      </Container>
    </>
  );
};

export default ShipsList;
