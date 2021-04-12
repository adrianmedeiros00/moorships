import React, { useEffect, useState } from 'react'
import {
    Box,
    Button,
    Text,
    Tooltip
} from '@chakra-ui/react'
import {
    CheckIcon,
    CloseIcon
} from '@chakra-ui/icons'
import { Colors } from '../../assets/constants/Colors'
import { TextContent } from './styles'
import server from '../../config/axios'

const Solicitations = ({solicitation_id, ship_id, slot, description}) => {
    const [ship, setShip] = useState({})

    useEffect(() => {
        async function getShip() {
            const response = await server.get(`/ships/${ship_id}`)

            setShip(response.data)
            console.log(response.data)
        }
        getShip()
    }, [ship_id])

    async function handleSubmitSolicitation () {
        try{
            if(slot !== "0"){
                await server.put(`/ships/${ship_id}`, {
                    slot
                })
                await server.delete(`/solicitations/${solicitation_id}`)
            } else {
                await server.delete(`/ships/${ship_id}`)
                await server.delete(`/solicitations/${solicitation_id}`)
            }
        } catch(err) {
            console.log(err.message)
        }
    }

    async function handleDeleteSolicitation () {
        try{
            await server.delete(`/solicitations/${solicitation_id}`)
        } catch(err) {
            console.log(err.message)
        }
    }

    return (
    <>
        <Box 
            bg={Colors.secondaryColor} 
            w='100%'
            h='auto' 
            color='white' 
            display='flex' 
            flexDirection='row' 
            justifyContent='space-between'
            alignItems='center'
            borderRadius='md'
            mb='10px'
        >
       <TextContent>
            <Text  fontWeight='light' fontSize='sm' ml='10px'>{`${ship.name}`}</Text>
            {slot !== '0' && <Text  fontWeight='light' fontSize='sm' ml='10px'>{`Alocação para o berço: ${slot}`}</Text>}
            <Text  fontWeight='light' fontSize='sm' ml='10px'>{`${description}`}</Text>
       </TextContent>
            <Box h='100%'>
                <Tooltip label='Executar solicitação'>
                    <Button h='100%'  size='sm' colorScheme='green' borderRadius='none' fontWeight='light'
                    onClick={() => handleSubmitSolicitation()}>
                        <CheckIcon/>
                    </Button>
                </Tooltip>
                <Tooltip label='Recusar solicitação'>
                    <Button h='100%' size='sm' colorScheme='red'  borderRadius='0 5px 5px 0' fontWeight='light'
                    onClick={() => handleDeleteSolicitation()}>
                        <CloseIcon w='10px' h='10px' />
                    </Button>
                </Tooltip>
        </Box>
        </Box>
</>
       
    )

}

export default Solicitations