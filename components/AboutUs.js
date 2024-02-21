import React, { useRef, useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

// import GlobalStyles from './fontstyle';

const Div = styled.div`
  background-color: #212529;
  padding: 0;
  height: fit-content;
  margin-bottom: 30px;
  /* margin-top: -25.22px; */
  margin-top: -65px;
`;
const Intro0 = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-image: url("/public/pic.png");
    background-size: cover;
    background-attachment: fixed;
  }
`;
const Empty_span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 654px;
  background-image: url("pic.png");
  background-size: cover;
  background-attachment: fixed;
`;
const Intro_container = styled.div`
  // //background-color: #ADB5BD;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  margin-top: 88px;
`;
const Intro1 = styled.div`
  // background-color: rgba(233, 236, 239, 0.3);
  flex: 1;
  // scroll-snap-align : start;
  // border: 1px ridge black;
  // background-color: rgba(255, 255, 255, 0.5);
  // backdrop-filter: blur(10px);
  width: 100%;
`;
const Label = styled.h2`
  // font-family: 'Poppins', sans-serif;
  font-family: "Roboto Mono", monospace;
  text-align: center;
  font-weight: normal;
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
  color: #f8f9fa;
  font-weight: 900;
  font-size: 28px;
`;
const Content_1 = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  /* flex-flow: row nowrap; */
  flex-direction: row;
  flex-wrap: wrap-reverse;
  align-content: stretch;

  //background-color: #ADB5BD;
  height: 100%;
`;
const TextArea = styled.div`
  flex: 1;
  // align-self:center;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #f8f9fa;
`;

const Text_1_1 = styled.span`
  margin-top: 100px;
  margin-bottom: 0;
  font-family: "Roboto Mono", monospace;
  font-size: 22px;

  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
const Text_1_2 = styled.span`
  margin-top: 20px;
  margin-bottom: 90px;
  font-family: "Roboto Mono", monospace;
  // font-family: 'Poppins', sans-serif;
  // font-family: 'Rounded Elegance',Helvetica,Arial,Lucida,sans-serif;
  width: 45%;
  display: flex;
  align-items: center;
  text-align: justify;
  flex-direction: column;
  line-height: 1.7em;
  font-weight: 200;
`;
const Text_1_3 = styled.span`
  align-self: left;
  font-family: "Roboto Mono", monospace;

  // display: block;
  // margin-block-start: 1em;
  // margin-block-end: 1em;
  // margin-inline-start: 0px;
  // margin-inline-end: 0px;
`;
const H1 = styled.span`
  display: inline-block;
  font-family: "Roboto Mono", monospace;
  font-weight: normal;
  margin: 0;
  font-size: 30px;
`;
const UL = styled.ul`
  list-style: none;
`;
const LI = styled.li`
  position: relative;

  &::before {
    content: "✓";
    position: absolute;
    left: -1em; /* 调整为适当的值 */
    top: -4px;
  }
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
const Right2left = keyframes`
    0% {
        transform : translateX(100%);
        opacity : 0;
    }
    20%{
        transform : translateX(80%);
        opacity : 0.2;
    }
    40%{
        transform : translateX(60%);
        opacity : 0.4;
    }
    60%{
        transform : translateX(40%);
        opacity : 0.6;
    }
    80%{
        transform : translateX(20%);
        opacity : 0.8;
    }
    100% {
        transform : translateX(0%);
        opacity : 1;
    }
`;
const Left2Right = keyframes`
    0% {
        transform : translateX(-100%);
        opacity : 0;
    }
    20%{
        transform : translateX(-80%);
        opacity : 0.2;
    }
    40%{
        transform : translateX(-60%);
        opacity : 0.4;
    }
    60%{
        transform : translateX(-40%);
        opacity : 0.6;
    }
    80%{
        transform : translateX(-20%);
        opacity : 0.8;
    }
    100% {
        transform : translateX(-0%);
        opacity : 1;
    }
