import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalCloseButton,
    Button,
    useDisclosure,
    Select
} from "@chakra-ui/react"
import ShipsList from '../ShipsList/index'

const ModalEditing = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen} colorScheme='blue' fontWeight='light'>Editar</Button>
            <Modal size='xl' isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Editar</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <ShipsList
                            headerTitleColumns={['Navio', 'Berço', 'Ação']}
                            infoColumns={[<Select name='navio' />, <Select name='berço' />,<Button colorScheme='red' fontWeight='light'>Remover</Button>]}
                            rowsAmount={6} 
                        />
                    </ModalBody>
                        <ModalFooter>
                            <Button onClick={onClose} colorScheme='blue' variant='ghost' fontWeight='light'>
                                Cancelar
                            </Button>
                            <Button onClick={onClose} colorScheme='blue' fontWeight='light'>
                                Enviar
                            </Button>
                        </ModalFooter>
                </ModalContent>
            </Modal>
        </>

    )
}


export default ModalEditing