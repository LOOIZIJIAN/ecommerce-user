import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 17px;
  border: 1px solid #fff;
  background: rgba(217, 217, 217, 0);
  width: 515px;
  height: 373px;
  flex-shrink: 0;
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
  color: #fff;
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
  color: #fff;
  font-family: Poppins;
  font-size: 20px;
`;

const Input = styled.input`
  border-radius: 8px;
  border: 1px solid #dee2e6;
  width: 336.5px;
  height: 28px;
  flex-shrink: 0;
  background-color: transparent;
  color: #fff;
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
  width: 150px;
  height: 18px;
  color: rgba(222, 226, 230, 0.6);
  font-family: Poppins;
  font-size: 18px;
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


const SharedSpan = styled(Link)`
  width: fit-content;
  height: 18px;
  color: rgba(222, 226, 230, 0.6);
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  color: lightgray;

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

const SubmitBtn = styled.button`
  width: 150px;
  height: 39px;
  margin-right: 130px;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid #dee2e6;

  &:hover {
    background-color: rgba(222, 226, 230, 0.6);
    transition: all 0.2s ease-in-out;
    color: #fff;
  }
`;

const Field = styled.fieldset`
  margin-right: 130px;
  margin-top: 1rem;
  text-align: center;
  font-size: 0.875rem;
  color: #a0aec0;
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
  font-weight: 550;
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
  width: 350px;
  height: 64px;
  border-radius: 13px;
  border: 1px solid gray;
  background: rgba(217, 217, 217, 0);
  margin: 0px;
  margin-top: -12px;
  cursor: pointer;

  &:hover {
    border: 1px solid #e4d9d9;

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

const GooBtn = styled(SharedBtn)`
  &:hover {
    ${GImg} {
      filter: brightness(100%);
    }
  }
`;

const BeforeHover = "rgb(77, 77, 255)"; //  Global color for the Span3
const AfterHover = "rgb(128, 128, 255)"; //  Global color for the Span3

const Span3 = styled.span`
  color: ${BeforeHover};
  text-decoration: underline;
  text-decoration-color: ${BeforeHover};

  &:hover {
    color: ${AfterHover};
    text-decoration-color: ${AfterHover};
  }
`;

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const callback = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (callback?.error) {
        toast.error(callback.error);
        // console.log(data);
      }

      if (callback?.ok && !callback?.error) {
        toast.success("Logged in successfully!");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login.");
    }
  };

  return (
    <Container>
      <TitleContainer>
        <Title>Login</Title>
      </TitleContainer>

      {/* Form Start */}
      <Form action="/login" onSubmit={loginUser}>
        {/* Username Input Start */}
        <Label>User Email</Label>
        <br />
        <Input
          type="text"
          name="username"
          placeholder="Username"
          required
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <br />
        <br />
        {/* Username Input End */}

        {/* Password Input Start */}
        <Label>Password</Label>
        <br />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <MiniCon>
          <ColCon>

          <SharedSpan href={"fcpassword"}>Forgot Password</SharedSpan>      

            <Span>
              New User?{" "}
              <Span2>
                <Link href={"register"}>
                  <Span3 title="Sign Up">Sign up</Span3>
                </Link>
              </Span2>
            </Span>
          </ColCon>

          <SubmitBtn type="submit">Login</SubmitBtn>
        </MiniCon>

        <Field>
          <Legend>or</Legend>
        </Field>

        <GooBtn type="button" onClick={() => signIn("google")}>
          <OthContainer>
            Continue with
            <FcGoogle style={{ marginLeft: "6px" }} />
            oogle
          </OthContainer>
        </GooBtn>
      </Form>
    </Container>
  );
}
