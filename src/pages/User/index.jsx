import React, { useState } from 'react'
import Footer from '../../layout/Footer'
import ShipsList from '../../components/ShipsList/index'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CloseToToneIcon from '@material-ui/icons/CloseTwoTone'
import { ExitToApp } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { Header, Title } from '../Home/styles'
import ModalShipsList from '../../components/ModalShipsList';
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
    ShipsInfoContainer,
} from './styles'
import InsertShip from '../../components/InsertShip';
import ModalRequestEditing from '../../components/ModalRequestEditing';


const UserActionsPage = ({ user, actionType }) => {

    const [isModalTableVisible, setModalTableVisible] = useState(false)
    const [isModalInsertVisible, setModalInsertVisible] = useState(false)
    const [isModalSolicitationEditingVisible, setModalSolicitationEditingVisible] = useState(false)

    return (
        <>
            {isModalSolicitationEditingVisible &&
                <>
                    <ModalRequestEditing />
                    <Button onClick={() => setModalSolicitationEditingVisible(!isModalSolicitationEditingVisible)} style={{ width: '30px', height: '30px', position:'absolute', marginLeft:'85.8%'}}>
                        <CloseToToneIcon fontSize='small' />
                    </Button>
                </>
            }
            {isModalTableVisible &&
                <>
                    <ModalShipsList />
                    <Button onClick={() => setModalTableVisible(!isModalTableVisible)} style={{ width: '30px', height: '30px', position:'absolute', marginLeft:'85.8%'}}>
                        <CloseToToneIcon fontSize='small' />
                    </Button>
                </>
            
            }

            {isModalInsertVisible && 
            <>
                    <InsertShip />
                    <Button onClick={() => setModalInsertVisible(!isModalInsertVisible)} style={{ width: '30px', height: '30px', position:'absolute', marginLeft:'85.8%'}}>
                        <CloseToToneIcon fontSize='small' />
                    </Button>
            </>
            }

            <Container>
                <Header>
                    <Title>ShipsMoor</Title>
                    <WelcomeText>Bem-vindo, {user}<AccountCircleIcon fontSize='large' style={{ marginLeft: '10px', fontSize: '45px' }} /></WelcomeText>
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
                            <Button onClick={() => setModalInsertVisible(!isModalInsertVisible)}>Inserir Navio</Button>
                            <Button onClick={() => setModalSolicitationEditingVisible(!isModalSolicitationEditingVisible)}>{actionType}</Button>
                            <Button onClick={() => setModalTableVisible(!isModalTableVisible)}>Atracações</Button>
                        </ButtonsContainer>
                        <SolicitationsContainer>
                            <SolicitationsTitle>Ultimas Solicitações</SolicitationsTitle>
                            <SolicitationBox>Solicitação vai aqui 1</SolicitationBox>
                            <SolicitationBox>Solicitação vai aqui 2</SolicitationBox>
                            <SolicitationBox>Solicitação vai aqui 3</SolicitationBox>
                            <SolicitationBox>Solicitação vai aqui 4</SolicitationBox>
                        </SolicitationsContainer>
                    </ActionsContainer>
                    <ShipsInfoContainer>
                        <ActionsTitle>Berços e Navios</ActionsTitle>
                        <ShipsList
                            headerTitleColumns={['Berços disponíveis', 'Navios na fila']}
                            infoColumns={['info1', 'info2']}
                            rowsAmount={5} />
                    </ShipsInfoContainer>
                </UserContainer>
            </Container>
            <Footer />
        </>
    )
}


export default UserActionsPage