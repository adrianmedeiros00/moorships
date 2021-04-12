import React from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    List,
    ListItem,
    ListIcon,
    Button
} from "@chakra-ui/react"
import { MdCheckCircle } from "react-icons/md"

const ShipsQueue = () => {
    return (
        <Popover colorScheme='blue'>
            <PopoverTrigger>
                <Button fontWeight='light' colorScheme='blue'>Visualizar</Button>
            </PopoverTrigger>
            <PopoverContent color='black'  >
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Navios</PopoverHeader>
                <PopoverBody>
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color="green.500" />
                            Navio Tal
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color="green.500" />
                            Navio fulano
                         </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color="green.500" />
                            Navio canoa
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color="green.500" />
                            Navio Voador
                        </ListItem>
                    </List>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}


export default ShipsQueue