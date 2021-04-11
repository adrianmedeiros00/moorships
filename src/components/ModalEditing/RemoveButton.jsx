import React from 'react'
import { Button } from '@chakra-ui/react'

const RemoveButton = ({name}) => {
    return(
        <Button size='sm' colorScheme='red' fontWeight='light' >{name}</Button>
    )
}

export default RemoveButton