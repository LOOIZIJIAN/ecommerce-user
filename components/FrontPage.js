import Featured from "./Featured";
import GoogleBtn from "@/components/GoogleBtn"
import Title from "./Title";
import Header from "./Header";
import styled from "styled-components";
import Link from "next/link";

const NavBar = styled.div`
  display: flex;
  
`;

const Logo = styled(Link)` 
  color:#f55;
  text-decoration:none;
  position: relative;
  z-index: 3;
`;

export default function FrontPage() {
  return(
    <>
      <NavBar>
        <Logo href={'./login'}>KY XSHOP</Logo>
      </NavBar>
      
    </>
  );
}