import React, { useRef, useState } from "react";
import styled from "styled-components";
import LeftSetting from "./LeftSetting";
import { useSession } from "next-auth/react";

const Container = styled.div`
  margin-top: -30px;
  width: 100%;
  min-height: 808px;
  background-color: #f0f0f0;
`;

const CartCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 78%;
  height: 100%; /* Add this line */

  margin-left: 22%;
  margin-top: 5.5%;
`;

const CartTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  height: auto;
  border-bottom: 1px solid black;
`;

const Title = styled.h1`
  color: #000;
  font-family: PT Sans;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 0px;
`;

const MiniTitle = styled.h3`
  margin: 0;
  color: #000;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CartDet = styled.div`
  width: 93%;
  height: 540px;
  display: flex;
  border-radius: 10px;
  background: #e9ecef;

  box-shadow: -4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-top: 30px;
  padding-top: 2%;
  padding-left: 5%;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 0px;
  align-items: center;
`;

const Row1 = styled(Row)`
  margin-bottom: 30px;
`;

const Img = styled.div`
  width: 100px;
  height: 90px;
  border-radius: 10px;
  border: 1px solid #343a40;
  background-position: center;
  background-size: cover;
  background-image: ${(props) =>
    props.image ? `url(${props.image})` : 'url("AfterLogin/User_Icon.png")'};
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  justify-content: center;
  width: 100%;
`;

const Inputfile = styled.input`
  background-color: red;
  width: max-content;
  margin-left: -4.4%;
  display: none;
`;

const LabelBtn = styled.label`
  width: 15%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #343a40;
  background: #343a40;
  color: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 1%;
  z-index: 3;
  cursor: pointer;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

const Span = styled.span`
  color: #6c757d;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
`;

const Span2 = styled(Span)`
  width: 9%;
`;

const MainDet = styled.h3`
  color: #000;
  width: 8%;
  text-align: right;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 2%;
`;

const DisplayUN = styled.span`
    height: 25px;
    width: 25%;
    background-color: transparent;
    padding-left: 10px;
    margin-top: 5px;
    font-size: 18px;
    font-family: Poppins;
    font-weight: 400;
`;

const Input = styled.input`
  height: 25px;
  width: 25%;
  background-color: transparent;
  border: 0.5px ridge #adb5bd;
  padding-left: 10px;
  font-size: 18px;
  font-family: Poppins;
  font-weight: 400;
`;

const Btn = styled.button`
  border-radius: 10px;
  border: 1px solid #343a40;
  background: #343a40;
  color: #f8f9fa;
  text-align: center;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
  width: 10%;
  height: 8%;
  margin: 4% 0 0 10%;
  cursor: pointer;
`;

const A = styled.a`
  color: black;
  text-decoration: none;
  margin-left: 50px;
  &:hover{
    color: blue;
    text-decoration: underline;
  }
`;

export default function EditProfile() {
  const fileInputRef = useRef(null);

  const {data : session} = useSession();

  const handleClick = () => {
    fileInputRef.current.click();
  };

  // Change Image
  const [image, setImage] = useState(null);

  const loadFile = (event) => {
    if (event.target.files.length > 0) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <Container>
      <LeftSetting />
      <CartCon>
        <CartTop>
          <Title>My Profile</Title>
          <MiniTitle>Manage and Protect your account</MiniTitle>
        </CartTop>

        <CartDet>
          <form method="post">
            <Row1>
              <Img image={session?.user?.image}></Img>

              <Col>
                <Inputfile type="file" ref={fileInputRef} onChange={loadFile} />
              </Col>
            </Row1>

            <Row>
              <MainDet>Username:</MainDet>
              <DisplayUN>{session?.user?.name}</DisplayUN>  {/* import username from database */}
            </Row>

            <Row>
              <MainDet>Email:</MainDet>
              <DisplayUN>{session?.user?.email}</DisplayUN>
            </Row>

            <Row>
              <MainDet>Password</MainDet>
              <DisplayUN>********<A href='fcpassword'>Change Password</A></DisplayUN>
            </Row>
    
          </form>
        </CartDet>
      </CartCon>
    </Container>
  );
}
