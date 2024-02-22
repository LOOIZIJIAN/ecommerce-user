import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Container = styled.div`
  margin-left: 30px;
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

const FBIcon = styled(BiLogoFacebookSquare)`
  fill: gray;
  width: 35px;
  height: 35px;

  &:hover {
    fill: blue;
    cursor: pointer;
  }
`;
const MessengerIcon = styled(FaFacebookMessenger)`
  fill: gray;
  width: 28px;
  height: 28px;
  margin-top: 2px;
  &:hover {
    fill: blue;
    cursor: pointer;
  }
`;
const EmailIcon = styled(MdOutlineMailOutline)`
  fill: gray;
  width: 28px;
  height: 28px;
  margin-top: 2px;
  &:hover {
    fill: blue;
    cursor: pointer;
  }
`;
const Btn = styled.button`
  height: 68px;
  padding: 10px 31.3px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background: lightgray;
  }
`;

const Btn1 = styled(Btn)`
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;

  &:hover {
    ${FBIcon} {
      fill: blue;
      cursor: pointer;
    }
  }
`;
const Btn2 = styled(Btn)`
  &:hover {
    ${MessengerIcon} {
      fill: blue;
      cursor: pointer;
    }
  }
`;
const Btn3 = styled(Btn)`
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;

  &:hover {
    ${EmailIcon} {
      fill: blue;
      cursor: pointer;
    }
  }
`;
export default function AfterLogin() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <Container>
      <UpCon>
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
        <Btn1 onClick={() => router.push("https://www.facebook.com/profile.php?id=61553355490093")}>
          <FBIcon />
        </Btn1>
        <Btn2 onClick={() => router.push("https://www.messenger.com/t/154811617722587/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0")}>
          <MessengerIcon />
        </Btn2>
        <Btn3 onClick={() => router.push("mailto:directaccessory@gmail.com")}>
          <EmailIcon />
        </Btn3>
      </DownCon>
    </Container>
  );
}
