import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const PageWrapper = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    width: 100%;
    height: 98vh;
    background: linear-gradient(-60deg, rgba(0,0,0,1) 55%, rgba(255,255,255,1) 45%);
`;

const Half = styled.div`
    width: 45%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FormCon = styled.div`
    width: 80%;
    height: 90%;
    border-radius: 17px;
    border: 1px solid #F8F9FA;
`;

const Form = styled.form`
    width: 100%;
    height: 100%;
`;

const Title = styled.h2`
    color: #F8F9FA;
    font-family: Poppins;
    font-size: 24px;
    font-weight: 400;
    text-decoration-line: underline;
    text-align: left;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 20px;
    margin: 0;
`;

const LabelCon = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 45px;
    margin: 10px 0 15px 0;

`;

const Label = styled.label`
    width: 100%;
    color: #F8F9FA;
    font-size: 16px;
    margin-bottom: 5px;
`;

const Input = styled.input`
    width: 50%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #F8F9FA;
    background-color: transparent;

    color: #F8F9FA;

    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const ValidationText = styled.p`
    width: 55%;
    margin-top: 0;
    padding: 3px 0 0 5px;
    color: red;
    font-size: 12px;
    background-color: red;
`;

const BtnCon = styled.div`
    width: 100%;
    margin-top: 20px;
    text-align: center;
`;

const Button = styled.button`
    width: 30%;
    padding: 10px;
    border: none;
    background-color: gray;
    color: white;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;

    &:hover{
        background-color: darkgray;
        color: black;
        border: 1px solid #F8F9FA;
    }
`;

const TNC = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 5%;
    margin-left: 15px;
`;

const Star = styled.span`
    width: 3%;
    padding-left: 25px;
    color: #E9ECEF;
    font-family: Poppins;
    font-size: 13px;
    font-weight: 400;
    margin-top: 16px;
`;

const P = styled.p`
    color: #E9ECEF;
    width: 80%;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
`;

const TkInput = styled.input`
    width: 14px;
    margin-top: -12px;
`;

const SpanTc = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

const Txt = styled.p`
    color: #E9ECEF;
    width: 80%;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
`;

const A = styled.a`
    color: blue;

    &:hover {
        color: darkblue;
    }
`;

const Left = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    margin-left: 10%;
    margin-top: -10%;
`;

const LogoImg = styled.img`
    width: 50%;
`;

const Slogan = styled.h2`
    color: #000;
    font-family: Pridi;
    font-size: 32px;
    font-weight: 400;
`;

export default function SignUp () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        let isValid = true;

        // Email validation
        if (!validateEmail(email)) {
            setEmailError('*Please enter a valid email.');
            isValid = false;
        } else {
            setEmailError('');
        }

        // Password validation
        if (password !== confirmPassword) {
            setPasswordError('*Passwords do not match.');
            isValid = false;
        } else {
            setPasswordError('');
        }

        if (isValid) {
        // Submit form
        }
    };

    // Helper function for email validation
    const validateEmail = (email) => {
        // Simple regex for email validation
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };  

  return (
    <PageWrapper>
        <Left>
            <LogoImg src="Company_Logo.png" alt="Company Logo" />
            <Slogan>The Perfect Fit for Your Phone !</Slogan>
        </Left>

        <Half>
            <FormCon>
                <Form onSubmit={handleSubmit}method='post'>
                    <Title>Sign Up</Title>

                    <LabelCon>
                        <Label>Username</Label>
                        <Input
                        type="text"
                        placeholder="User Name"
                        required
                        />
                    </LabelCon>

                    <LabelCon>
                        <Label>Email</Label>
                        <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                    </LabelCon>

                    <LabelCon>
                        <Label>Password</Label>
                        <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                        {emailError && <ValidationText>{emailError}</ValidationText>}
                    </LabelCon>

                    <LabelCon>
                        <Label>Confirm Password</Label>
                        <Input
                        type="password"
                        placeholder="Re-Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        />
                        {passwordError && <ValidationText>{passwordError}</ValidationText>}                
                    </LabelCon>

                    <TNC>
                        <Star>*</Star>
                        <P>At least 8 characters long but 12 or more is better.</P>
                    </TNC>

                    <TNC>
                        <Star>*</Star>
                        <P>A combination of UPPERCASE letters, lowercase letters, numbers, and symbols.</P>
                    </TNC>

                    <SpanTc>
                        <TkInput type='checkbox' required/>
                        <Txt>
                            By signing up, you agree to Name's
                            <br/>
                            <A href='#'>Terms of Service</A> & <A href='#'>Privacy Policy</A>
                        </Txt>
                    </SpanTc>

                    <BtnCon>
                        <Button type="submit">Proceed</Button>
                    </BtnCon>
                </Form>
            </FormCon>
        </Half>
    </PageWrapper>
  );
};