import styled from "styled-components";
import backgroundImage from "../../assets/images/docknight.jpg";


export const Container = styled.div`
  height: 100vh;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: url(${backgroundImage}) no-repeat right top fixed;
`;


export const Title = styled.h1`
  color: white;
  text-shadow: 0.05em 0.1em 0.3em black;
  font-size: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;


