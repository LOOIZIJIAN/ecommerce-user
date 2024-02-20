import styled from "styled-components";
import React, { useState, useEffect } from "react";
// import { FcSms } from "react-icons/fc";
import { MdTextsms } from "react-icons/md";

const ChatIcon = styled(MdTextsms)`
  fill: lightgray;
`;

const Main = styled.div`
  width: 100%;
`;

const Container = styled.div`
  /* background-color: lightblue; */
  display: none;
  border-radius: 100%;
  height: 80px;
  width: 80px;
  position: fixed;
  right: 1vw;
  bottom: 1vw;
  cursor: pointer;
  z-index: 100;
  transform: scaleX(-1);

  &:hover {
    ${ChatIcon}{
      fill: darkgray;
    }
    /* background-color: rgb(162, 233, 255); */
  }
`;

const Icon = styled.span`
  position: absolute;
  top: 14px;
  left: 13px;
  font-size: 4em;
`;

const ContainerBox = styled.div`
  background-color: white;
  height: 350px;
  width: 320px;
  position: fixed;
  right: 1vw;
  bottom: 154px;
  font-family: Arial, Helvetica, sans-serif;
  display: none;
  scroll-behavior: smooth;
  overflow: auto;
  z-index: 100;
`;

const HeadContainer = styled.div`
  background-color: lightblue;
  border-radius: 20px 20px 0px 0px;
  width: 320px;
  height: 60px;
  margin-top: -60px;
  padding-bottom: 5px;
  display: grid;
  position: fixed;
`;

const H1 = styled.h1`
  color: black;
  font-size: 16px;
  font-weight: bold;
  padding: 2px 10px;
  position: absolute;
  top: 7px;
`;

const P = styled.p`
  color: black;
  font-size: 13px;
  font-weight: 500;
  padding: 0 10px;
  position: absolute;
  top: 30px;
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 15px;
  right: 18px;
  display: block;
  font-size: 0;
  background-color: red;

  &::before,
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 20px;
    background-color: #acacac;
    transform: rotate(45deg) translate(-50%, -50%);
    transform-origin: top left;
    content: "";
  }

  &::after {
    transform: rotate(-45deg) translate(-50%, -50%);
  }

  &::before,
  &::after {
    width: 2px;
    height: 20px;
    border-radius: 10px;
  }

  &:hover {
    &::before,
    &::after {
      background-color: red;
    }
  }
`;

const TimeBox = styled.div`
  text-align: center;
  margin-top: -5px;
  margin-bottom: -15px;
`;

const P1 = styled.p`
  padding-top: 6px;
  padding-bottom: 12px;
  padding-left: 5px;
  padding-right: 5px;
  color: gray;
  font-size: 12px;
`;

const MessageBox = styled.div`
  background-color: lightgray;
  width: 55%;
  height: auto;
  min-height: 55px;
  padding: 1px 8px;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
`;

const P2 = styled.p`
  color: black;
  font-weight: 500;
  font-size: 14px;
`;

const Span = styled.span`
  padding-left: 4px;
  animation-name: hi-animation; /* Refers to the name of your @keyframes element below */
  animation-duration: 2s; /* Change to speed up or slow down */
  animation-iteration-count: infinite; /* Never stop waving :) */
  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
  display: inline-block; /* Must be inline for the animation work */

  @keyframes hi-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    } /* The following five values can be played with to make the waving more or less extreme */
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    } /* Reset for the last half to pause */
    100% {
      transform: rotate(0deg);
    }
  }
`;

const MessageBoxRight = styled(MessageBox)`
  background-color: transparent;
  width: 60%;
  height: auto;
  min-height: 55px;
  margin-right: 10px;
  margin-left: auto;
  margin-bottom: 0;
`;

const MessageBoxRight1 = styled(MessageBoxRight)``;

const MessageBoxRight2 = styled(MessageBoxRight)``;

const RpyBox = styled(MessageBox)`
  display: none;
`;

const Btn = styled.button`
  border: 0.75px solid lightblue;
  border-radius: 10px;
  width: 100%;
  padding: 5px 10px;
  text-align: left;
  color: black;
  font-size: 14px;
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;

const Btn1 = styled(Btn)`
  display: none;
`;

const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 95px;
  background-color: white;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 320px;
  height: 40px;
  position: fixed;
  /* z-index: 100; */
`;

