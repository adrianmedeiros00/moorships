import React from 'react'
import { Button } from '../../pages/User/styles'
import { HeaderTable, TableTitle, ModalTable, ModalContainer } from '../ModalShipsList/styles'
import { SelectContainer, Select } from './styles'


const InsertShip = () => {
    return (
        <ModalTable>
            <ModalContainer>
                <HeaderTable>
                    <TableTitle>Inserir Navio</TableTitle>
                </HeaderTable>
                <SelectContainer>
                    <Select name="ship" id="ships">
                        <option value="Navio 1">Navio 1</option>
                        <option value="Navio 2">Navio 2</option>
                        <option value="Navio 3">Navio 3</option>
                        <option value="Navio 4">Navio 4</option>
                        <option value="Navio 5">Navio 5</option>
                        <option value="Navio 6">Navio 6</option>
                        <option value="Navio 7">Navio 7</option>
                    </Select>
                    <Select name="bercos" id="bercos">
                        <option value="Berco 1">Berco 1</option>
                        <option value="Berco 2">Berco 2</option>
                        <option value="Berco 3">Berco 3</option>
                        <option value="Berco 4">Berco 4</option>
                        <option value="Berco 5">Berco 5</option>
                        <option value="Berco 6">Berco 6</option>
                        <option value="Berco 7">Berco 7</option>
                    </Select>
                    <Button>Confirmar</Button>
                </SelectContainer>
            </ModalContainer>
        </ModalTable>
    )
}

export default InsertShip