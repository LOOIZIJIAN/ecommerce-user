import Center from "@/components/Center";
import Title from "@/components/Title";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import axios from "axios";
import PackmanLoader from "@/components/Spinners/PackmanLoader";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { generator } from "random-number";
import { MdOutlineLockReset } from "react-icons/md";

const ForgotPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid 1px;
  margin: auto;
  padding: 25px;
  margin-top: 150px;
  border-radius: 8px;
  width: 450px;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-right: 5px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Button2 = styled.button`
  padding: 0.5rem 1rem;
  background-color: #1cff27;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #08a610;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: red;
`;
const LockIcon = styled(MdOutlineLockReset)`
  width: 50px;
  height: 50px;
  margin-bottom: -20px;
`;

const Span = styled.span`
  margin-bottom: 10px;
  font-size: 14px;
`;

const SPAN = styled.span`
  font-size: 16px;
  color: blue;
  text-decoration: underline;
  cursor: default;
`;
export default function ForgotOrChangePassword() {
  const [requestOtp, setRequestOtp] = useState(false);
  const [isRequesting, setIsRequesting] = useState(true);
  const [proceedOtp, setProceedOtp] = useState(false);
  const [formData, setFormData] = useState({ email: "", otp: "" });
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [generateOtp, setGenerateOtp] = useState('');
  const [reconfirmPassword, setReconfirmPassword] = useState('');
  const router = useRouter();

  emailjs.init("0M1fdmyHbFTRLH2SI");

  setTimeout(() => {
    setIsRequesting(false);
  },[2000]);

  const reqAndSent = async (e) => {
    e.preventDefault();

    const gen = generator({
      min: 1000,
      max: 9999,
      integer: true,
    });

    setGenerateOtp(gen());

    try {
      await axios.get("/api/user?email=" + formData.email);
      toast.success("Email Exist");
      setProceedOtp(true);
    } catch (error) {
      console.error("Error fetching user data:", error);
      toast.error("Email not exist");
    }
  };

  useEffect(() => {
    setFormData({ ...formData, otp: generateOtp });
  },[generateOtp]);

  useEffect(() => {
    if (proceedOtp) {
      sendMail(); 
    }
  }, [proceedOtp]); 

  const sendMail = () => {
    emailjs.send("service_n7raozq", "template_vjogkes", {
      email: formData.email,
      otp: formData.otp
    }).then(() => {
      toast.success("Email sent successfully");
    }).catch((error) => {
      console.error("Error sending email:", error);
      toast.error("Failed to send email. Please try again later.");
    });

    // console.log("OTP : " + formData.otp);
  };

  const verifyOtp = (e) => {
    e.preventDefault();
    toast.dismiss();

    if (otp == formData.otp) {
      setRequestOtp(true);
      toast.success("OTP Match");
      return;
    } else {
      toast.error("OTP Not Match");
      return
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    toast.dismiss();  //  clear toast

    if (newPassword !== reconfirmPassword) {
      toast.error("Passwords do not match. Please re-enter.");
      return;
    }

    try {
      toast.success("Successfully reset password! You can now login with your new credentials.");
      await axios.put('/api/user', {
        email: formData.email,
        newPassword: newPassword,
        newOtp: formData.otp 
      });
      router.push('/');
    } catch (error) {
      console.error("Error resetting password:", error);
      toast.error("Failed to reset password. Please try again later.");
    }
  };

  if (!requestOtp) {
    return (
      <Center>
        {isRequesting && <PackmanLoader />}
        {!isRequesting &&
          <ForgotPasswordContainer>
            <LockIcon />
            <Title>Forgot Password</Title>
            {!proceedOtp &&
              <>
                <Span>Enter your email to reset password.</Span>
                <Form method="post" onSubmit={(e) => reqAndSent(e)}>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={(ev) =>
                      setFormData({ ...formData, email: ev.target.value })
                    }
                  />
                  <Button2 type="submit">Send email</Button2>
                </Form>
              </>
            }
            {proceedOtp && 
              <>
                <Span>An OTP has been sent to <SPAN>{formData.email}</SPAN>.</Span>
                <Span>Please check your email and enter the OTP below.</Span>
                <Form method="get" onSubmit={verifyOtp}>
                  <Input type="password" placeholder="OTP" onChange={(e)=>setOtp(e.target.value)}/>
                  <Button type="submit">Verify</Button>
                </Form>
              </>
            }
          </ForgotPasswordContainer> 
        }
      </Center>
    );
  }

  return (
    <Center>
      <ForgotPasswordContainer>
        <Title>Reset Password</Title>
        <Form method="post" onSubmit={handleResetPassword}>
          <Input type="password" placeholder="New password" onChange={(e)=>setNewPassword(e.target.value)}/>
          <Input type="password" placeholder="Reconfirm password" onChange={(e) => setReconfirmPassword(e.target.value)} />
          <Button type="submit">Reset Password</Button>
        </Form>
      </ForgotPasswordContainer>
    </Center>
  );
}
