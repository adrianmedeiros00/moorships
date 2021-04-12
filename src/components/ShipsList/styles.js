import styled from 'styled-components'
import { Colors } from '../../assets/constants/Colors'

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`

export const InfoContainer = styled.div`
  background-color: ${Colors.quaternaryColor};
  color: ${Colors.quintaColor};
  border-radius: 0 0 10px 10px;
`

export const HeaderRowColor = styled.div`
  background-color: ${Colors.secondaryColor};
  color: white;
  border-radius: 10px 10px 0 0;
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`

export const Column = styled.h2`
   font-weight: lighter;
   font-size: 20px;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 50px;
`
