import styled from "styled-components";

import { ContainerProps } from ".";

export const StyledDiv = styled.div<ContainerProps>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "80%")};
  border-top: ${({ borderTop }) => borderTop && borderTop};
  overflow: ${({ overflow }) => overflow && overflow};
  height: ${({ height }) => height && height};
  flex-direction: column;
  align-items: center;
  display: flex;
  margin: auto;
  & div {
    width: ${({ firstChildWidth }) => firstChildWidth && firstChildWidth};
  }
`;
