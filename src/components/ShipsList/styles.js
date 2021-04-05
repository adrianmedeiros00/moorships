import styled from 'styled-components'
import { Colors } from '../../assets/constants/Colors'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  margin: auto;
  flex-direction: column;
`

export const InfoContainer = styled.div`
  background-color: ${Colors.primaryColor};
  color: black;
  border-radius: 0 0 10px 10px;
`

export const HeaderRowColor = styled.div`
  background-color: ${Colors.quaternaryColor};
  color: white;
  border-radius: 10px 10px 0 0;
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  
`


export const Column = styled.h2`
   border: 1px solid ${Colors.terciaryColor}; 
   font-weight: lighter;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 50px;
`
