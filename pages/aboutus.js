import dynamic from "next/dynamic";
import { useSession} from "next-auth/react";
import Aboutus from "@/components/AboutUs";
import Footer from "@/components/Footer";
import {mongooseConnect} from "@/lib/mongoose";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";

export default function AboutPage({ allProduct, fetchedCategory }){
    const Header = dynamic(() => import('@/components/Header'), { ssr: false });
    const {data: session} = useSession();
  
    if (!session) {
			return (
				<>
					<Header allProducts={allProduct} fetchedCategory={fetchedCategory} />
					<Aboutus />
				</>
			);
    }

    return(
			<>
				<Header allProducts={allProduct} fetchedCategory={fetchedCategory} />
				<Aboutus />
				<Footer />
			</>
    )
}

export async function getServerSideProps() {
    await mongooseConnect();
    const categories = await Category.find();
    const allProducts = await Product.find();
    return {
      props: {
        allProduct: JSON.parse(JSON.stringify(allProducts)),
        fetchedCategory: JSON.parse(JSON.stringify(categories)),
      },
    };
  }