import React from 'react'
import { SelectContainer, Title, StyledButton } from './styles'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Select,
    Input
} from "@chakra-ui/react"

const InsertShip = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen} colorScheme='blue' fontWeight='light'  w='128px' mb='20px'>Inserir Navio</Button>
            <Modal size='xl' isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Inserir Navio</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Title>Insira o nome do navio</Title>
                        <Input/>
                        <SelectContainer>
                            <Title>Selecione o tipo navio</Title>
                            <Select size='lg' >
                                <option value="Navio 1">Navio 1</option>
                                <option value="Navio 2">Navio 2</option>
                                <option value="Navio 3">Navio 3</option>
                                <option value="Navio 4">Navio 4</option>
                                <option value="Navio 5">Navio 5</option>
                                <option value="Navio 6">Navio 6</option>
                                <option value="Navio 7">Navio 7</option>
                            </Select>
                            <Title>Selecione o berço</Title>
                            <Select size='lg' >
                                <option value="Berco 1">Berco 1</option>
                                <option value="Berco 2">Berco 2</option>
                                <option value="Berco 3">Berco 3</option>
                                <option value="Berco 4">Berco 4</option>
                                <option value="Berco 5">Berco 5</option>
                                <option value="Berco 6">Berco 6</option>
                                <option value="Berco 7">Berco 7</option>
                            </Select>
                            <StyledButton onClick={onClose} colorScheme='blue' fontWeight='light'>Confirmar</StyledButton>
                        </SelectContainer>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
export default InsertShip