// import Featured from "@/components/Featured";
// import FrontPage from "@/components/FrontPage";
// import GoogleBtn from "@/components/GoogleBtn";
import FrontPage from "@/components/FrontPage";
import NewProducts from "@/components/NewProducts";
import Login from "@/components/Login";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { useSession, signIn, signOut } from "next-auth/react";
import dynamic from "next/dynamic";
import styled from 'styled-components';
import Center from "@/components/Center";
import Title from "@/components/Title";
import HotSales from "@/components/HotSales";

const Container = styled.div`
    margin-top: 4%;
    margin-left: -8px;
    width: 101.2%;
    height: 517px;
    background: linear-gradient(285deg, #000 58.94%, rgba(0, 0, 0, 0.00) 113.07%, rgba(0, 0, 0, 0.11) 113.07%);
    display: flex;
    flex-direction: row;
`;

export default function HomePage({featuredProduct, newProducts}) {
  const SlideShow = dynamic(() => import("@/components/SlideShow"), { ssr: false });
  const Header = dynamic(() => import('@/components/Header'), { ssr: false });
  const UserProfile = dynamic(()=> import('@/components/UserProfile'), {ssr: false});
  const {data: session} = useSession();
  if(session){
    return(
      <>
        <Header />
        <Container>
          <SlideShow/>
          <UserProfile/>
        </Container>
        <button onClick={()=> signOut()}>sign out</button>
        {/* <HotSales products={newProducts}/> */}
        <NewProducts products={newProducts}/>
      </>
      
    );
  }
  if (!session){
    return (
      <>
        <Header />
        <Container>
          <SlideShow />
          <Login/>
        </Container>
        {/* <Center>
          <Title>Hot Sales</Title>
        </Center>
        <HotSales /> */}
      </>
    );
  }
}

export async function getServerSideProps() {
  const featuredProductId = '651f78824a83d693d7039520';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  return{
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}