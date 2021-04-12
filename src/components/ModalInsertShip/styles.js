import styled from 'styled-components'
import { Colors } from '../../assets/constants/Colors'
import { Button } from '@chakra-ui/react'

export const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledButton = styled(Button)`
    margin-top:30px;
`

export const Title = styled.h2`
    color: ${Colors.primaryColor};
    margin: 15px 0;
    font-size:18px;
    font-weight: bold;
`