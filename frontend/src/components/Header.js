import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 15px;
`;

export default function Header({ loggedIn, signOut }) {
  return (
    <Nav>
      <img src="https://near.org/wp-content/themes/near-19/assets/img/logo.svg?t=1553011311" alt="NEAR Logo" />
      {loggedIn && <button onClick={signOut}>Sign Out</button>}
    </Nav>
  );
}
