import Center from "@/components/Center";
import Title from "@/components/Title";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import axios from "axios";
import PackmanLoader from "@/components/Spinners/PackmanLoader";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import randomNumber, { generator } from "random-number";

const ForgotPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid 1px;
  margin: auto;
  padding: 25px;
  margin-top: 120px;
  border-radius: 2px;
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

const Form = styled.form``;
// const handleInputChange = (e) => {
//   const { id, value } = e.target;
//   setFormData((prevData) => ({
//     ...prevData,
//     [id]: value,
//   }));
// };
export default function ForgotOrChangePassword() {
  const [requestOtp, setRequestOtp] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);
  const [proceedOtp, setProceedOtp] = useState(false);
  const [formData, setFormData] = useState({ email: "", otp: "" });
  const [userData, setUserData] = useState([]);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const router = useRouter();

  emailjs.init("0M1fdmyHbFTRLH2SI");

  const reqAndSent = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("/api/user?email=" + formData.email);
      setUserData(response.data);
      setProceedOtp(true);
    } catch (error) {
      console.error("Error fetching user data:", error);
      toast.error("Email not exist");
    }
  };

  useEffect(() => {
    if (userData.otp) {
      console.log("OTP:" + userData.otp);
      setFormData({ ...formData, otp: userData.otp });
      sendMail();
    }
  }, [userData]);

  const sendMail = async () => {
    try {
      await emailjs.send("service_n7raozq", "template_vjogkes", formData);
      toast.success("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email. Please try again later.");
    }
  };
  
  useEffect(()=>{
    if (otp === userData.otp) {
      setRequestOtp(true);
    }
  },[otp])

  const handleResetPassword = async () => {
    try {
      const gen = generator({
        min: 1000,
        max: 9999,
        integer: true,
      });
      const newOtp = gen();
      const newPass = await axios.put("/api/user", {
        email: formData.email,
        newPassword,
        newOtp,
      });
      router.push("/");
    } catch (error) {
      console.error("Error resetting password:", error);
      toast.error("Failed to reset password. Please try again later.");
    }
  };

  if (!requestOtp) {
    return (
      <Center>
        <ForgotPasswordContainer>
          <Title>Request OTP</Title>
          {!isRequesting ? (
            <Form>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                onChange={(ev) =>
                  setFormData({ ...formData, email: ev.target.value })
                }
              />
              <Button2 type="submit" onClick={(e) => reqAndSent(e)}>
                Send email
              </Button2>
            </Form>
          ) : (
            <PackmanLoader />
          )}
          {proceedOtp && (
            <Form>
              <Input
                type="password"
                placeholder="OTP"
                onChange={(e) => setOtp(e.target.value)}
              />
              
            </Form>
          )}
        </ForgotPasswordContainer>
      </Center>
    );
  }

  return (
    <Center>
      <ForgotPasswordContainer>
        <Title>Reset Password</Title>
        <Form>
          <Input
            type="password"
            placeholder="New password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Button type="submit" onClick={handleResetPassword}>
            Reset Password
          </Button>
        </Form>
      </ForgotPasswordContainer>
    </Center>
  );
}