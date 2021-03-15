import React from 'react'
import { InfoColumn, InfoContainerRow } from './styles'



const InfoColumns = (props) => {
  return (
    <>
      <InfoContainerRow>
        <InfoColumn>
          {props.navio}
        </InfoColumn>
        <InfoColumn>
          {props.berco}
        </InfoColumn>
        <InfoColumn>
          {props.entrada}
        </InfoColumn>
        <InfoColumn>
          {props.saida}
        </InfoColumn>
        <InfoColumn>
          {props.id}
        </InfoColumn>
      </InfoContainerRow>
    </>
  )
}

export default InfoColumns;