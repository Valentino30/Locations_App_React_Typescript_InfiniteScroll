import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: chocolate;
  text-transform: uppercase;
  width: fit-content;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  padding: 10px;
  border: none;
  color: inherit;
  height: 50px;

  &:hover {
    background-color: coral;
  }
`;
