import styled from 'styled-components'
import { Colors } from '../../assets/constants/Colors'

export const Container = styled.div`
  height: 100vh;
  width: 70%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const WelcomeText = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Colors.secondaryColor};
    font-weight: lighter;
    font-size: 20px;
`

export const UserContainer = styled.div`
    display: flex;
    padding: 50px;
    align-items: center;
    justify-content: center;
    background-color: white;
    flex-direction: column;
    max-height: auto;
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
`

export const BercoShipsTitle = styled.h1`
  color: ${Colors.secondaryColor};
  display: flex;
  align-items: center;
  margin: 25px auto 15px 0;
`

export const ShipsInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 450px;
`

export const ActionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%; 
    max-width: 450px;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 12px;
`

export const ActionsTitle = styled.h1`
  color: ${Colors.secondaryColor};
  display: flex;
  align-items: center;
  margin: 0 auto 15px 0;
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  border-radius: 4px;
  height: 40px;
  width: 144px;
  max-width: 150px;
  padding: 10px;
  outline: none;
  border: none;
  color: white;
  background-color: ${Colors.quaternaryColor};
  :hover {
    background-color: ${Colors.primaryColor};
    cursor: pointer;
  }
`
export const SolicitationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  margin-bottom: 12px;
`

export const SolicitationsTitle = styled.h1`
    color: ${Colors.secondaryColor};
    display: flex;
    align-items: center;
    margin: 25px auto 15px 0;
`

export const SolicitationBox = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 5px;
  padding: 20px;
  border: 1px ${Colors.secondaryColor} solid;
  background-color: ${Colors.quaternaryColor};
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  color: ${Colors.secondaryColor};
  border-radius: 5px;
`


