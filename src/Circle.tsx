import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(p) => p.bgColor};
  border-radius: 100px;
  border: 1px solid ${(p) => p.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

const Circle = ({
  bgColor,
  borderColor,
}: CircleProps) /* (props: CircleProps)  */ => {
  //   const [counter, setCounter] = useState<string | number>(); //counter가 string 또는 number로 사용할수 있음
  const [value, setValue] = useState();
  return (
    <Container
      bgColor={bgColor}
      borderColor={borderColor ?? bgColor}
    ></Container>
  );
};

export default Circle;
