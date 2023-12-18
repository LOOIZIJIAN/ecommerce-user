import Center from "@/components/Center";
import Title from "@/components/Title";
import Link from "next/link";
import styled from "styled-components";
import { useSession, signIn, signOut } from "next-auth/react";
import EditProfile from "@/components/EditProfile";
import Header from "@/components/Header";

const Exit = styled.div`
  svg{
    height: 56px;
    padding: 15px;
  }
`;

const ExitLink = styled(Link)`
  text-decoration: none;
`;



export default function AccountPage() {
  const {data: session} = useSession();
  return (
    <>
      {/* <Exit>
        <ExitLink href={'/'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </ExitLink>
      </Exit>

      <Center>
        <Title>Account</Title>
        <button onClick={() => signOut()}>Sign out</button> 
        
      </Center> */}
      <Header />
      <EditProfile />
    </>
  );
}