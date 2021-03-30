import React, { useState } from 'react'
import Footer from '../../layout/Footer'
import ShipsList from '../../components/ShipsList/index'
import { Colors } from '../../assets/constants/Colors'
import CloseToToneIcon from '@material-ui/icons/CloseTwoTone'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { ExitToApp } from '@material-ui/icons'
import { Link } from 'react-router-dom'
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
    ShipsInfoContainer,
    FullTable,
    TableTitle,
    HeaderTable
} from './styles'


const UserActionsPage = ({ user, actionType }) => {

    const [isFullTableVisible, setFullTableVisible] = useState(false)



    return (
        <>
            <Container>
                <Header>
                    <Title>ShipsMoor</Title>
                    <WelcomeText>Bem-vindo, {user}<AccountCircleIcon fontSize='large' style={{marginLeft:'10px', fontSize:'45px'}} /></WelcomeText>
                    <Link to='/signin'
                        style={{
                            textDecoration: 'none',
                            color: `${Colors.secondaryColor}`,
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
                
                {isFullTableVisible ? 
                <FullTable>
                    <HeaderTable>
                        <TableTitle>Todas as atracações</TableTitle>
                            <Button onClick={()=>setFullTableVisible(!isFullTableVisible)} style={{width:'30px', height:'30px'}}>
                                <CloseToToneIcon fontSize='small'/>
                            </Button>
                    </HeaderTable>
                    <ShipsList headerTitleColumns={['Navio', 'Berço', 'Entrada', 'Saída']}
                        infoColumns={['info1', 'info2', 'info3', 'info4']}
                        rowsAmount={10} 
                    />
                </FullTable>
                : <>
                <ActionsContainer>
                <ActionsTitle>Ações</ActionsTitle>
                <ButtonsContainer>
                    <Button>Inserir Navio</Button>
                    <Button>{actionType}</Button>
                    <Button onClick={() => setFullTableVisible(!isFullTableVisible)}>Atracações</Button>
                </ButtonsContainer>
                <SolicitationsContainer>
                    <SolicitationsTitle>Ultimas Solicitações</SolicitationsTitle>
                    <SolicitationBox>Solicitação vai aqui 1</SolicitationBox>
                    <SolicitationBox>Solicitação vai aqui 2</SolicitationBox>
                    <SolicitationBox>Solicitação vai aqui 3</SolicitationBox>
                    <SolicitationBox>Solicitação vai aqui 4</SolicitationBox>
                    <SolicitationBox>Solicitação vai aqui 5</SolicitationBox>
                    <SolicitationBox>Solicitação vai aqui 6</SolicitationBox>
                </SolicitationsContainer>
            </ActionsContainer>
            <ShipsInfoContainer>
                <ActionsTitle>Berços e Navios</ActionsTitle>
                <ShipsList
                    headerTitleColumns={['Berços disponíveis', 'Navios na fila']}
                    infoColumns={['info1', 'info2']}
                    rowsAmount={10} />
            </ShipsInfoContainer>
            </>
                }
                
                    
                </UserContainer>
            </Container>
            <Footer />
        </>
    )
}


export default UserActionsPage