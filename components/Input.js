import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 7px;
  margin-bottom: 15px;
  border: 6px solid #5e5e5e;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #dedede;
`;

export default function Input(props) {
  return <StyledInput {...props} />;
}
