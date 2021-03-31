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
  background-color: ${Colors.terciaryColor};
  color: #DCDCDC;
`

export const HeaderRowColor = styled.div`
  background-color: blueviolet;
  color: white;
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  
`


export const Column = styled.h2`
   border: 1px solid #1C1C1C; 
   font-weight: lighter;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 50px;
`
