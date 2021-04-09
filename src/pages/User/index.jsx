import React, { useState } from 'react'
import ShipsList from '../../components/ShipsList/index'
import CloseToToneIcon from '@material-ui/icons/CloseTwoTone'
import { ExitToApp } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { Header, Title } from '../Home/styles'
import InsertShip from '../../components/InsertShip';
import ModalShipsList from '../../components/ModalShipsList';
import ModalRequestEditing from '../../components/ModalRequestEditing';
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
} from './styles'


const UserActionsPage = ({ actionType }) => {
    return (
        <>
            <Container>
                <Header>
                    <Title>ShipsMoor</Title>
                    <Link to='/signin'
                        style={{
                            textDecoration: 'none',
                            color: '#DC143C',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '22px',
                            fontWeight: 'bold',
                        }}>
                        Finalizar sessão
                        <ExitToApp fontSize='large' style={{ marginLeft: '10px' }} />
                    </Link>
                </Header>
                <UserContainer>
                    <ActionsContainer>
                        <ActionsTitle>Ações</ActionsTitle>
                        <ButtonsContainer>
                            <InsertShip/>
                            <ModalRequestEditing/>
                            <ModalShipsList/>
                        </ButtonsContainer>
                    </ActionsContainer>
                    <ShipsInfoContainer>
                        <BercoShipsTitle>Berços e Navios</BercoShipsTitle>
                        <ShipsList
                            headerTitleColumns={['Berços disponíveis', 'Navios na fila']}
                            infoColumns={['info1', 'info2']}
                            rowsAmount={5} />
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