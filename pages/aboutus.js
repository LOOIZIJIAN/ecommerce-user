import dynamic from "next/dynamic";
import { useSession} from "next-auth/react";
import Aboutus from "@/components/AboutUs";
import Footer from "@/components/Footer";

export default function AboutPage(){
    const Header = dynamic(() => import('@/components/Header'), { ssr: false });
    const {data: session} = useSession();
  
    if (!session) {
        return (
            <>
                <Header session={false}/>
                <Aboutus />
            </>
        );
    }

    return(
        <>
            <Header session={true}/>
            <Aboutus />
            <Footer />
        </>
    )
}
