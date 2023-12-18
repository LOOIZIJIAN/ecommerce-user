import { signIn } from "next-auth/react";
import Link from "next/link";
import styled from "styled-components"

const Container = styled.div`
    border-radius: 17px;
    border: 1px solid #FFF;
    background: rgba(217, 217, 217, 0.00);
    width: 515px;
    height: 373px;
    flex-shrink: 0;
    margin-left: 180px;
    margin-top: 45px;
    padding-top: 20px;
    padding-left: 30px;
`;

const TitleContainer = styled.div`
    display: flex;
    width: 171px;
    height: 38px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0; 
`;

const Title = styled.h1`
    color: #FFF;
    font-family: Poppins;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

const Form = styled.form`
    width: 480px;
    padding-top: 20px;
    padding-left: 65px;
`;

const Label = styled.label`
    width: 171px;
    height: 38px;
    text-align: left;
    color: #FFF;
    font-family: Poppins;
    font-size: 20px;
`;

const Input = styled.input`
    border-radius: 8px;
    border: 1px solid #DEE2E6;
    width: 284px;
    height: 28px;
    flex-shrink: 0;
    background-color: transparent;
    color: #FFF;
    padding-left: 10px;

    &:valid {
        background-color: transparent;
    }
`;

const MiniCon = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 1rem;
`;

const ColCon = styled.div`
    display: grid;
`;

const Span = styled.span`
    width: 126px;
    height: 18px;    
    color: rgba(222, 226, 230, 0.60);
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    padding-right: 100px;
`;

const Span2 = styled.span`
    color: #fff;
    cursor: pointer;
    
    &:hover {
        text-decoration: underline;
    }
`;

const SharedSpan = styled(Span)`
    cursor: pointer;

    &:hover {
        color: #fff;
    }
`;

const SubmitBtn = styled.button`
    width: 150px;
    height: 39px;
    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid #DEE2E6;

    &:hover {
        background-color: rgba(222, 226, 230, 0.60);
        transition: all .2s ease-in-out;
        color: #fff;
    }
`;

const Field = styled.fieldset`
    margin-right: 100px;
    margin-top: 1rem;
    text-align: center;
    font-size: 0.875rem;
    color: #A0AEC0;
    padding-bottom: 1.25rem;
    border-top: 1px solid #718096 !important;
    border: none;
    display: flex;
`;

const Legend = styled.legend`
    padding: 0 6px;
    font-size: 16px;
`;

// Container for Icon & Text
const OthContainer = styled.div`
    color: #718096;
    font-weight: 600;
    background-color: transparent;
    border-radius: 0.375rem;
    font-size: 20px;
    display: inline-flex;
    align-items: center;
`;

// Google Icon
const GImg = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    padding-right: 12px;
    filter: brightness(50%);
`;

// FB Icon
const Svg = styled.svg`
    margin-right: 8px;
    width: 28px;
    height: 24px;
    fill: darkblue;
`;

// Google, Fb Sharing Btn
const SharedBtn = styled.button`
    width: 150px;
    height: 64px;
    border-radius: 17px;
    border: 1px solid gray;
    background: rgba(217, 217, 217, 0.00);
    margin: 0 21px;
    margin-top: -12px;
    cursor: pointer;

    &:hover {
        border: 1px solid #E4D9D9;

        ${OthContainer} {
            color: white;
        }
    }

    &:active {
        background-color: #ffffff;

        ${OthContainer} {
            color: darkgray;
        }
    }
`;

// Fb Btn
const FbBtn = styled(SharedBtn)`
    &:hover {
        Svg {
            fill: #316FF6;
        }
    }
`;

// Google Btn
const GooBtn = styled(SharedBtn)`
    &:hover {
        ${GImg} {
            filter: brightness(100%);
        }
    }
`;

export default function Login() {
    return(
        <Container>
            <TitleContainer><Title>Login</Title></TitleContainer>
            
            {/* Form Start */}
            <Form action="/login" method="post">
                {/* Username Input Start */}
                <Label>Username</Label><br/>
                <Input type="text" name="username" placeholder="Username" required/><br/><br/>
                {/* Username Input End */}

                {/* Password Input Start */}
                <Label>Password</Label><br/>
                <Input type="password" name="password" placeholder="Password" required/>
                {/* Password Input End */}

                <MiniCon>
                    <ColCon>
                        {/* Forgot Password */}
                        <SharedSpan>Forgot Password</SharedSpan>
                        {/* Sign Up New Account */}
                        <Span>New User? <Span2><Link href={'/signUp'}>Sign up</Link></Span2></Span>
                    </ColCon>

                    {/* Login Button Start */}
                    <SubmitBtn type="submit">Login</SubmitBtn>
                    {/* Login Button End */}

                </MiniCon>

                {/* Have a dot dot line */}
                <Field>
                    <Legend>or</Legend>
                </Field>
                
                {/* Google LOGIN BTN Start */}
                {/* onClick={()=> signIn('google')} */}
                <GooBtn type="button" onClick={() => signIn('google')}>
                    <OthContainer>
                        {/* Google Img Start */}
                        <GImg src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
                        {/* Google Img End */}
                        Google
                    </OthContainer>
                </GooBtn>
                {/* Google LOGIN BTN End */}

                {/* FB LOGIN BTN Start */}
                <FbBtn type="button">
                    <OthContainer>
                        {/* Fb Icon Start */}
                        <Svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                        </Svg>
                        {/* Fb Icon End */}
                        Facebook
                    </OthContainer>
                </FbBtn>
                {/* FB LOGIN BTN End */}
            </Form>
            {/* Form End */}
        </Container>
    )
}