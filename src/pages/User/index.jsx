import React, {useState, useEffect} from 'react'
import ShipsList from '../../components/ShipsList/index'
import ModalInsertShip from '../../components/ModalInsertShip';
import ModalShipsList from '../../components/ModalShipsList';
import ModalRequestEditing from '../../components/ModalRequestEditing';
import { ExitToApp } from '@material-ui/icons'
import { Header, Title } from '../Home/styles'
import {
    Container,
    UserContainer,
    ActionsContainer,
    ActionsTitle,
    SolicitationsTitle,
    ButtonsContainer,
    SolicitationsContainer,
    SolicitationBox,
    ShipsInfoContainer,
    BercoShipsTitle,
    ExitIcon,
} from './styles'
import ModalEditing from '../../components/ModalEditing';


const UserActionsPage = () => {
    return (
        <>
            <Container>
                <Header>
                    <Title>ShipsMoor</Title>
                    <ExitIcon to='/signin'>
                        Finalizar sessão
                        <ExitToApp fontSize='large' style={{ marginLeft: '10px' }} />
                    </ExitIcon>
                </Header>
                <UserContainer>
                    <ActionsContainer>
                        <ActionsTitle>Ações</ActionsTitle>
                        <ButtonsContainer>
                            <ModalInsertShip/>
                            <ModalEditing/>
                            <ModalRequestEditing/>
                            <ModalShipsList/>
                        </ButtonsContainer>
                    </ActionsContainer>
                    <ShipsInfoContainer>
                        <BercoShipsTitle>Berços e Navios</BercoShipsTitle>
                        <ShipsList
                            headerTitleColumns={['Berços', 'Situação']}
                            table='dashboard'/>
                    </ShipsInfoContainer>
                            <SolicitationsContainer>
                                <SolicitationsTitle>Últimas Solicitações</SolicitationsTitle>
                                <SolicitationBox>Solicitação vai aqui 1</SolicitationBox>
                                <SolicitationBox>Solicitação vai aqui 2</SolicitationBox>
                                <SolicitationBox>Solicitação vai aqui 3</SolicitationBox>
                                <SolicitationBox>Solicitação vai aqui 4</SolicitationBox>
                            </SolicitationsContainer>
                </UserContainer>
            </Container>
        </>
    )
}


export default UserActionsPage