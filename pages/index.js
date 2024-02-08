import NewProducts from "@/components/NewProducts";
import Login from "@/components/Login";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import Chatbox from "@/components/ChatBox";
import { Slide } from "@/models/Slide";
import Footer from "@/components/Footer";
import { Category } from "@/models/Category";

const Container = styled.div`
  margin-top: 4%;
  /* margin-left: -8px; */
  place-content: center; //  combines of align-content and justify-content
  /* width: 101.2%; */
  width: 95%;
  height: 517px;
  // background: linear-gradient(285deg, #000 58.94%, rgba(0, 0, 0, 0.00) 113.07%, rgba(0, 0, 0, 0.11) 113.07%);
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

export default function HomePage({ newProducts, slide, allProducts, fetchedCategory }) {
  const SlideShow = dynamic(() => import("@/components/SlideShow"), {
    ssr: false,
  });
  const Header = dynamic(() => import("@/components/Header"), { ssr: false });
  const UserProfile = dynamic(() => import("@/components/UserProfile"), {
    ssr: false,
  });
  const { data: session } = useSession();
  console.log("indexSlide:" + slide);

  if (!session) {
    return (
      <>
        <Header allProducts={allProducts} fetchedCategory={fetchedCategory}/>
        <Container>
          <SlideShow slides={slide} />
          <Login />
        </Container>

        <NewProducts products={newProducts} />

        <Chatbox />
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header allProducts={allProducts} fetchedCategory={fetchedCategory}/>
      <Container>
        <SlideShow slides={slide} />
        <UserProfile />
      </Container>
      <NewProducts products={newProducts} />
      <Chatbox />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const newProducts = await Product.find({}, null, {sort: { _id: -1 },limit: 10,});
  const slide = await Slide.find();
  const allProducts = await Product.find();
  const fetchedCategory = await Category.find();
  return {
    props: {
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      slide: JSON.parse(JSON.stringify(slide)),
      allProducts: JSON.parse(JSON.stringify(allProducts)),
      fetchedCategory: JSON.parse(JSON.stringify(fetchedCategory)),
    },
  };
}