const P3 = styled.p`
  padding: 10px 88.9px;
  font-size: 13px;
  font-weight: bold;
  color: black;
  text-align: center;
  height: fit-content;
`;

const ChatBtn = styled.button`
  background-color: lightblue;
  border-radius: 15px;
  width: max-content;
  height: 100%;
  display: flex;
  align-items: center;
  border: none;
  z-index: 100;
  
  &:hover {
    background-color: rgb(136, 187, 205);
    border: 0.5px solid gray;

    ${P3} {
      color: white;
    }
  }
`;

const RpyBox2 = styled(MessageBox)`
  display: none;
`;
const Btn2 = styled(Btn)`
  display: none;
`;

const End = styled.span`
  font-size: 14px;
  font-weight: 552;
  color: lightgray;
  text-align: center;
  display: none;
  /* margin-top: 20px; */
`;

const Gap = styled.span`
  letter-spacing: 4px;
  color: lightgray;
`;

export default function Chatbox() {
  //  Show Icon after page load 2 second
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("disIcon").style.display = "block";
    },100); //  chaneg to set how long to display chaticon time
  },[]);

  // Show Message Box
  const ShowMessage = () => {
    const box = document.getElementById("ContainerBox");

    const RpyBox = document.getElementById("RpyBox");
    const Rpytxt = document.getElementById("LeftRpy");
    const Selection2 = document.getElementById("Right2");

    const EndChat = document.getElementById("endChat");

    Selection2.style.display = "none";
    EndChat.style.display = 'none';

    if (!box.style.display || box.style.display == "none") {
      // Display Chat Box if the Chat Box haven display

      box.style.display = "block";

      // Dot Dot Show Message
      const mss = document.getElementById("Message");
      const RealMss = document.getElementById("Left");
      const Selection = document.getElementById("Right");

      const messages = ["<P2>。</P2>", "<P2>。。</P2>", "<P2>。。。</P2>"]; // Define the dot messages to be displayed

      RealMss.style.display = "none";
      Selection.style.display = "none";

      setTimeout(function () {
        displayMessage(0);
      }, 100);

      function displayMessage(index) {
        if (index < messages.length) {
          mss.innerHTML = messages[index];
          mss.style.display = "block";

          setTimeout(function () {
            mss.style.display = "none";
            displayMessage(index + 1);
          }, 500);
        } else {
          // After displaying all dot messages, set RealMss.style.display to 'block'
          RealMss.style.display = "block";

          setTimeout(function () {
            Selection.style.display = "block";

            for (let i = 1; i <= 6; i++) {
              const button = document.getElementById(`b${i}`);
              button.style.display = "block";
              
              switch (i) {
                case 1:
                  button.textContent = "Product";
                  break;
                case 2:
                  button.textContent = "Order";
                  break;
                case 3:
                  button.textContent = "Payment";
                  break;
                case 4:
                  button.textContent = "Technical Support";
                  break;
                case 5:
                  button.textContent = "Business Hours";
                  break;
                case 6:
                  button.textContent = "Company Location";
                  break;
                default:
                  break;
              }
            }
          }, 1000);
        }
      }
    } else {
      box.style.display = "none"; // Close Chat Box if the Chat Box displayed

      for (let i = 1; i <= 6; i++) {
        const button = document.getElementById(`b${i}`);

        if (i == i) {
          button.style.display = "block";
        }
      }
      const RpyBox2 = document.getElementById("RpyBox2");
      const Rpytxt2 = document.getElementById("LeftRpy2");

      RpyBox2.style.display = "none";
      Rpytxt2.innerHTML = "";

      RpyBox.style.display = "none";
      Rpytxt.innerHTML = "";
    }
  };

  // To Messenger Chat
  const ChatPage = () => {
    location.href =
      "https://www.messenger.com/t/154811617722587/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0";
  };

  // Real Time JS
  const DisplayTime = () => {
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
      const intervalId = setInterval(() => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0"); /* Hour */
        const minutes = now
          .getMinutes()
          .toString()
          .padStart(2, "0"); /* Minute */
        const currentTimeString = `${hours}:${minutes}`; /* Combine together */
        setCurrentTime(currentTimeString);
      }, 1000); /* refresh every second to catch up with the current time */

      // Stop the time
      setTimeout(() => {
        clearInterval(intervalId);
      }, 1000);

      return () => clearInterval(intervalId);
    }, []);

    return currentTime;
  };

  // Button function
  const handleButtonClick = (value) => {
    const RpyBox = document.getElementById("RpyBox");
    const Rpytxt = document.getElementById("LeftRpy");
    const Selection2 = document.getElementById("Right2");

    RpyBox.style.display = "block";

    for (let i = 1; i <= 6; i++) {
      const button = document.getElementById(`b${i}`);

      if (i == value) {
        button.style.display = "block";

        if (i != 5 || i != 6) {
          Rpytxt.innerHTML =
            "Thank you for reaching out. To assist you better, pls select what " +
            button.textContent +
            " of issue that u need to ask.<br/><br/>Thank You !";

          setTimeout(function () {
            Selection2.style.display = "block";

            switch (value) {
              case 1:
                for (let x = 1; x <= 4; x++) {
                  const button2 = document.getElementById(`bs${x}`);
                  button2.style.display = "block";

                  switch (x) {
                    case 1:
                      button2.textContent = "Product Information";
                      button2.setAttribute("value", "ProductInfo");
                      break;
                    case 2:
                      button2.textContent = "Damage Product";
                      button2.setAttribute("value", "ProductDamage");
                      break;
                    case 3:
                      button2.textContent = "Return & Exhange";
                      button2.setAttribute("value", "Return/Exchange");
                      break;
                    case 4:
                      button2.textContent = "Other";
                      button2.setAttribute("value", "Other");
                      break;
                    default:
                      break;
                  }
                }
                break;

              case 2:
                for (let x = 1; x <= 4; x++) {
                  const button2 = document.getElementById(`bs${x}`);
                  button2.style.display = "block";

                  switch (x) {
                    case 1:
                      button2.textContent = "Order Details";
                      button2.setAttribute("value", "OrderDetails");
                      break;
                    case 2:
                      button2.textContent = "Order Status";
                      button2.setAttribute("value", "OrderStatus");
                      break;
                    case 3:
                      button2.textContent = "Other";
                      button2.setAttribute("value", "Other");
                      break;
                    case 4:
                      button2.style.display = "none";
                      button2.setAttribute("value", "None");
                      break;
                    default:
                      break;
                  }
                }
                break;

              case 3:
                for (let x = 1; x <= 4; x++) {
                  const button2 = document.getElementById(`bs${x}`);
                  button2.style.display = "block";

                  switch (x) {
                    case 1:
                      button2.textContent = "Payment Method";
                      button2.setAttribute("value", "PaymentMethod");
                      break;
                    case 2:
                      button2.textContent = "Other";
                      button2.setAttribute("value", "Other");
                      break;
                    case 3:
                    case 4:
                      button2.style.display = "none";
                      button2.setAttribute("value", "None");
                      break;
                    default:
                      break;
                  }
                }
                break;

              case 4:
                for (let x = 1; x <= 4; x++) {
                  const button2 = document.getElementById(`bs${x}`);
                  button2.style.display = "block";

                  switch (x) {
                    case 1:
                      button2.textContent = "Contact Us";
                      button2.setAttribute("value", "ContactUs");
                      break;
                    case 2:
                      button2.textContent = "Live Chat";
                      button2.setAttribute("value", "LiveChat");
                      break;
                    case 3:
                    case 4:
                      button2.style.display = "none";
                      button2.setAttribute("value", "None");
                      break;
                    default:
                      break;
                  }
                }
                break;

              case 5:
              case 6:
                for (let x = 1; x <= 4; x++) {
                  const button2 = document.getElementById(`bs${x}`);
                  button2.style.display = "none";
                  button2.setAttribute("value", "None");
                }
                break;

              default:
                break;
            }
          }, 1000);
        }

        // if (i == 5) {
        //   Rpytxt.innerHTML =
        //     "Our Business Hours are as follows:<br/><br/>Monday - Friday<br/>9 am - 8 pm<br/><br/>Saturday<br/>10 am - 5 pm<br/><br/>Sunday & Public Holidays<br/>Closed<br/><br/>For further assistance, feel free to reach out to us through <a href='#' style='color: blue; text-decoration: underline;'>Messenger</a>. Thank you for choosing us !";
        // }

        // if (i == 6) {
        //   Rpytxt.innerHTML =
        //     "Our company is located at:<br/><br/>Persiaran Multimedia, 63100 Cyberjaya, Selangor.<br/><br/>For any inquiries or assistance, please don't hesitate to contact us through <a href='#' style='color: blue; text-decoration: underline;'>Messenger</a>. We look forward to serving you !";
        // }

        if (i == 5 || i == 6) {
          if (i == 5) {
            Rpytxt.innerHTML =
              "Our Business Hours are as follows:<br/><br/>Monday - Friday<br/>9 am - 8 pm<br/><br/>Saturday<br/>10 am - 5 pm<br/><br/>Sunday & Public Holidays<br/>Closed<br/><br/>For further assistance, feel free to reach out to us through <a href='https://www.messenger.com/t/154811617722587/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0' style='color: blue; text-decoration: underline;'>Messenger</a>. Thank you for choosing us !";
          }

          if (i == 6) {
            Rpytxt.innerHTML =
              "Our company is located at:<br/><br/>Persiaran Multimedia, 63100 Cyberjaya, Selangor.<br/><br/>For any inquiries or assistance, please don't hesitate to contact us through <a href='https://www.messenger.com/t/154811617722587/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0' style='color: blue; text-decoration: underline;'>Messenger</a>. We look forward to serving you !";
          }
          document.getElementById("endChat").style.display = 'block';
          document.getElementById("endChat").style.marginTop = '-50px';
        }
      } else {
        button.style.display = "none";
      }
    }
  };

  // Second Button function
  const handleButtonClickSecond = (value) => {
    const RpyBox2 = document.getElementById("RpyBox2");
    const Rpytxt2 = document.getElementById("LeftRpy2");
    const EndChat = document.getElementById("endChat");

    RpyBox2.style.display = "block";

    for (let x = 1; x <= 4; x++) {
      const button2 = document.getElementById(`bs${x}`);

      if (x == value) {
        let values = button2.getAttribute("value");
        let Link =
          "Click <a href='https://www.messenger.com/t/154811617722587/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0' style='color: blue; text-decoration: underline;'>Here</a>";

        switch (values) {
          case "ProductInfo":
            Rpytxt2.innerHTML =
              "Certainly! To get the newest product information about our latest phone models, features, and pricing.<br/><br/>" +
              Link;
            break;

          case "ProductDamage":
            Rpytxt2.innerHTML =
              "Thank you for bringing this to our attention, and we're truly sorry for any inconvenience caused by the product damage😞😞.<br/><br/>To ensure we address this issue promptly, could you please provide more details, such as your order number and a brief description of the damage? Feel free to attach any photos you may have.<br/><br/>Additionally, we'd like to offer you the option to continue this conversation on Messenger for a more personalized and efficient resolution. Our team is ready to assist you further there.<br/><br/>" +
              Link +
              " to reach us at Messenger.";
            break;

          case "Return/Exchange":
            Rpytxt2.innerHTML =
              "Thank you for reaching out to us. We're sorry to hear about the issue with your product, and we're here to assist you with the return or exchange process.<br/><br/>To initiate a return or exchange,<br/><br/><span style='font-weight: bold;'>Please prepare the following details:</span><br/><br/>1. Your order number.<br/><br/>2. A brief description of the reason for the return or exchange.<br/><br/>3. If applicable, attach photos of the product or the specific issue you've encountered.<br/><hr style = 'border-color: white; border-width: 0.25px; margin-top: 20px;'/><br/>Once you have this information ready, kindly send it to our team on Messenger. You can reach us by<br/><br/>" +
              Link +
              "<br/><br/>Our team will review your request and guide you through the next steps. If you have any additional questions or concerns, please don't hesitate to let us know. We appreciate your understanding, and we're committed to ensuring your satisfaction.";
            break;

          case "OrderDetails":
            Rpytxt2.innerHTML =
              "Thank you for reaching out. We appreciate your inquiry about your order.<br/><br/>To assist you further, <span style='font-weight: bold;'>Please prepare the following details:</span><br/><br/>1. Your order number<br/><br/>To ensure a faster and more personalized response, we recommend continuing this conversation on our Messenger. Our customer service team is ready to assist you promptly. You can reach us on Messenger " +
              Link +
              ".<br/><br/>We appreciate your cooperation, and we look forward to assisting you on Messenger.";
            break;

          case "OrderStatus":
            Rpytxt2.innerHTML =
              "Thank you for reaching out regarding your order. We understand the importance of staying updated on your purchase.<br/><br/>For a quicker and more personalized response, we recommend continuing this conversation on our Messenger. You can reach our customer services team there by " +
              Link +
              ".<br/><br/>Once you send us a message on Messenger with your order number, our team will promptly provide you with the latest information on your order status.<br/><br/>If you have any additional questions or concerns, please feel free to let us know. We're here to assist you.";
            break;

          case "PaymentMethod":
            Rpytxt2.innerHTML =
              "We apologize for any inconvenience caused. Currently, our accepted payment methods include <span style='font-weight: bold;'>Credit Cards</span> & <span style='font-weight: bold;'>Debit Cards</span>.<br/><br/>However, we are exploring the possibility of adding more payment options in the future to enhance your shopping experience. If you have any specific preferences or suggestions, feel free to inform our team, and we will try our best to accommodate and assist you.<br/><br/>Additionally, if you have any further questions or concerns, feel free to drop a message in our Messenger ( " +
              Link +
              " ) for a quicker and more personalized response.";
            break;

          case "ContactUs":
            Rpytxt2.innerHTML =
              "If you have any further questions, concerns, or would like to provide feedback, please feel free to contact our customer service team through Messenger. For a more immediate and personalized response, you can drop us a message at Messenger ( " +
              Link +
              " ). We appreciate your communication and look forward to assisting you.";
            break;

          case "LiveChat":
            Rpytxt2.innerHTML =
              "For real-time assistance, we recommend continuing this conversation on our Messenger Live Chat. You can reach our team there by " +
              Link +
              ".<br/><br/>For a more immediate and personalized response, feel free to connect with us. We appreciate your communication and look forward to assisting you further.";
            break;

          case "Other":
            Rpytxt2.innerHTML =
              "Please contact us on Messenger, and our team will do their best to assist you.<br/><br/>" +
              Link +
              " to get in touch. We appreciate your communication and are here to help !";
            break;

          default:
            break;
        }
      } else {
        button2.style.display = "none";
      }

      EndChat.style.display = 'block';
      EndChat.style.marginTop = '20px';
    }
  };

  return (
    <div>
      <Main>
        <Container onClick={ShowMessage} id="disIcon">
          <Icon>
            <ChatIcon />
          </Icon>
        </Container>

        <ContainerBox id="ContainerBox">
          <HeadContainer>
            <H1>Customer Services</H1>
            <P>Typically replies within a day</P>
            <CloseBtn onClick={ShowMessage}></CloseBtn>
          </HeadContainer>

          <TimeBox>
            <P1>{DisplayTime()}</P1>
          </TimeBox>

          <MessageBox>
            <P2 id="Message"></P2>

            <div id="Left">
              <P2>
                Hi there <Span>👋</Span>
              </P2>
              <P2>How can I assist you ?</P2>
            </div>
          </MessageBox>

          <MessageBoxRight1>
            <div id="Right">
              {[1, 2, 3, 4, 5, 6].map((buttonNumber) => (
                <Btn1
                  key={`b${buttonNumber}`}
                  id={`b${buttonNumber}`}
                  onClick={() => handleButtonClick(buttonNumber)}
                ></Btn1>
              ))}
            </div>
          </MessageBoxRight1>

          <RpyBox id="RpyBox">
            <P2 id="LeftRpy"></P2>
          </RpyBox>

          <MessageBoxRight2>
            <div id="Right2">
              {[1, 2, 3, 4].map((buttonNumber2) => (
                <Btn2
                  key={`bs${buttonNumber2}`}
                  id={`bs${buttonNumber2}`}
                  onClick={() => handleButtonClickSecond(buttonNumber2)}
                ></Btn2>
              ))}
            </div>
          </MessageBoxRight2>

          <RpyBox2 id="RpyBox2">
            <P2 id="LeftRpy2"></P2>
          </RpyBox2>

          <TimeBox><End id="endChat"><Gap>----------</Gap> Chat End <Gap>----------</Gap></End></TimeBox>

          <BtnBox>
            <ChatBtn onClick={ChatPage}>
              <P3>Need Help</P3>
            </ChatBtn>
          </BtnBox>
        </ContainerBox>
      </Main>
    </div>
  );
}
