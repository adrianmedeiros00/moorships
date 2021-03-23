import React from 'react'
import { Link } from 'react-router-dom'
import ShipsList from '../../components/ShipsList/index'
import { Header, Title } from '../Home/styles'
import {
    Container,
    UserContainer,
    ActionsContainer,
    ActionsTitle,
    Button,
    SolicitationsTitle,
    ButtonsContainer,
    SolicitationsContainer,
    SolicitationBox,
    WelcomeText,
    ShipsInfoContainer
} from './styles'

const UserActionsPage = ({ user, actionType }) => {
    return (
        <Container>
            <Header>
                <Title>MoorShips</Title>
                <WelcomeText>Bem-vindo, {user}</WelcomeText>
                <Link to='/signin' style={{textDecoration:'none', width:'150px'}}>
                    <Button>Voltar</Button>
                </Link>
            </Header>
            <UserContainer>
                <ActionsContainer>
                    <ActionsTitle>Ações</ActionsTitle>
                    <ButtonsContainer>
                        <Button>Inserir Navio</Button>
                        <Button>{actionType}</Button>
                    </ButtonsContainer>
                    <SolicitationsContainer>
                        <SolicitationsTitle>Ultimas Solicitações</SolicitationsTitle>
                        <SolicitationBox>Solicitação vai aqui 1</SolicitationBox>
                        <SolicitationBox>Solicitação vai aqui 2</SolicitationBox>
                        <SolicitationBox>Solicitação vai aqui 3</SolicitationBox>
                        <SolicitationBox>Solicitação vai aqui 4</SolicitationBox>
                        <SolicitationBox>Solicitação vai aqui 4</SolicitationBox>
                    </SolicitationsContainer>
                </ActionsContainer>
                <ShipsInfoContainer>
                    <ShipsList headerTitleColumns={['Berços Disponíveis', 'Navios na Fila']} infoColumns={['info1', 'info2']} />
                </ShipsInfoContainer>
            </UserContainer>
        </Container>
    )
}


export default UserActionsPage