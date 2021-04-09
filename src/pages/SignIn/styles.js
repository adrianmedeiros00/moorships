import styled from "styled-components";
import { Colors } from "../../assets/constants/Colors";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${Colors.quaternaryColor};
  font-size: 50px;
`;


