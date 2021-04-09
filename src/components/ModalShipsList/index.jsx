import React from 'react'
import ShipsList from '../ShipsList/index'
import { Button } from '../../pages/User/styles'
import {
    ModalContainer,
    Modal,
    Header,
    Title,
    Pagination
} from './styles'


const ModalShipsList = () => {
    return (
        <ModalContainer>
            <Modal>
                <Header>
                    <Title>Todas as atracações</Title>
                </Header>
                <ShipsList headerTitleColumns={['Navio', 'Berço', 'Entrada', 'Saída']}
                    infoColumns={['info1', 'info2', 'info3', 'info4']}
                    rowsAmount={8}
                />
                <Pagination>
                    <Button style={{ width: '70px', height: '30px', marginRight: '30px' }}>Voltar</Button>
                    <Button style={{ width: '70px', height: '30px' }}>Próxima</Button>
                </Pagination>
            </Modal>
        </ModalContainer>
    )
}


export default ModalShipsList