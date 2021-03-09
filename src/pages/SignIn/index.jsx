import React from "react";
import SignInContainer from "../../components/SignInContainer";

import { Container, Title } from "./styles";

export default function SignIn({ title }) {
  return (
    <>
      <Container>
        <Title>{title}</Title>
        <SignInContainer />
      </Container>
    </>
  );
}
