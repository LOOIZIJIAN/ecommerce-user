import Header from "@/components/Header";
import Center from "@/components/Center";
import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import dynamic from 'next/dynamic';
import styled from "styled-components";

// const Header = dynamic(() => import('@/components/Header'));
// const Center = dynamic(() => import('@/components/Center'));
// const ProductsGrid = dynamic(() => import('@/components/ProductsGrid'));
// const Title = dynamic(() => import('@/components/Title'));
const Wrapper = styled.div`
  margin-top: 85px;
`;
export default function ProductsPage({products}) {
  return (
    <>
      <Header />
      <Center>
        <Wrapper>
          <Title>All products</Title>
          <ProductsGrid products={products} />
        </Wrapper>
      </Center>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, {sort:{'_id':-1}});
  return {
    props:{
      products: JSON.parse(JSON.stringify(products)),
    }
  };
}