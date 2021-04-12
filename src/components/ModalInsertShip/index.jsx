import React, {useState, useEffect} from 'react'
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
import server from '../../config/axios'

const InsertShip = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const [name, setName] = useState()
    const [type, setType] = useState('Petroleiro')
    const [slot, setSlot] = useState()

    const [slots, setSlots] = useState([])

    useEffect(() => {
        async function getSlots() {
            const response = await server.get('/slots')
            setSlot(response.data[0].id)
            setSlots(response.data)
        }
        getSlots()
    }, [])

    async function handleInsertShip () {
        try {
            const response = await server.post('ships', {
                name,
                type,
                slot: Number(slot),
            })
    
            console.log(response.data)
        } catch(err) {
            console.log(err.message)
        }
    }

    const availableSlots = slots.filter(slot => slot.situation === "Vazio")

    return (
        <>
            <Button onClick={onOpen} colorScheme='blue' fontWeight='light'>Inserir Navio</Button>
            <Modal size='xl' isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Inserir Navio</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Title>Insira o nome do navio</Title>
                        <Input onChange={(e) => setName(e.target.value)}/>
                        <SelectContainer>
                            <Title>Selecione o tipo navio</Title>
                            <Select value={type} onChange={(e) => setType(e.currentTarget.value)} size='lg' >
                                <option value="Petroleiro">Petroleiro</option>
                                <option value="Graneleiro">Graneleiro</option>
                                <option value="Cargueiro">Cargueiro</option>
                                <option value="Gáseiro">Gáseiro</option>
                                <option value="Porta-container">Porta-container</option>
                                <option value="Tanque">Tanque</option>
                                <option value="Aviso">Aviso</option>
                            </Select>
                            <Title>Selecione o berço</Title>
                            <Select value={slot} onChange={(e) => setSlot(e.currentTarget.value)} size='lg' >
                                {availableSlots.length > 0 ? availableSlots.map((slot) => 
                                    <option value={slot.id}>{`Berço ${slot.id}`}</option>
                                ) : null}

                            </Select>
                            <StyledButton onClick={() => {handleInsertShip()}} colorScheme='blue' fontWeight='light'>Confirmar</StyledButton>
                        </SelectContainer>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
export default InsertShip