`;
const Image = styled.img`
  flex: 1;
  max-width: 55%;
  margin-left: auto;
  border-radius: 20px 0 0 20px;
  animation-name: ${Right2left};
  animation-duration: 0.8s;

  // transition: transform 0.5s ease-in-out ;
  // &:hover{
  //     transform: translateX(0);
  // }
`;

const Image_2 = styled.img`
  width: 862px;
  margin-top: 20px;
  // flex:1;
  animation-name: ${Left2Right};
  animation-duration: 0.8s;
`;
const Image_3 = styled.img`
  max-width: 100%;
  animation-name: ${Left2Right};
  animation-duration: 0.8s;
  transform: scale(0.8); /* 调整缩小比例，根据需要修改 */
  transform-origin: right top;
  border-radius: 20px;
`;
const Image_4 = styled.img`
  max-width: 100%;
  transform: scale(0.75); /* 调整缩小比例，根据需要修改 */
  transform-origin: left top;

  // flex:1;
  border-radius: 20px 0 0 20px;
  animation-name: ${Right2left};
  animation-duration: 0.8s;
`;
const Intro2 = styled(Intro1)`
  // background-color: rgba(233, 236, 239, 0.3);
  // background-color: rgba(255, 255, 255, 0.5);
  // backdrop-filter: blur(10px);
  flex: 1;
  color: #f8f9fa;

  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
const Content_2 = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  // align-items: stretch;
  /* flex-flow: column wrap; */
  flex-direction: column;
  flex-wrap: wrap;

  // //background-color: #ADB5BD;
  height: 100%;
`;

const Upper_2 = styled.div`
  flex-grow: 2;
  align-self: center;
`;
const Upper_Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  height: 100%;
`;
const Left_2 = styled.div`
  display: inline-block;
`;
const TextArea_2 = styled.div`
  flex: 1;
`;
const Text_2_1 = styled(Text_1_1)`
  padding-top: 60px;
  padding-left: 10px;
`;
const Text_2_2 = styled.span`
  margin-top: 20px;
  margin-bottom: 90px;
  font-family: "Roboto Mono", monospace;
  // font-family: 'Rounded Elegance',Helvetica,Arial,Lucida,sans-serif;
  width: 45%;
  display: flex;
  align-items: center;
  flex-direction: column;
  line-height: 1.6em;
  font-weight: lighter;
`;
const Text_2_3 = styled(Text_1_3)`
  padding-left: 10px;
`;
const Right_2 = styled.div``;
const UL_2 = styled.ul``;
const UL_LI = styled.li`
  list-style: none;
  position: relative;
  font-size: 20px;
  margin: 40px;

  &:nth-child(1):before {
    content: "✓"; /* 自定义第一个项的标记 */
    color: #ffcc00; /* 自定义颜色 */
    position: absolute;
    left: -1em; /* 调整为适当的值 */
    top: -4px;
  }
  &:nth-child(2) {
    padding-left: 3em;
  }
  &:nth-child(2):before {
    content: "➤"; /* 自定义第二个项的标记 */
    color: #ff9900; /* 自定义颜色 */
    position: absolute;
    left: -1em; /* 调整为适当的值 */
    top: -4px;
    padding-left: 3em;
  }

  &:nth-child(3):before {
    content: "★"; /* 自定义第三个项的标记 */
    color: #33cc33; /* 自定义颜色 */
    position: absolute;
    left: -1em; /* 调整为适当的值 */
    top: -4px;
  }
`;
const Bottom_2 = styled.div`
  flex-grow: 6;
  align-self: center;
`;
const Bottom_Container = styled.div`
  margin-top: 80px;
`;
const OL_2 = styled.ol`
  display: flex;

  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

  height: 100%;

  list-style: none;
  padding: 0;
  margin: 0 20px 20px 20px;
`;
const LI_2 = styled.li`
  font-size: 20px;
  white-space: pre-wrap;
  padding: 20px 20px 100px 20px;
  width: 20%;
  /* height: 20%; */
  margin: 0 10px;
  font-family: "Roboto Mono", monospace;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.3);
  text-align: center;
`;
const SPAN = styled.span`
  text-align: center;
  display: block;
  font-family: "Roboto Mono", monospace;
  // background-color: rgba(0, 0, 0, 0.5);

  color: #f8f9fa;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
`;
const SPAN_DIV = styled.div`
  width: 24px;
  height: fit-content;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
`;
const Intro3 = styled.div`
  flex: 1;
  color: #f8f9fa;
  padding-bottom: 50px;
`;
const Content_3 = styled.div`
  display: flex;

  justify-content: center;
  align-items: stretch;
  /* flex-flow: row wrap; */
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 15px;
  // background-color: #ADB5BD;
  height: 100%;
`;
const Left_3Container = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding-right: 40px;
`;
const Right_3Container = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
const TextArea_3 = styled.div`
  width: fit-content;
