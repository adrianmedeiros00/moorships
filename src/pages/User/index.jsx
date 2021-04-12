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
    ButtonsContainer,
    SolicitationsContainer,
    ShipsInfoContainer,
    BercoShipsTitle,
    ExitIcon,
    SolicitationsTitle,
} from './styles'
import Solicitations from '../../components/Solicitations';
import server from '../../config/axios';
import { useHistory } from 'react-router';


const UserActionsPage = () => {
    const history = useHistory()
    const [role, setRole] = useState() 
    const [solicitationList, setSolicitationList] = useState([])

    useEffect(() => {
        async function getSolicitations() {
            const response = await server.get('/solicitations')
            setSolicitationList(response.data)
        }
        getSolicitations()
    }, [])
    
    useEffect(() => {
        const userJson = localStorage.getItem('user')

        const user = JSON.parse(userJson)

        setRole(user.role)
    }, [])

    const token = localStorage.getItem('token')

    const handleLogOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    if(!token){
        history.push('/signin')
    }

    return (
        <>
            <Container>
                <Header>
                    <Title>ShipsMoor</Title>
                    <ExitIcon onClick={() => handleLogOut()} to='/signin'>
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
                            headerTitleColumns={['Berços', 'Situação']}
                            table='dashboard'/>
                    </ShipsInfoContainer>
                            {solicitationList.length > 0 && role !== "Atracador" ? (
                                <SolicitationsContainer>
                                <SolicitationsTitle>Solicitações</SolicitationsTitle>
                                {solicitationList.map((solicitation) => (
                                    <Solicitations 
                                        key={solicitation.id} 
                                        solicitation_id={solicitation.id} 
                                        ship_id={solicitation.ship_id} 
                                        slot={solicitation.slot} 
                                        description={solicitation.description}
                                    />
                                ))}
                            </SolicitationsContainer>
                            ) : null}
                            
                </UserContainer>
            </Container>
        </>
    )
}


export default UserActionsPage