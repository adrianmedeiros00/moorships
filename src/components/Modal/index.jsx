import React from 'react'
import ShipsList from '../ShipsList/index'
import { Button } from '../../pages/User/styles'
import { 
    ModalContainer,
    ModalTable,
    HeaderTable,
    TableTitle,
    Pagination 
} from './styles'


const Modal = () => {
    return (
        <ModalTable>
            <ModalContainer>
            <HeaderTable>
                        <TableTitle>Todas as atracações</TableTitle>
                        </HeaderTable>
                        <ShipsList headerTitleColumns={['Navio', 'Berço', 'Entrada', 'Saída']}
                            infoColumns={['info1', 'info2', 'info3', 'info4']}
                            rowsAmount={8}
                        />
                    <Pagination>
                    <Button style={{width: '70px', height: '30px', marginRight:'30px'}}>Voltar</Button>
                    <Button style={{width: '70px', height: '30px'}}>Próxima</Button>
                    </Pagination>
            </ModalContainer>
        </ModalTable>
    )
}


export default Modal