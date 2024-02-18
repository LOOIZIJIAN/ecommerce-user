import Center from "@/components/Center";
import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";
import Title from "@/components/Title";
import dynamic from 'next/dynamic';
import styled from "styled-components";
import Footer from "@/components/Footer";
import { useSession } from "next-auth/react";
import SessionOut from "@/components/SessionOut";
import { Category } from "@/models/Category";

const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const ProductsGrid = dynamic(() => import('@/components/ProductsGrid'), { ssr: false });
const Wrapper = styled.div`
  margin-top: 85px;
`;
export default function WishList({ allProducts, fetchedCategory }) {
    const {data : session} = useSession();

    if(!session) {
        return(<><SessionOut /></>)
    }

    return (
        <>
        <Header allProducts={allProducts} fetchedCategory={fetchedCategory} />
        <Center>
            <Wrapper>
            <Title>Wish List</Title>
            <ProductsGrid products={allProducts} />
            </Wrapper>
        </Center>
        <Footer />
        </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const categories = await Category.find();
  const allProducts = await Product.find();
  return {
    props: {
      allProducts: JSON.parse(JSON.stringify(allProducts)),
      fetchedCategory: JSON.parse(JSON.stringify(categories)),
    },
  };
}