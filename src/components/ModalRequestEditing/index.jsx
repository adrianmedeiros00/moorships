import React, { useEffect, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Select
} from "@chakra-ui/react"
import { SolicitationEditingContainer, TextBoxTitle, TextBox, ButtonsContainer, SelectContainer } from './styles';
import { StyledButton } from '../ModalInsertShip/styles'
import server from '../../config/axios'


const ModalRequestEditing = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [newBercoVisibility, setNewBercoVisibility] = useState(false)
    const [description, setDescription] = useState([])
    const [ships, setShips] = useState([])

    useEffect(() => {
        async function getShips() {
            const response = await server.get('/ships')
            setShips(response.data)
        }

        getShips()
    }, [])

     return (
        <>
            <Button onClick={onOpen} colorScheme='blue' fontWeight='light' >Solicitar Edição</Button>
            <Modal size='xl' isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Solicitar Edição</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <SolicitationEditingContainer>
                            <TextBoxTitle>Selecione o navio para solicitar edição</TextBoxTitle>
                            <Select size='lg' onChange={() => setDescription(description + '"navio selecionado " ')}>
                                {ships.map(ship => (
                                    <option value={ship.id}>{ship.name}</option>
                                ))}
                            </Select>
                            <TextBoxTitle>Ações</TextBoxTitle>
                                    <ButtonsContainer>
                                    <Button onClick={() => setNewBercoVisibility(!newBercoVisibility)} colorScheme='blue' fontWeight='light'>Definir destino</Button>
                                    {newBercoVisibility &&
                                    <>
                                    <SelectContainer>
                                        <Select size='lg' onChange={() => setDescription(description + '"novo berço selecionado " ')}>
                                            <option value="1">Berco 1</option>
                                            <option value="2">Berco 2</option>
                                            <option value="3">Berco 3</option>
                                            <option value="4">Berco 4</option>
                                            <option value="0">Remover</option>
                                        </Select>
                                    </SelectContainer>
                                        </>
                                    }
                                    </ButtonsContainer>
                            <TextBoxTitle>Descrição</TextBoxTitle>
                            <TextBox value={description}/>
                                    <Button colorScheme='red' variant='ghost' fontWeight='light' onClick={() => setDescription('')}>Apagar</Button>
                            <StyledButton onClick={onClose} colorScheme='blue' fontWeight='light'>Enviar</StyledButton>
                        </SolicitationEditingContainer>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalRequestEditing