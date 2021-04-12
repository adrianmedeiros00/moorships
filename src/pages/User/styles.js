import styled from 'styled-components'
import { Colors } from '../../assets/constants/Colors'
import {Link} from 'react-router-dom'

export const Container = styled.div`
  height: 100vh;
  width: 70%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ExitIcon = styled(Link)`
  text-decoration: none;
  color: #DC143C;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:22px;
  font-weight: bold;
  :hover{
   color: red;
  }
`


export const UserContainer = styled.div`
    display: flex;
    font-weight: bold;
    font-size: 20px;
    padding: 45px;
    justify-content: space-between;
    background-color: white;
    flex-direction: row;
    max-height: auto;
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);

    @media(max-width: 1293px){
      flex-direction: column;
      align-items: center;
      width: auto;
    }

`

export const BercoShipsTitle = styled.h1`
  color: ${Colors.secondaryColor};
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const ShipsInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 390px;
`

export const ActionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%; 
    font-size: 16px;
    font-weight: bold;
`

export const ActionsTitle = styled.h1`
  color: ${Colors.secondaryColor};
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 20px;
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media(max-width: 1293px){
      flex-direction: row;
    }
`


export const SolicitationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 275px;
  @media(max-width: 1293px){
      max-width: 100%;
    }
`


export const SolicitationsTitle = styled.h1`
    color: ${Colors.secondaryColor};
    margin-bottom: 10px;
    @media(max-width: 1293px){
      margin-top: 20px;
    }
`


