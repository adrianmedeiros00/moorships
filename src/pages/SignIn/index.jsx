import React from "react";
import SignInContainer from "../../components/SignInContainer";
import { Container, Title } from "./styles";

export default function SignIn() {
  return (
    <>
      <Container>
        <Title>ShipsMoor</Title>
        <SignInContainer />
      </Container>
    </>
  );
}
