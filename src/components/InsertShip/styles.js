import styled from 'styled-components'
import { Colors } from '../../assets/constants/Colors'


export const SelectContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Select = styled.select`
    display: flex;
    padding: 10px;
    width: 40%;
    height: 40px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    outline: none;
    color: black;
    background-color: ${Colors.terciaryColor};
`