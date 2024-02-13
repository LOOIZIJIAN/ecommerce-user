import dynamic from "next/dynamic";
import { useSession} from "next-auth/react";
import Aboutus from "@/components/AboutUs";
import Footer from "@/components/Footer";
import {mongooseConnect} from "@/lib/mongoose";
import { Category } from "@/models/Category";

export default function AboutPage({fetchedCategory}){
    const Header = dynamic(() => import('@/components/Header'), { ssr: false });
    const {data: session} = useSession();
  
    if (!session) {
        return (
            <>
                <Header fetchedCategory={fetchedCategory}/>
                <Aboutus />
            </>
        );
    }

    return(
        <>
            <Header fetchedCategory={fetchedCategory}/>
            <Aboutus />
            <Footer />
        </>
    )
}

export async function getServerSideProps() {
    await mongooseConnect();
    const fetchedCategory = await Category.find();  //
    return {
      props:{
        fetchedCategory: JSON.parse(JSON.stringify(fetchedCategory)), //
      }
    };
  }