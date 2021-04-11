import styled from 'styled-components'
import { Colors } from '../../assets/constants/Colors'

export const SolicitationEditingContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const TextBoxTitle = styled.h2`
    color: ${Colors.primaryColor};
    margin: 15px 0;
    font-size: 18px;
    font-weight: bold;
`
export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;     
    width: 45%
`

export const TextBox = styled.textarea`
    height: 128px;
    background-color: ${Colors.background};
    width: 100%;
    display: flex;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
    border-radius: 10px
`