import React, { useRef , useState , useEffect } from 'react';

import styled from "styled-components";
import Modal from "./modal";
import Header from '@/components/Header';
import LeftSetting from '@/components/LeftSetting';

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
        
    justify-content: flex-start; 
    align-items: flex-end; 
    /* flex-flow: row wrap; */ 
    flex-direction: row; 
    flex-wrap: wrap; 

    // background-color: #bbdefb;
    height: 100%;
    width: 93%;
    padding-bottom: 3px;
    // gap: 5px;
    border-bottom: 1px solid #6C757D;
`;
const Left_title = styled.div`
    display: flex;
        
    justify-content: flex-start; 
    align-items: flex-start; 
    /* flex-flow: column wrap; */ 
    flex-direction: column; 
    flex-wrap: wrap; 

    // background-color: #bbdefb;
    height: 100%;
    
    // gap: 5px;
    flex-grow:1;
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
const Right_title = styled.div`
    /* flex:0 1 auto; */
        order:0;
        flex-grow:0;
        align-self: self-end;
`;
const Button_dialog = styled.button`
    width : 110px;
    height : 50px;
    border-radius : 5px;
    border:none;
    align-items: flex-end;
    background-color: #212529;
    color:#F8F9FA;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    &:hover {
        background-color: #FF8A1E;
    }
`;
const Dialog = styled.dialog`
    display: flex;
    
    justify-content: flex-start; 
    align-items: stretch; 
    /* flex-flow: column wrap; */ 
    flex-direction: column; 
    flex-wrap: wrap; 
    align-content: space-around;

    background-color: #bbdefb;
    height: 100%;
    padding: 15px;
    gap: 5px;

`;
const Addcardtitle = styled.div`
    /* flex:0 1 auto; */
    align-self:flex-start;
`;
const Card_details = styled.div`
    /* flex:1 1 auto; */
    order:0;
    flex-grow:1;
    align-self:flex-start;
`;

const Card_bill = styled.div`
    /* flex:1 1 auto; */
    flex-grow:1;
    flex-shrink:1;
    align-self:flex-start;
`;


const CardContainer = styled.div`
    border : 0.6px ridge black;
    border-radius: 8px;
    border-color: #343A40;

    display: flex;
    
    justify-content: space-around; 
    align-items: stretch; 
    /* flex-flow: row wrap; */ 
    flex-direction: row; 
    flex-wrap: wrap; 
    align-content: stretch;

    height: 20%;
    padding: 20px;
    gap: 5px;
    margin-right: 5%;
    margin-bottom: 0.5rem;

    &:hover{
        border-color: red;
    }
`;

const Card_typeicon = styled.div`
    display: flex;
    justify-content: flex-end ;
    align-items: center;
    flex-direction: row;
    // background: #ffecb3;
`;

const Card_del = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border:none;
    border-radius:5px;
    width: 30px;
    height: 30px;
    &:hover{
        background-color: #343A40;
    }
`;
const Icon_x = styled.img`
    scale: 0.8;
    cursor: pointer;
    border-radius: 4px;
    &:hover{
        background-color: #343A40;
        content: url('AfterLogin/delete_white.png');
    }
`;
const Card_info = styled.div`
    /* flex:1 1 auto; */
    order:0;
    flex-grow:1;
    flex-shrink:1;
    align-self:auto;

`;
const Card_type = styled.div`
    // background: #ffecb3;
`;

const Card_expdate = styled.div`
    // background: #ffecb3;
`;

const Card_typetitle = styled.p`
    display: inline-block;
    width: 200px;
    height: 20px;
    margin : 0;
    text-align: right;
    margin-right: 4rem;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Poppins', sans-serif;
`;

const Card_number = styled.p`
    display: inline-block;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Poppins', sans-serif;
`;

const Card_expdatetitle = styled.p`
    display: inline-block;
    width: 200px;
    height: 20px;
    margin : 0;
    text-align: right;
    margin-right: 4rem;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Poppins', sans-serif;
    color: #6C757D;
`;

const Exp_date = styled.p`
    display: inline-block;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Poppins', sans-serif;
    color: #6C757D;
`;



const Icon = styled.img`
    width: 40px;
    height: 40px;
    padding: 0 10px;
`;

const CartDet = styled.div`
    width: 88%;
    height: fit-content;
    min-height:540px;
    display: flex;
    border-radius: 10px;
    background: #E9ECEF;

    box-shadow: -4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-top: 30px;
    padding-top: 2%;
    padding-left: 5%;
    // padding-right: 5%;
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
    height: 100px;
    border-radius: 10px;
    border: 1px solid #343A40;
    background-position: center;
    background-size: cover;
    background-image: ${props => props.image ? `url(${props.image})` : 'url("AfterLogin/User_Icon.png")'};
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
    height: 32%;
    border-radius: 8px;
    border: 1px solid #343A40;
    background: #343A40;
    color: #F8F9FA;
    text-align: center;
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
    color: #6C757D;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 400;
`;

const Span2 = styled(Span)`
    width: 12%;
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

