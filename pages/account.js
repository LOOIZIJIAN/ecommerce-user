import Center from "@/components/Center";
import Title from "@/components/Title";
import Link from "next/link";
import styled from "styled-components";
import { useSession, signIn, signOut } from "next-auth/react";
import EditProfile from "@/components/EditProfile";
import Header from "@/components/Header";
import SessionOut from '@/components/SessionOut';
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { Category } from "@/models/Category";

const Exit = styled.div`
  svg{
    height: 56px;
    padding: 15px;
  }
`;

const ExitLink = styled(Link)`
  text-decoration: none;
`;



export default function AccountPage({allProducts , fetchedCategory}) {
  const {data: session} = useSession();

  if (!session) {
    return(
        <><SessionOut /></>
    )
  }
  return (
    <>
      <Header allProducts={allProducts} fetchedCategory={fetchedCategory} />
      <EditProfile />
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const allProducts = await Product.find();
  const fetchedCategory = await Category.find();
  return {
    props: {
      allProducts: JSON.parse(JSON.stringify(allProducts)),
      fetchedCategory: JSON.parse(JSON.stringify(fetchedCategory)),
    },
  };
}
