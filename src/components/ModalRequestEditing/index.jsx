import React, {  useState } from 'react'
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
import { SolicitationEditingContainer, TextBoxTitle, ButtonsContainer, SelectContainer } from './styles';
import { StyledButton } from '../ModalInsertShip/styles'


const ModalRequestEditing = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [visibility, setVisibility] = useState(false)


     return (
        <>
            <Button onClick={onOpen} colorScheme='blue' fontWeight='light'  w='128px' mb='20px'>Solicitar Edição</Button>
            <Modal size='xl' isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Solicitar Edição</ModalHeader>
                    <ModalCloseButton  onClick={() => setVisibility(false)} />
                    <ModalBody>
                        <SolicitationEditingContainer>
                            <TextBoxTitle>Selecione o navio para solicitar edição</TextBoxTitle>
                            <Select size='lg' >
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
                                    <Button onClick={() => setVisibility(!visibility)} colorScheme='blue' fontWeight='light'>Escolher Destino</Button>
                                    {visibility &&
                                    <>
                                    <SelectContainer>
                                        <Select  size='lg' >
                                            <option value="Berco 1">Berco 1</option>
                                            <option value="Berco 2">Berco 2</option>
                                            <option value="Berco 3">Berco 3</option>
                                            <option value="Berco 4">Berco 4</option>
                                            <option value="Berco 5">Berco 5</option>
                                            <option value="Berco 6">Berco 6</option>
                                            <option value="Berco 7">Berco 7</option>
                                            <option value="Remover">Remover</option>
                                        </Select>
                                    </SelectContainer>
                                        </>
                                    }
                                    </ButtonsContainer>
                            <StyledButton onClick={onClose} colorScheme='blue' fontWeight='light'>Enviar solicitação</StyledButton>
                        </SolicitationEditingContainer>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalRequestEditing