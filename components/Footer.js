import styled from "styled-components";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Container = styled.footer`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-top: 0.5px solid lightgray;
  width: 100%;
  height: fit-content;
`;
const Up = styled.div`
  display: flex;
  flex-direction: row;
`;
const Left = styled.div`
  width: 55%;
  display: flex;
  flex-direction: row;
  gap: 40px;
  place-content: center;
`;
const H3 = styled.h3`
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  color: #111827;
`;
const Ul = styled.ul`
  margin-top: 16px;
`;
const A = styled(Link)`
  font-size: 14px;
  line-height: 24px;
  color: gray;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;
const First = styled.div``;
const Right = styled.div`
  width: 45%;
  height: 0%;
  display: flex;
  flex-direction: column;
  margin: 0;
`;
const P = styled.p`
  margin-top: 0px;
  font-size: 14px;
  line-height: 24px;
  color: rgb(75 85 99);
`;
const Form = styled.form`
  display: flex;
  max-width: 80%;
`;
const Label = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;
const Input = styled.input`
  width: 100%;
  min-width: 0px;
  border-width: 1px;
  appearance: none;
  border-radius: 6px;
  padding-left: 8px;
  padding-right: 8px;
  font-size: 16px;
  line-height: 28px;
  border-color: rgb(209 213 219);
  background-color: rgb(255 255 255);
  color: rgb(17 24 39);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  &:focus {
    border-color: rgb(79 70 229);
    --tw-ring-color: rgb(79 70 229);
  }

  @media (min-width: 640px) {
    width: 256px;
    font-size: 14px;
    line-height: 24px;
  }
  @media (min-width: 1280px) {
    width: 100%;
  }
`;
const BtnCon = styled.div`
  margin-top: 16px;
  border-radius: 6px;
  z-index: 2;
  @media (min-width: 640px) {
    margin-top: 0px;
    margin-left: 16px;
    flex-shrink: 0;
  }
`;
const BtnSubCon = styled.div`
  display: flex;
  justify-content: flex-end;
  z-index: 2;
`;
const Btn = styled.button`
  width: 100%;
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  border-width: 1px;
  border-color: transparent;
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
  border: 0.1px solid gray;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  box-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width))
    var(--tw-ring-color);
  --tw-ring-offset-width: 2px;
  --tw-ring-color: transparent;
  --tw-ring-offset-color: transparent;
  z-index: 2;

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    --tw-ring-color: rgb(99 102 24);
    --tw-ring-offset-color: #fff;
  }

  &:disabled {
    background-color: rgb(156 163 175);
  }

  &:hover {
    /* background-color: rgb(67 56 202); */
    cursor: pointer;
    background-color: gray;
    color: #fff;
    border: 1px solid white;
  }
`;
const Table = styled.table`
  width: 100%;
  margin-left: 32px;
  font-size: 14px;
  line-height: 24px;
  color: rgb(75 85 99);
  cursor: default;

  &:hover {
    color: rgb(17 24 39);
  }
`;
const Dwn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
const SecIcon = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
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
  width: 34px;
  height: 34px;
  &:hover {
    fill: blue;
    cursor: pointer;
  }
`;
const Cpy = styled.div`
  margin-top: 5px;
  margin-bottom: 25px;
  color: gray;
  font-size: 14px;
  cursor: default;
`;
export default function Footer() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("/api/category").then((res) => {
      setCategories(res.data);
    });
  }, []);

  const [parents, setParents] = useState([]);

  useEffect(() => {
    const uniqueParents = new Set();
    const uniqueCate = new Set();

    categories.forEach((category) => {
      if (category.parent) {
        uniqueCate.add(category);
      } else {
        uniqueParents.add(category);
      }
    });

    setParents(Array.from(uniqueParents));
  }, [categories]);

  const { data: session } = useSession();

  emailjs.init("j-pkLD5KS0uUTrmAA"); // kylew.codenection

  const [formData, setFormData] = useState({ email: "" });

  const sendMail = (e) => {
    e.preventDefault();

    emailjs
      .send("service_w6z7h4s", "template_us97zio", formData)
      .then(() => {
        toast.success("You're Now Subscribed. Thank You !");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Failed to send email. Please try again later.");
      });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <Container>
      <Left>
        <First>
          <H3>Menu</H3>
          <Ul role="list">
            <li>
              <A href={"/"}>Home</A>
            </li>
            <li>
              <A href={"aboutus"}>About Us</A>
            </li>
            {!session && (
              <>
                <li>
                  <A href={"register"}>Sign up</A>
                </li>
                <li>
                  <A href={"/"}>Login</A>
                </li>
              </>
            )}
            {session && (
              <li>
                <A href={"cart"}>Shopping Cart</A>
              </li>
            )}
          </Ul>
        </First>

        <First>
          <H3>Products</H3>
          <Ul role="list">
            <li>
              <A href={"products"}>All Products</A>
            </li>
            {parents.map((p) => (
              <li key={p._id}>
                <A href={`/category/${p._id}`}>{p.name}</A>
              </li>
            ))}
          </Ul>
        </First>

        <First>
          <H3>Business Hour</H3>
          <Table>
            <tbody>
              <tr>
                <td>Monday - Friday</td>
                <td>:</td>
                <td style={{ textAlign: "center" }}>9 am - 8 pm</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>:</td>
                <td style={{ textAlign: "center" }}>10 am - 5 pm</td>
              </tr>
              <tr>
                <td>Sunday & Public Holiday</td>
                <td>:</td>
                <td style={{ textAlign: "center" }}>Closed</td>
              </tr>
            </tbody>
          </Table>
        </First>
      </Left>
      <Right>
        <H3>Subscribe for Exclusive Deals!</H3>
        <P>
          Stay updated on the latest trends and enhance your shopping
          experience. Don&apos;t miss out !
        </P>
        <Form method="post" onSubmit={sendMail}>
          <Label for="email-address"> Email address</Label>
          <Input
            type="email"
            name="email"
            id="email"
            autocomplete="email"
            required=""
            placeholder="E-Mail Address"
            onChange={handleInputChange}
          />
          <BtnCon>
            <BtnSubCon>
              <Btn type="submit">Subscribe</Btn>
            </BtnSubCon>
          </BtnCon>
        </Form>
        <Dwn>
          <SecIcon>
            <A href={"https://www.facebook.com/profile.php?id=61553355490093"}>
              <FBIcon />
            </A>
            <A href={"https://www.messenger.com/t/154811617722587/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0"}>
              <MessengerIcon />
            </A>
            <A href={"mailto:directaccessory@gmail.com"}>
              <EmailIcon />
            </A>
          </SecIcon>
          <Cpy>© Copyright 2024. All Rights Reserved.</Cpy>
        </Dwn>
      </Right>
    </Container>
  );
}
