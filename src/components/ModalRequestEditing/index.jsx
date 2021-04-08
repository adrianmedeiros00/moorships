import React from 'react'
import { Button } from '../../pages/User/styles'
import {
    HeaderTable,
    ModalContainer,
    ModalTable,
    TableTitle
} from '../ModalShipsList/styles'

import { SolicitationEditingContainer, TextBox, TextBoxTitle } from './styles'


const ModalRequestEditing = () => {
    return (
        <ModalTable>
            <ModalContainer>
                <HeaderTable>
                    <TableTitle>Solicitar edição</TableTitle>
                </HeaderTable>
                <TextBoxTitle>Digite a edição que deseja:</TextBoxTitle>
                    <SolicitationEditingContainer>
                    <TextBox />
                    <Button>Criar Solicitação</Button>
                    </SolicitationEditingContainer>
            </ModalContainer>
        </ModalTable>
    )
}

export default ModalRequestEditing