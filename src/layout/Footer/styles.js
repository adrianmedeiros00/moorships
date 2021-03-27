import styled from 'styled-components'
import { Colors } from '../../assets/constants/Colors'

export const FooterContainer = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 90px;
    background-color: ${Colors.secondaryColor};
    align-items: center;
    justify-content: center;
    bottom: 0;
`

export const FooterText = styled.p`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    color: white;
` 