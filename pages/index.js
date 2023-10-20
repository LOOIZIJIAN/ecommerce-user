import Featured from "@/components/Featured";
import Hearder from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { useSession, signIn } from "next-auth/react";

export default function HomePage({featuredProduct, newProducts}) {
  const {data: session} = useSession()
  if(session){
    return(
      <div>
        <Hearder/>
        <h2>
          Hello, <b>{session?.user?.name}</b>
        </h2>
        <Featured product={featuredProduct}/>   
        <NewProducts products={newProducts}/>
      </div>
    );
  }
  return (
    <button onClick={() => signIn('google')}>Login with Google</button>
  );
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