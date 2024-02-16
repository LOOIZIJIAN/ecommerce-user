import Footer from "@/components/Footer"
import Header from "@/components/Header"
import styled from "styled-components"
import emailjs from 'emailjs-com';
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaFacebookMessenger } from "react-icons/fa";
import Link from 'next/link';
import React, { useState } from 'react';
import toast from "react-hot-toast";
import { Product } from "@/models/Product";

const Container = styled.div`
    margin-top: 62px;
    width: 100%;
    min-height: 92.5vh;
    height: auto;
    background: linear-gradient(
    285deg,
    #000 58.94%,
    rgba(0, 0, 0, 0) 113.07%,
    rgba(0, 0, 0, 0.11) 113.07%
  );
  background-color: #fff;

  display: flex;
  flex-direction: row;
`;

const ContactInfo = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
  margin-top: 65px;
  margin-left: 80px;
  p {
    margin: 8px 0;
    font-size: 16px;
  }
`;

const FormCon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    border: solid 1px #fff;
    margin: auto;
    padding: 25px;
    border-radius: 8px;
    width: 35%;
    min-height: 380px;
    height: auto;
    color: #fff;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
`;

const Textarea = styled.textarea`
  padding: 8px;
  margin-bottom: 16px;
`;

const SubmitButton = styled.button`
  background-color: #0070f3;
  color: #fff;
  padding: 10px;
  cursor: pointer;
  border: none;
`;

const SocialLinks = styled.div`
  display: flex;
  margin-top: 20px;
  a {
    margin-right: 10px;
    text-decoration: none;
    color: #0070f3;
  }
`;

const SecIcon = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;
const FBIcon = styled(BiLogoFacebookSquare)`
    fill: lightgray;
    width: 35px;
    height: 35px;

    &:hover{
        fill: blue;
        cursor: pointer;
    }
`;
const MessengerIcon = styled(FaFacebookMessenger)`
    fill: lightgray;
    width: 28px;
    height: 28px;
    margin-top: 2px;
    &:hover{
        fill: blue;
        cursor: pointer;
    }
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

const MapContainer = styled.div`
  margin-bottom: 20px;
`;

const Location = styled.a`
    text-decoration: none;
    color: lightgray;

    &:hover {
        color: white;
        text-decoration: underline;
    }
`
export default function ContactUs ({ allProducts, fetchedCategory }) {
    
    const [fname, setName] = useState('');
    const [femail, setEmail] = useState('');
    const [fmessage, setMessage] = useState('');

    const phoneNumber = '+60 11-3930 3135';
    const emailAddress = '1211206861@student.mmu.edu.my';

    const handlePhoneClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleEmailClick = () => {
        window.location.href = `mailto:${emailAddress}`;
    };
    
    emailjs.init("AL-MhcS5HYIPa2TSs");

    const sendMail = (e) => {
        e.preventDefault();
        toast.dismiss();

        console.log('Submitting form...');
    
        emailjs.send("service_2tbd16t","template_0iw0kfa", {
            email: femail,
            name: fname,
            message: fmessage,
        })
            .then(() => {
                toast.success("You're Now Subscribed. Thank You !");
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                toast.error("Failed to send email. Please try again later.");
            });
    };
    
    return(
        <>
        <Header allProducts={allProducts} fetchedCategory={fetchedCategory} />

        <Container>
            <ContactInfo>
                <MapContainer>
                    <iframe
                    title="Company Location"
                    width="100%"
                    height="300"
                    style={{ border: 0 , borderRadius: '10px'}}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.018479539093!2d101.6535055147563!3d2.920101997318076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdbbfba4861605%3A0xe9bf3072f8df283a!2sMultimedia%20University%2C%20Cyberjaya%20Campus!5e0!3m2!1sen!2smy!4v1646971285257!5m2!1sen!2smy"
                    allowFullScreen
                    ></iframe>
                </MapContainer>
                <p>
                    <Location href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.018479539093!2d101.6535055147563!3d2.920101997318076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdbbfba4861605%3A0xe9bf3072f8df283a!2sMultimedia%20University%2C%20Cyberjaya%20Campus!5e0!3m2!1sen!2smy!4v1646971285257!5m2!1sen!2smy">
                        Multimedia University - MMU Cyberjaya, Persiaran Multimedia, 63100 Cyberjaya, Selangor
                    </Location>
                </p>
                <br />
                <Location onClick={handlePhoneClick}>Phone: {phoneNumber}</Location>
                <br />
                <Location onClick={handleEmailClick}>Email: {emailAddress}</Location>
                <SocialLinks>
                    <SecIcon>
                        <A href={'https://www.facebook.com/profile.php?id=61553355490093'}><FBIcon /></A>
                        <A href={'https://www.messenger.com/t/154811617722587/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0'}><MessengerIcon /></A>
                    </SecIcon>
                </SocialLinks>
            </ContactInfo>

            <FormCon>
                <Title>Contact Us</Title>
                <Form method="post">
                    <Label htmlFor="name">Name:</Label>
                    <Input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} required />

                    <Label htmlFor="email">Email:</Label>
                    <Input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required />

                    <Label htmlFor="message">Message:</Label>
                    <Textarea id="message" name="message" rows={5} onChange={(e) => setMessage(e.target.value)} required />

                    <SubmitButton type="submit" onClick={sendMail}>Submit</SubmitButton>
                </Form>
            </FormCon>
        </Container>

        {/* <Footer /> */}
        </>
    )
}


export async function getServerSideProps() {
    await mongooseConnect();
    const categories = await Category.find();
    const allProducts = await Product.find();
    return {
      props: {
        allProducts: JSON.parse(JSON.stringify(allProducts)),
        fetchedCategory: JSON.parse(JSON.stringify(categories)),
      },
    };
  }
  