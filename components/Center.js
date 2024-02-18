import styled from "styled-components";

const StyledDiv = styled.div`
  // max-width: 800px;
  min-height: 100vh;
  height: auto;
  /* margin: 0 auto; */
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: center;
  background-color: #E9ECEF;
`;

export default function Center({children}) {
  return (
    <StyledDiv>{children}</StyledDiv>
  );
}