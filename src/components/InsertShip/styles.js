import styled from 'styled-components'
import { Colors } from '../../assets/constants/Colors'


export const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Select = styled.select`
    display: flex;
    padding: 10px;
    width: 100%;
    height: 50px;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 32px;
    border: none;
    outline: none;
    color: ${Colors.secondaryColor};
    background-color: ${Colors.background};
    border-radius: 5px;
`

export const SelectTitle = styled.h2`
    color: ${Colors.primaryColor};
    margin-bottom: 10px;
`