import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
} from "@chakra-ui/react"
import { SolicitationEditingContainer, TextBoxTitle, TextBox } from './styles';



const ModalRequestEditing = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button onClick={onOpen} colorScheme='blue' fontWeight='light' >undefined</Button>
            <Modal size='xl' isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Editar Solicitação</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <SolicitationEditingContainer>
                            <TextBoxTitle>Digite a edição que deseja realizar:</TextBoxTitle>
                            <TextBox/>
                            <Button colorScheme='blue' fontWeight='light'>Solicitar edição</Button>
                        </SolicitationEditingContainer>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalRequestEditing