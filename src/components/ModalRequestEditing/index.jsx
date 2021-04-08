import React from 'react'
import { Button } from '../../pages/User/styles'
import {
    Header,
    ModalContainer,
    Modal,
    Title
} from '../ModalShipsList/styles'

import { SolicitationEditingContainer, TextBox, TextBoxTitle } from './styles'


const ModalRequestEditing = () => {
    return (
        <ModalContainer>
            <Modal>
                <Header>
                    <Title>Solicitar edição</Title>
                </Header>
                <TextBoxTitle>Digite a edição que deseja:</TextBoxTitle>
                    <SolicitationEditingContainer>
                    <TextBox />
                    <Button>Criar Solicitação</Button>
                    </SolicitationEditingContainer>
            </Modal>
        </ModalContainer>
    )
}

export default ModalRequestEditing