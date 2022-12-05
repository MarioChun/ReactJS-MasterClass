import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(p) => p.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(p) => p.theme.textColor};
`;

function App() {
  return (
    <Container>
      <H1>Hello</H1>
    </Container>
  );
}

export default App;
