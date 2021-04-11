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


const ModalRequestEditing = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [newBercoVisibility, setNewBercoVisibility] = useState(false)
    const [description, setDescription] = useState([])

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
                                <option value="Navio 1">Navio 1</option>
                                <option value="Navio 2">Navio 2</option>
                                <option value="Navio 3">Navio 3</option>
                                <option value="Navio 4">Navio 4</option>
                                <option value="Navio 5">Navio 5</option>
                                <option value="Navio 6">Navio 6</option>
                                <option value="Navio 7">Navio 7</option>
                            </Select>
                            <TextBoxTitle>Ações</TextBoxTitle>
                                    <ButtonsContainer>
                                    <Button onClick={() => setNewBercoVisibility(!newBercoVisibility)} colorScheme='blue' fontWeight='light'>Novo berço</Button>
                                    {newBercoVisibility &&
                                    <>
                                    <SelectContainer>
                                        <Select size='lg' onChange={() => setDescription(description + '"novo berço selecionado " ')}>
                                            <option value="Berco 1">Berco 1</option>
                                            <option value="Berco 2">Berco 2</option>
                                            <option value="Berco 3">Berco 3</option>
                                            <option value="Berco 4">Berco 4</option>
                                            <option value="Berco 5">Berco 5</option>
                                            <option value="Berco 6">Berco 6</option>
                                            <option value="Berco 7">Berco 7</option>
                                        </Select>
                                    </SelectContainer>
                                        </>
                                    }
                                    <Button colorScheme='red' fontWeight='light' onClick={() => setDescription(description + 'Remover do berço ')}>Remoção</Button>
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