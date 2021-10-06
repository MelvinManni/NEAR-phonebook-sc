import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.main`
  width: 100%;
  text-align: center;
`;
export default function Login({ onClick }) {
  return (
    <Wrapper>
      <h1>Welcome to Booker!</h1>
      <p>To make use of Booker, you need to sign in. The button below will sign you in using NEAR Wallet.</p>

      <p style={{ marginTop: "2.5em" }}>
        <Button onClick={onClick}>Sign in</Button>
      </p>
    </Wrapper>
  );
}
