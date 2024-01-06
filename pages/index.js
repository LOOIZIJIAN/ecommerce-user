import NewProducts from "@/components/NewProducts";
import Login from "@/components/Login";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { useSession, signIn, signOut } from "next-auth/react";
import dynamic from "next/dynamic";
import styled from 'styled-components';
import { useRouter } from "next/router";
import { User } from "@/models/User";
import { useEffect, useState } from "react";
import Chatbox from "@/components/ChatBox";

const Container = styled.div`
    margin-top: 4%;
    margin-left: -8px;
    width: 101.2%;
    height: 517px;
    background: linear-gradient(285deg, #000 58.94%, rgba(0, 0, 0, 0.00) 113.07%, rgba(0, 0, 0, 0.11) 113.07%);
    display: flex;
    flex-direction: row;
`;

export default function HomePage({featuredProduct, newProducts, allProduct, users}) {
  const SlideShow = dynamic(() => import("@/components/SlideShow"), { ssr: false });
  const Header = dynamic(() => import('@/components/Header'), { ssr: false });
  const UserProfile = dynamic(()=> import('@/components/UserProfile'), {ssr: false});
  const [userExist, setUserExist] = useState(false);
  const {data: session} = useSession();
  const router = useRouter();
  const { email } = router.query;

  // console.log(users);
  console.log("user:"+userExist);   
  useEffect(() => {
    const doesUserExist = users.some((u) => u.email === email);
    console.log('Does user exist?', doesUserExist);
    setUserExist(doesUserExist);
  }, [users, email]);

  if (!session) {
    return (
      <>
        <Header products={allProduct} />
        <Container>
          <SlideShow />
          <Login />
        </Container>
        <Chatbox />
      </>
    );
  }

  if(userExist || session) {
    return (
      <>
        <Header products={allProduct} />
        <Container>
          <SlideShow />
          <UserProfile />
        </Container>
        <button onClick={() => signOut()}>Sign out</button>
        <NewProducts products={newProducts} />
        <Chatbox/>
      </>
    );
  }x
}

export async function getServerSideProps() {
  const featuredProductId = '651f78824a83d693d7039520';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  const allProduct = await Product.find();
  const user = await User.find();
  return{
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      allProduct: JSON.parse(JSON.stringify(allProduct)),
      users: JSON.parse(JSON.stringify(user)),
    },
  };
}
