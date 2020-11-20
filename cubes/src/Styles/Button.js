import styled from "styled-components";

const Button = styled.button`
  background: ${props => props.primary ? "#c70000" : "white"};
  color: ${props => props.primary ? "white" : "#c70000"};
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 30px;
  cursor: pointer;
  transition: transform .5s ease-in-out;
  &:hover {
      transform: scale(1.1, 1.1)
    }
`;

export default Button;