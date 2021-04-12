import React from 'react'
import ShipsList from '../ShipsList/index'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalCloseButton,
    Button,
    useDisclosure
} from "@chakra-ui/react"

const ModalShipsList = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen} colorScheme='blue' fontWeight='light'>Atracações</Button>
            <Modal size='xl' isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Todas as atracaçoes</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <ShipsList
                            headerTitleColumns={['Navio', 'Berço', 'Entrada', 'Tipo']}
                            table='home' 
                        />
                        <ModalFooter>
                        <Button onClick={onClose} colorScheme='red'  fontWeight='light'>Fechar</Button>
                        </ModalFooter>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}


export default ModalShipsList