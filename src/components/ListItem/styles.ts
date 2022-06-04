import styled from "styled-components";

export const StyledLi = styled.li`
background-color: #5a9698;
  flex-direction: column;
  margin-bottom: 20px;
  border-radius: 4px;
  align-items: left;
  display: flex;
  padding: 20px;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    transition: transform 0.5s;
    border-bottom: 2px solid white;
  }
`;
