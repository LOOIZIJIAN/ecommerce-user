import Center from "@/components/Center";
import Title from "@/components/Title";
import Link from "next/link";
import styled from "styled-components";
import { useSession, signIn, signOut } from "next-auth/react";
import EditProfile from "@/components/EditProfile";
import Header from "@/components/Header";
import SessionOut from '@/components/SessionOut';

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

  if (!session) {
    return(
        <><SessionOut /></>
    )
  }
  return (
    <>
      <Header session={true}/>
      <EditProfile />
    </>
  );
}