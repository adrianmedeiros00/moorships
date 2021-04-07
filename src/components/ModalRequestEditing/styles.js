import styled from 'styled-components'
import { Colors } from '../../assets/constants/Colors'

export const SolicitationEditingContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const TextBoxTitle = styled.h2`
    margin-bottom: 10px;
    color: ${Colors.terciaryColor};
`

export const TextBox = styled.textarea`
    height: 150px;
    width: 50%;
    display: flex;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
    border-radius: 10px
`