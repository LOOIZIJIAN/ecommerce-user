import styled from "styled-components";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";

const Title = styled.h2`
  font-size: 2rem;
  margin:30px 0 20px;
  font-weight: normal;
  color: #bdb9b5;
  font-family: 'poppins', sans-serif;
  display: flex;
  justify-content:center;
`;

const Wrapper = styled.div`
  width: 80%;
  margin-bottom: 45px;
`;

export default function NewProducts({products}) {
  return (
    <Center>
      <Wrapper>
        <Title>New Arrivals</Title>
        <hr></hr>
        <ProductsGrid products={products} />
      </Wrapper>
    </Center>
  );
}