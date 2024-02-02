import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 130px;
  margin-top: 45px;
  padding-top: 20px;
  padding-left: 30px;
  width: 380px;
  height: 333px;
`;

const UpCon = styled.div`
  height: 175px;
  border: 1px solid #fff;
  border-radius: 17px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 30px;
`;

const Img = styled.img`
  border-radius: 12px;
  background: rgba(217, 217, 217, 0);
  width: 50px;
  height: 50px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  margin-left: 30px;
`;

// Share Component to H1 , P
const SharedTxt = styled.h1`
  width: max-content;
  font-family: Poppins;
  color: #ccc;
  cursor: default;

  &:hover {
    color: #fff;
  }
`;

const H1 = styled(SharedTxt)`
  font-size: 20px;
  font-weight: 600;
`;

const P = styled(SharedTxt)`
  font-size: 14px;
  font-weight: 400;
  text-align: justify;
  max-width: 340px;
`;

// User Setting Icon
const UserSettng = styled.img`
  align-self: flex-start;
  width: 25px;
  height: 25px;
  margin-right: 20px;
  margin-top: 0px;

  cursor: pointer;
  filter: brightness(50%);

  &:hover {
    filter: brightness(100%);
  }
`;

const Hr = styled.hr`
  margin: 45px 0;
  border: none;
  height: 1px;
  background: #373737;
`;

const DownCon = styled(UpCon)`
  height: 68px;
  width: fit-content;
  padding: 0;
  border-radius: 15px;
  margin-left: auto;
  margin-right: auto;
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
  filter: brightness(50%);
`;

const Btn = styled.button`
  height: 68px;
  padding: 10px 31.3px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background: #292727;

    ${Icon} {
      filter: brightness(100%);
    }
  }
`;

const Btn1 = styled(Btn)`
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;
const Btn2 = styled(Btn)`
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export default function AfterLogin() {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <Container>
      <UpCon>
        {/* <Img src={session?.user?.image} /> */}
        <Img src={session?.user?.image || "afterLogin/User_Icon.png"} />

        <Details>
          <H1>{session?.user?.name}</H1>
          <P>{session?.user?.email}</P>
        </Details>

        <a href="account">
          <UserSettng src="AfterLogin/User_Setting_Icon.png" title="Setting" />
        </a>
      </UpCon>

      <Hr />

      <DownCon>
        <Btn1>
          <Icon src="afterLogin/Like_Icon.png" />
        </Btn1>
        <Btn2 onClick={() => router.push("/cart")}>
          <Icon src="afterLogin/Shopping_Cart.png" />
        </Btn2>
      </DownCon>
    </Container>
  );
}
