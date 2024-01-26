import styled from "styled-components";

const StyledDiv = styled.div`
  // max-width: 800px;
  height: 100vh;
  /* margin: 0 auto; */
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: center;
  background-color: #ffffff;
`;

export default function Center({children}) {
  return (
    <StyledDiv>{children}</StyledDiv>
  );
}