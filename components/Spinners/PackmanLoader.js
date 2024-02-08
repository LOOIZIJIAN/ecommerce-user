import { PacmanLoader } from "react-spinners";
import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  height: 300px;
`;
export default function PackmanLoader() {
  return(
    <Container>
      <PacmanLoader color="#36d7b7" />
    </Container>
    
  )
}
