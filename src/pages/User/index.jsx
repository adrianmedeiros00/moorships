import React, { useState } from 'react'
import ShipsList from '../../components/ShipsList/index'
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
                            <Button onClick={() => setModalTableVisible(!isModalTableVisible)}>Ver Atracações</Button>
                        </ButtonsContainer>
                    </ActionsContainer>
                    <SolicitationsContainer>
                            <SolicitationsTitle>Últimas Solicitações</SolicitationsTitle>
                            <SolicitationBox>Solicitação vai aqui 1</SolicitationBox>
                            <SolicitationBox>Solicitação vai aqui 2</SolicitationBox>
                            <SolicitationBox>Solicitação vai aqui 3</SolicitationBox>
                            <SolicitationBox>Solicitação vai aqui 4</SolicitationBox>
                        </SolicitationsContainer>
                    <ShipsInfoContainer>
                        <ActionsTitle>Berços e Navios</ActionsTitle>
                        <ShipsList
                            headerTitleColumns={['Berços disponíveis', 'Navios na fila']}
                            infoColumns={['info1', 'info2']}
                            rowsAmount={5} />
                    </ShipsInfoContainer>
                </UserContainer>
            </Container>
        </>
    )
}


export default UserActionsPage