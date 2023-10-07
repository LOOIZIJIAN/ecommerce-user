import Featured from "@/components/Featured";
import Hearder from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function HomePage({product}) {
  return(
    <div>
      <Hearder/>
      <Featured product={product}/>   
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '651f78824a83d693d7039520';
  await mongooseConnect();
  const product = await Product.findById(featuredProductId);
  return{
    props: {product: JSON.parse(JSON.stringify(product))},
  }
}