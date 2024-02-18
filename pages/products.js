// import Header from "@/components/Header";
import Center from "@/components/Center";
import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";
import { useSession } from "next-auth/react";
import { Category } from "@/models/Category";

// import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import dynamic from 'next/dynamic';
import styled from "styled-components";
import Footer from "@/components/Footer";

const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const ProductsGrid = dynamic(() => import('@/components/ProductsGrid'), { ssr: false });
const Wrapper = styled.div`
  margin-top: 85px;
  display: flex;
  flex-direction: column;
`;
export default function ProductsPage({products , fetchedCategory}) {
  const { data: session } = useSession();
  if(!session) {
    return (
      <>
        <Header fetchedCategory={fetchedCategory} />
        <Center>
          <Wrapper>
            <Title>All Products</Title>
            <ProductsGrid products={products} />
          </Wrapper>
        </Center>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header fetchedCategory={fetchedCategory} />
      <Center>
        <Wrapper>
          <Title>All Products</Title>
          <ProductsGrid products={products} />
        </Wrapper>
      </Center>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, {sort:{'_id':-1}});
  const fetchedCategory = await Category.find();  //
  return {
    props:{
      products: JSON.parse(JSON.stringify(products)),
      fetchedCategory: JSON.parse(JSON.stringify(fetchedCategory)), //
    }
  };
}