const Input = styled.input`
    height: 25px;
    width: 25%;
    background-color: transparent;
    border: none;
    /* border-bottom: 1px solid gray; */
    padding-left: 10px;
    font-size: 18px;
    font-family: Poppins;
    font-weight: 400;
`;

const Btn = styled.button`
    border-radius: 10px;
    border: 1px solid #343A40;
    background: #343A40;
    color: #F8F9FA;
    text-align: center;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 400;
    width: 10%;
    height: 8%;
    margin: 4% 0 0 10%;
    cursor: pointer;
`;
const Button_Close = styled.button`
    width:30px;
    height:30px;
    border-radius : 30px;
    border:none;
    /* align-items: flex-end; */
    background-color: #212529;
    color:#F8F9FA;
    font-family: 'Poppins', sans-serif;
    font-size: 22px;
    cursor: pointer;

    &:hover{
    background-color: #FF8A1E;
    }
    position: fixed;
    z-index:2;
    transform: translateX(-295px) translateY(-52px);
`;

export default function Profile() {

    
    const [modal, setModal] = useState(false)
      
    const toggleModal = () =>{
        setModal(!modal);
    }

    useEffect(() => {
        if (typeof document !== 'undefined') {
          if (modal) {
            document.body.style.overflow = 'hidden';
          } else {
            document.body.style.overflow = 'visible';
          }
        }
      }, [modal]);
    
      
    const [cards, setCards] = useState([
        // Initialize with existing cards if any
        // Example:
        { cardType: "Master Card", cardNumber: "**** **** **** 1234", expireDate: "8/29" },
      ]);
    
        const handleAddCard = (newCard) => {
          setCards([...cards, newCard]);
          toggleModal();
        };

        const handleDeleteCard = (index) => {
            // 复制当前的卡片数组
            const updatedCards = [...cards];
            // 根据索引删除对应的卡片
            updatedCards.splice(index, 1);
            // 更新卡片数组
            setCards(updatedCards);
          };
    
    return (
        <div>
            <Header />
            <Container>
                <LeftSetting />
                <CartCon>
                    <CartTop>
                        <Left_title>
                            <Title>Bank & Card</Title>
                            <MiniTitle>Manage Your Card</MiniTitle>
                        </Left_title>
                        <Right_title>
                        <Button_dialog onClick={toggleModal}>Add new Card</Button_dialog>
                        {modal && (
                            <div>
                            <Modal onSave={handleAddCard}></Modal>
                            <Button_Close onClick={toggleModal}>&times;</Button_Close>
                            </div>
                            )}
                        
                        </Right_title>
                    </CartTop>
                    
                    <CartDet>
                        {cards.map((card, index) => (
                        <CardContainer key={index}>

                            <Card_typeicon>
                                <Icon_x src="Item/card.png"></Icon_x>
                            </Card_typeicon>

                            <Card_info>   
                                <Card_type>
                                    <Card_typetitle>{card.cardType}</Card_typetitle>
                                    <Card_number id="card_number">{card.cardNumber}</Card_number>
                                </Card_type>

                                <Card_expdate>
                                    <Card_expdatetitle>Expire Date (MM/YY)</Card_expdatetitle>
                                    <Exp_date id="exp_date">{card.expireDate}</Exp_date>
                                </Card_expdate>
                            </Card_info>

                            <Card_del>
                                <Icon_x src="AfterLogin/delete.png" alt="default" id="delete" onClick={() => handleDeleteCard(index)}></Icon_x>
                            </Card_del>
                        </CardContainer>
                        ))}
                        
                        {/* <CardContainer>

                            <Card_typeicon>
                                <Icon_x src="Item/card.png"></Icon_x>
                            </Card_typeicon>

                            <Card_info>   
                                <Card_type>
                                    <Card_typetitle>Master Card</Card_typetitle>
                                    <Card_number id="card_number">**** **** **** 1234</Card_number>
                                </Card_type>

                                <Card_expdate>
                                    <Card_expdatetitle>Expire Date (MM/YY)</Card_expdatetitle>
                                    <Exp_date id="exp_date">8/29</Exp_date>
                                </Card_expdate>
                            </Card_info>

                            <Card_del>
                                <Icon_x src="AfterLogin/delete.png" alt="default" id="delete"></Icon_x>
                            </Card_del>

                        </CardContainer>

                        <CardContainer>

                            <Card_typeicon>
                                <Icon_x src="Item/card.png"></Icon_x>
                            </Card_typeicon>

                            <Card_info>   
                                <Card_type>
                                    <Card_typetitle>Master Card</Card_typetitle>
                                    <Card_number id="card_number">**** **** **** 1234</Card_number>
                                </Card_type>

                                <Card_expdate>
                                    <Card_expdatetitle>Expire Date (MM/YY)</Card_expdatetitle>
                                    <Exp_date id="exp_date">8/29</Exp_date>
                                </Card_expdate>
                            </Card_info>

                            <Card_del>
                                <Icon_x src="AfterLogin/delete.png" alt="default" id="delete"></Icon_x>
                            </Card_del>

                        </CardContainer> */}
                    </CartDet>
                </CartCon>
            </Container>
        </div>
    );
}
