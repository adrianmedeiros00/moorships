import React from 'react'
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

const Solicitations = () => {
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
            <Text  fontWeight='light' fontSize='sm' ml='10px'>Nome do Navio</Text>
            <Text  fontWeight='light' fontSize='sm' ml='10px'>novo berço?</Text>
            <Text  fontWeight='light' fontSize='sm' ml='10px'>Remoção ?</Text>
       </TextContent>
            <Box h='100%'>
                <Tooltip label='Executar solicitação'>
                    <Button h='100%'  size='sm' colorScheme='green' borderRadius='none' fontWeight='light'>
                        <CheckIcon/>
                    </Button>
                </Tooltip>
                <Tooltip label='Recusar solicitação'>
                    <Button h='100%' size='sm' colorScheme='red'  borderRadius='0 5px 5px 0' fontWeight='light'>
                        <CloseIcon w='10px' h='10px' />
                    </Button>
                </Tooltip>
        </Box>
        </Box>
</>
       
    )

}


export default Solicitations