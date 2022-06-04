import styled from "styled-components";

export const StyledLi = styled.li`
flex-direction: column;
filter: saturate(0.75);
margin-bottom: 20px;
align-items: left;
display: flex;
&:hover {
    filter: unset;
    cursor: pointer;
    transform: scale(1.02);
    transition: transform 0.5s;
    border-bottom: 2px solid white;
  }
`;
