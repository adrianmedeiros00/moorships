import React from "react";
import HeaderTable from './components/HeaderTable'
import InfoColumns from './components/InfoColumn'

import { TableContainer, Container, InfoContainerColumn } from "./styles";

const ShipsList = () => {
  return (
    <>
      <Container>
        <TableContainer>
          <HeaderTable navio='Navio' berco='Berço' entrada='Entrada' saida='Saída' id='ID' />
        </TableContainer>

        <InfoContainerColumn>
          <InfoColumns navio='info 1' berco='info 2' entrada='info 3' saida='info 4' id='info 5' />
          <InfoColumns navio='info 1' berco='info 2' entrada='info 3' saida='info 4' id='info 5' />
          <InfoColumns navio='info 1' berco='info 2' entrada='info 3' saida='info 4' id='info 5' />
          <InfoColumns navio='info 1' berco='info 2' entrada='info 3' saida='info 4' id='info 5' />
          <InfoColumns navio='info 1' berco='info 2' entrada='info 3' saida='info 4' id='info 5' />
          <InfoColumns navio='info 1' berco='info 2' entrada='info 3' saida='info 4' id='info 5' />
          <InfoColumns navio='info 1' berco='info 2' entrada='info 3' saida='info 4' id='info 5' />
          <InfoColumns navio='info 1' berco='info 2' entrada='info 3' saida='info 4' id='info 5' />
          <InfoColumns navio='info 1' berco='info 2' entrada='info 3' saida='info 4' id='info 5' />
          <InfoColumns navio='info 1' berco='info 2' entrada='info 3' saida='info 4' id='info 5' />
        </InfoContainerColumn>
      </Container>
    </>
  );
};

export default ShipsList;