`;

const Text_3_1_1 = styled.span`
  margin-top: 10px;
  margin-bottom: 0px;
  padding-left: 55px;
  padding-bottom: 110px;

  font-family: "Roboto Mono", monospace;
  font-weight: light;
  text-align: right;
  line-height: 1.7em;
  overflow-wrap: break-word;
  font-size: 20px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
const Text_3_1 = styled(Text_3_1_1)`
  margin-top: 10px;
  margin-bottom: 0px;

  font-family: "Roboto Mono", monospace;
  text-align: left;
  line-height: 1.7;
  overflow-wrap: break-word;
  // font-size: 25px;
  width: 75%;
`;
const Intro4 = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Image0 = styled.img`
  width: 100%;
  height: 100%;
`;
const SPAN_DIV_NAME = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 5px 25px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 7px;
`;
const Selfi = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  padding: 0 70px;
`;
const OL_Position = styled.ol`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: fit-content;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0 20px 20px 20px;
  text-align: center;
  color: #f8f9fa;
`;
const LI_Position = styled.li`
  flex: 1;
  // font-size:20px;
  white-space: pre-wrap;

  width: fit-centent;
  /* height: fit-content; */
  margin: 0 10px;
  padding-bottom: 20px;
  padding-left: 15px;
  padding-right: 15px;
  font-family: "Roboto Mono", monospace;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.3);
  word-wrap: break-word;
`;
const SPAN_Position = styled.span`
  margin-top: 10px;
  text-align: center;
  display: block;
  font-family: "Roboto Mono", monospace;
  // background-color: rgba(0, 0, 0, 0.5);

  color: #f8f9fa;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
`;
export default function Aboutus() {
  const imageRef = useRef(null);

  return (
    <>
      <Div id="div">
        {/* <GlobalStyles/> */}
        <Intro_container id="container">
          <Intro0>
            <Empty_span></Empty_span>
          </Intro0>

          <Intro1>
            <Label>About Us</Label>
            <Content_1>
              <TextArea>
                <Text_1_1>
                  Welcome to <H1>Direct</H1>,{" "}
                </Text_1_1>
                <Text_1_2>
                  an exalted realm where mobile sophistication meets a crescendo
                  of opulence. As your premier online destination for mobile
                  phone accessories, our platform stands as a testament to our
                  unwavering commitment to Excellence, Innovation, and Customer
                  Satisfaction.
                </Text_1_2>
              </TextArea>
              {/* <Image src="/pic.png"></Image> */}
            </Content_1>
          </Intro1>

          <Intro2 id="intro2">
            <Label>Our Vision</Label>
            <Content_2>
              <TextArea>
                <Text_1_2>
                  In the symphony of technological refinement, we weave a
                  narrative of unparalleled luxury. Our curated collection
                  transcends the ordinary, redefining mobile perfection with
                  each meticulously crafted accessory. Embark on a journey where
                  Innovation takes center stage—an exploration of cutting-edge
                  marvels that seamlessly blend form and function. Here,
                  avant-garde meets the extraordinary, shaping a tomorrow that
                  mirrors the pulse of innovation. Your experience is a bespoke
                  journey, a continuous voyage where desires are not just met
                  but exceeded, elevating satisfaction to an art form.Indulge in
                  the zenith of mobile elegance at Direct, where every accessory
                  is a testament to a lifestyle curated with precision and
                  sophistication. Welcome to a world where Excellence,
                  Innovation, and Customer Satisfaction converge, elevating your
                  mobile experience to unparalleled heights.
                </Text_1_2>
              </TextArea>
              <Image_2 src="/image 3.png"></Image_2>
              <Bottom_2>
                <Bottom_Container>
                  <OL_2>
                    <LI_2>
                      <SPAN>
                        <SPAN_DIV>1</SPAN_DIV>
                      </SPAN>
                      Become the go-to source for all your mobile accessory
                      needs
                    </LI_2>
                    <LI_2>
                      <SPAN>
                        <SPAN_DIV>2</SPAN_DIV>
                      </SPAN>
                      A badge of quality
                    </LI_2>
                    <LI_2>
                      <SPAN>
                        <SPAN_DIV>3</SPAN_DIV>
                      </SPAN>
                      Ensuring that every product we offer is both a statement
                      of style
                    </LI_2>
                  </OL_2>
                </Bottom_Container>
              </Bottom_2>
            </Content_2>
          </Intro2>

          <Intro3>
            <Label>Our Commitment</Label>
            <Content_3>
              <Left_3Container>
                <TextArea_3>
                  <Text_3_1_1>
                    With an expansive range of products including cases,
                    chargers, and screen protectors, we are committed to
                    offering you quality and reliability.
                  </Text_3_1_1>
                </TextArea_3>
                <Image_3 src="\image 4.png"></Image_3>
              </Left_3Container>
              <Right_3Container>
                <Image_4 src="/image 5.png"></Image_4>
                <TextArea_3>
                  <Text_3_1>
                    {" "}
                    Our user-friendly website ensures an effortless search, with
                    a secure and diverse payment system to match your
                    convenience..
                  </Text_3_1>
                </TextArea_3>
              </Right_3Container>
            </Content_3>
          </Intro3>

          <Intro4>
            <OL_Position>
              <LI_Position>
                <SPAN_Position>
                  <SPAN_DIV_NAME>CTO</SPAN_DIV_NAME>
                </SPAN_Position>
                <Selfi src="1704338657503 (1).jpg"></Selfi>
                <br></br>
                Visionary behind our e-commerce innovation, ensuring tech
                strategies align with excellence.
                <br />
                <br />
                <cite>by Looi Zi Jian</cite>
              </LI_Position>
              <LI_Position>
                <SPAN_Position>
                  <SPAN_DIV_NAME>CEO</SPAN_DIV_NAME>
                </SPAN_Position>
                <Selfi src="/WhatsApp Image 2024-01-20 at 00.19.50_4fc49159.jpg"></Selfi>
                <br></br>
                Driving force behind our company&apos;s success, ensuring our
                strategies reflect a commitment to excellence.
                <br />
                <br />
                <cite>by Sim Boon Xun</cite>
              </LI_Position>
              <LI_Position>
                <SPAN_Position>
                  <SPAN_DIV_NAME>CFO</SPAN_DIV_NAME>
                </SPAN_Position>
                <Selfi src="/ky.jpg"></Selfi>
                <br></br>
                Financial maestro ensuring robust fiscal strategies for our
                e-commerce excellence.
                <br />
                <br />
                <cite>by Lew Kien Yew</cite>
              </LI_Position>
            </OL_Position>
          </Intro4>
        </Intro_container>
      </Div>
    </>
  );
}
