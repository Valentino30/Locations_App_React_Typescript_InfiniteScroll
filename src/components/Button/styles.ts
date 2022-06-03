import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: royalblue;
  text-transform: uppercase;
  width: fit-content;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  padding: 10px;
  border: none;
  color: white;
  height: 50px;

  &:hover {
    background-color: dodgerblue;
  }
`;
