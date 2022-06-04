import styled from "styled-components";

import { HeaderProps } from ".";

export const StyledHeader = styled.h3<HeaderProps>`
  text-transform: ${({ capitalize }) => capitalize && "capitalize"};
  text-align: center;
  width: 100%;
`;
