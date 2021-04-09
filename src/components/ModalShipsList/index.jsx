import React from 'react'
import ShipsList from '../ShipsList/index'

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
                            headerTitleColumns={['Navio', 'Berço', 'Entrada', 'Saída']}
                            infoColumns={['info1', 'info2', 'info3', 'info4']}
                            rowsAmount={6} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}


export default ModalShipsList