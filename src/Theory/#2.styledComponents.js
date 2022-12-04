import styled, { keyframes } from "styled-components";

const Title = styled.h1`
  color: tomato;
  &:hover {
    color: teal;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;

  h1 {
    color: blue;
    &:hover {
      color: teal;
    }
  }

  ${Title}:hover {
    font-size: 99px;
  }
`;

const Box = styled.div`
  backgroud-color:${(props) => props.bgColor}
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  color: tomato;
`;

const Input = styled.input.attrs({ require: true, maxLength: 10 })``;

const anima = keyframes`
from {
  color : tomato
}
to{
  color : teal
}`;

const BtnAnimation = styled.button`
  animation: ${anima} 5s infinite;
`;

function Theory() {
  return (
    <Wrapper>
      <Title>Hello</Title>
      <Box bgColor="red" />
      <Circle bgColor="blue" />
      <Btn>Login</Btn>
      <Btn as="a">Login</Btn>
      <Input />
      <Input />
      <BtnAnimation>Login</BtnAnimation>
    </Wrapper>
  );
}
