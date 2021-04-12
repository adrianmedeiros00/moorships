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
import { SolicitationEditingContainer, TextBoxTitle, ButtonsContainer, SelectContainer } from './styles';
import { StyledButton } from '../ModalInsertShip/styles'
import server from '../../config/axios'


const ModalRequestEditing = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [ships, setShips] = useState([])
    const [slots, setSlots] = useState([])

    const [ship, setShip] = useState()
    const [slot, setSlot] = useState()
    const [email, setEmail] = useState()

    useEffect(() => {
        async function getShips() {
            try{
                const response = await server.get('/ships')
                setShip(response.data[0].id)
                setShips(response.data)
                console.log(response.data)
            } catch(err){
                console.log(err.message)
            }
        }
        getShips()
    }, [])

    useEffect(() => {
        async function getSlots() {
            try {
                const response = await server.get('/slots')
                setSlot(response.data[0].id)
                setSlots(response.data)
            } catch(err){
                console.log(err.message)
            }
        }
        getSlots()
    }, [])

    useEffect(() => {
        const userJson = localStorage.getItem('user')

        const user = JSON.parse(userJson)

        setEmail(user.email)
    }, [])

    async function handleSubmitSolicitation() {
        try{
            if(slot === "0") {
                const response = await server.post('/solicitations', {
                    ship_id: Number(ship),
                    slot: Number(slot),
                    email,
                    description: 'Remoção'
                })
                console.log(response.data)
            } else {
                const response = await server.post('/solicitations', {
                    ship_id: Number(ship),
                    slot: Number(slot),
                    email,
                    description: "Alocação"
                })
                console.log(response.data)
            }
        } catch(err) {
            return err.message
        }
    }

    const availableSlots = slots.filter(slot => slot.situation === "Vazio")

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
                            {ships.length > 0 ? (
                                        <Select size='lg' value={ship} onChange={(e) => setShip(e.currentTarget.value)}>
                                            {console.log(ship)}
                                            {ships.map((ship) => <option key={ship.id} value={`${ship.id}`}>{ship.name}</option>)}
                                        </Select>
                            ) : null}

                            <TextBoxTitle>Ações</TextBoxTitle>
                                    <ButtonsContainer>
                                    <SelectContainer>
                                        {availableSlots.length > 0 ? (
                                            <Select size='lg' value={slot} onChange={(e) => setSlot(e.currentTarget.value)}>
                                            {console.log(slot)}
                                            {availableSlots.map((slot) => 
                                                <option key={slot.id} value={`${slot.id}`}>{`Mover para berço ${slot.id}`}</option>
                                            )}
                                                <option value="0">Remover do berço</option>
                                            </Select>
                                        ) : null}    
                                    </SelectContainer>
                                    
                                    </ButtonsContainer>
                            <StyledButton onClick={() => handleSubmitSolicitation()} colorScheme='blue' fontWeight='light'>Enviar</StyledButton>
                        </SolicitationEditingContainer>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalRequestEditing