import React from 'react'
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
    ButtonsContainer,
    SolicitationsContainer,
    ShipsInfoContainer,
    BercoShipsTitle,
    ExitIcon,
    SolicitationsTitle,
} from './styles'
import ShipsQueue from '../../components/ShipsQueue'
import Solicitations from '../../components/Solicitations';

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
                            <ModalRequestEditing/>
                            <ModalShipsList/>
                        </ButtonsContainer>
                    </ActionsContainer>
                    <ShipsInfoContainer>
                        <BercoShipsTitle>Berços e Navios</BercoShipsTitle>
                        <ShipsList
                            headerTitleColumns={['Berços', 'Situação', 'Fila']}
                            infoColumns={['1', 'ocupado', <ShipsQueue/>]}
                            rowsAmount={5}/>
                    </ShipsInfoContainer>
                            <SolicitationsContainer>
                                <SolicitationsTitle>Solicitações</SolicitationsTitle>
                                <Solicitations/>
                                <Solicitations/>
                                <Solicitations/>
                                <Solicitations/>
                            </SolicitationsContainer>
                </UserContainer>
            </Container>
        </>
    )
}


export default UserActionsPage