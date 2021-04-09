import styled from 'styled-components'
import { Colors } from '../../assets/constants/Colors'

export const SolicitationEditingContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const TextBoxTitle = styled.h2`
    color: ${Colors.primaryColor};
    margin-bottom: 10px;
`

export const TextBox = styled.textarea`
    height: 138px;
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