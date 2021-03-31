import styled from 'styled-components'
import { Colors } from '../../assets/constants/Colors'

export const FooterContainer = styled.footer`
    display: flex;
    width: 100%;
    height: 90px;
    background-color: ${Colors.secondaryColor};
    align-items: center;
    justify-content: center;
    margin-top: 100vh;
`

export const FooterText = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
` 