import { ReactNode } from "react";
import { StyledDiv } from "./styles";

export type ContainerProps = {
  firstChildWidth?: string;
  children: ReactNode;
  fullWidth?: boolean;
  borderTop?: string;
  overflow?: string;
  height?: string;
  id?: string;
};

export default function Container({
  firstChildWidth,
  fullWidth,
  borderTop,
  overflow,
  children,
  height,
  id,
}: ContainerProps) {
  return (
    <StyledDiv
      firstChildWidth={firstChildWidth}
      fullWidth={fullWidth}
      borderTop={borderTop}
      overflow={overflow}
      height={height}
      id={id}
    >
      {children}
    </StyledDiv>
  );
}
