import styled from "styled-components"
import LeftSetting from "../components/LeftSetting"
import Header from "@/components/Header"
import SessionOut from "@/components/SessionOut";
import { useSession } from "next-auth/react";
import { useEffect, useState } from 'react';
import { FaHistory } from "react-icons/fa";

const HistoryIcon = styled(FaHistory)`
    width: 40px;
    height: 40px;
`;

const Container = styled.div`
  margin-top: -30px;
  width: 100%;
  min-height: 760px;
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
  flex-direction: column;
  width: 98%;
  height: auto;
  border-bottom: 1px solid black;
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

const CartDet = styled.div`
  width: 98%;
  min-height: 540px;
  display: flex;
  border-radius: 10px;
  background: #e9ecef;

  box-shadow: -4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-top: 30px;
  padding-bottom: 2%;
  margin-bottom: 35px;
  flex-direction: column;
`;

const HistoryTitleCon = styled.div`
    display: flex;
    flex-direction: row;
    width: 98%;
    height: fit-content;
    border-bottom: 1px solid gray;
    margin-left: 1%;
    margin-right: 1%;
`;

const HistoryTitle = styled.p`
    font-size: 18px;
    font-weight: 600;
    width: 22.5%;
    height: 10px;
    text-align: center;
`;

const HistoryTitleNo = styled(HistoryTitle)`
    width: 5%;
`;

const HistoryCon = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid lightgray;
    width: 98%;
    height: 40px;
    margin: 0;
    margin-left: 1%;
    margin-right: 1%;
    padding: 0;
`;

const HText = styled.p`
    font-size: 18px;
    font-weight: 500;
    width: 22.5%;
    height: 40px;
    margin: 0;
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Btn = styled.button`
    width: 40%;
    height: 30px;
    border-radius: 8px;
    border: none;
    background-color: ${props => props.success ? 'lightgreen' : 'lightcoral'};
    font-weight: 600;
    font-size: 14px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const PrtBtn = styled.button`
    width: 8%;
    height: 30px;
    border-radius: 8px;
    border: 1px solid black;
    cursor: pointer;
    margin-left: auto;
    margin-top: 2%;
    margin-right: 4%;

    font-size: 16px;
    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: lightgray;
    }
`;

const purchaseHistoryData = [   // while have link to database , delete this 
    { id: 1, item: 'Iphone 15 Pro Max', qty: 1, price: 1399, paymentStatus: true },
    { id: 2, item: 'Samsung Galaxy S22', qty: 2, price: 999, paymentStatus: false },
    { id: 3, item: 'MacBook Pro 2022', qty: 1, price: 2499, paymentStatus: true },
    { id: 4, item: 'iPad Air 5', qty: 1, price: 699, paymentStatus: true },
    { id: 5, item: 'Sony PlayStation 5', qty: 1, price: 499, paymentStatus: false },
    { id: 6, item: 'Xbox Series X', qty: 1, price: 499, paymentStatus: true },
    { id: 7, item: 'Dell XPS 13', qty: 1, price: 1199, paymentStatus: false },
    { id: 8, item: 'Google Pixel 6', qty: 1, price: 699, paymentStatus: true },
    { id: 9, item: 'Apple Watch Series 7', qty: 1, price: 399, paymentStatus: true },
    { id: 10, item: 'Amazon Echo Dot', qty: 3, price: 29, paymentStatus: false },
    { id: 11, item: 'Logitech G Pro X Mechanical Keyboard', qty: 1, price: 149, paymentStatus: true },
    { id: 12, item: 'Canon EOS R5', qty: 1, price: 3799, paymentStatus: false },
    { id: 13, item: 'Bose QuietComfort 35 II', qty: 1, price: 299, paymentStatus: true },
    { id: 14, item: 'Nintendo Switch OLED Model', qty: 1, price: 349, paymentStatus: false },
    { id: 15, item: 'LG C1 OLED TV', qty: 1, price: 1499, paymentStatus: true },
    { id: 16, item: 'Fitbit Charge 5', qty: 1, price: 179, paymentStatus: true },
    { id: 17, item: 'GoPro Hero 10 Black', qty: 1, price: 499, paymentStatus: false },
    { id: 18, item: 'Microsoft Surface Laptop 4', qty: 1, price: 1299, paymentStatus: true },
    { id: 19, item: 'Razer DeathAdder Elite Gaming Mouse', qty: 1, price: 69, paymentStatus: true },
    { id: 20, item: 'Samsung 32-Inch Odyssey G5 Gaming Monitor', qty: 1, price: 349, paymentStatus: false },
];

export default function PurchaseHistory() {
    const {data : session} = useSession();

    const [purchaseHistory, setPurchaseHistory] = useState([]);
    const [printStatus, setPrintStatus] = useState(false);

    useEffect(() => {
        // Fetch data from your backend API
        fetch('/api/purchase-history')
            .then(response => response.json())
            .then(data => setPurchaseHistory(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handlePrint = () => {
        setPrintStatus(true);
    };

    const printOut = () => {
        window.print();
    }

    if(!session) {
        return(<><SessionOut /></>)
    }

    if (purchaseHistory.length === 0) {
        return (
            <>
                <Header session={true} />
                <Container>
                    <LeftSetting />
                    <CartCon>
                        <CartTop>
                            <Title>Purchase History</Title>
                            <MiniTitle>Review your past purchases here</MiniTitle>
                        </CartTop>
                        <CartDet style={{
                            display:  "flex", 
                            flexDirection: 'row',
                            gap: '30px',
                            placeContent: 'center', 
                            justifyContent:"center", 
                            alignItems: 'center'
                        }}>
                            <HistoryIcon />

                            <p style={{
                                fontSize:'28px',
                                fontWeight: '600'
                            }}>No purchase history available</p>
                        </CartDet>
                    </CartCon>
                </Container>
            </>
        );
    }

    if(printStatus == true) {
        return(
            <>
            <Container>
                <CartCon style={{marginLeft: 'auto' , marginRight: 'auto' , width: '100%' , marginTop: '0'}}>
                    <img src="Company_Logo_Black_Mode.png" width="30%" height="105px" alt="Error" style={{marginLeft: 'auto' , marginRight: 'auto' , marginTop: '30px'}}/>
                    
                    <CartDet style={{width: '100%' , marginTop: '10px' , marginBottom: '0'}}>
                        <HistoryTitleCon>
                            <HistoryTitleNo>No</HistoryTitleNo>
                            <HistoryTitle style={{width: '35%'}}>Item</HistoryTitle>
                            <HistoryTitleNo>Qty</HistoryTitleNo>
                            <HistoryTitle style={{width: '15%'}}>Price</HistoryTitle>
                            <HistoryTitle>Total Price</HistoryTitle>
                            <HistoryTitle>Payment Status</HistoryTitle>
                        </HistoryTitleCon>

                        {purchaseHistoryData.map((item, index) => (
                            <HistoryCon key={index}>
                                <HText style={{width: '5%'}}>{index+1}</HText>
                                <HText style={{width: '35%' , textAlign: 'left' , justifyContent: 'left'}}>{item.item}</HText>
                                <HText style={{width: '5%'}}>{item.qty}</HText>
                                <HText style={{width: '15%'}}>$ {item.price.toFixed(2)}</HText>
                                <HText>$ {(item.price*item.qty).toFixed(2)}</HText>
                                <HText>
                                    <Btn type="button" success={item.paymentStatus}>
                                        {item.paymentStatus ? 'Success' : 'Failed'}
                                    </Btn>
                                </HText>
                            </HistoryCon>
                        ))}

                        <div style={{display: 'flex' , flexDirection: 'row' , marginLeft: 'auto' , marginRight: 'auto' , marginTop: '20px' , gap: '300px'}}>
                            <PrtBtn type="button" onClick={() => window.location = "purchasehistory"} style={{width: '80px'}}>Return</PrtBtn>

                            <PrtBtn type="button" onClick={printOut} style={{width: '80px'}}>Print</PrtBtn>
                        </div>
                    </CartDet>
                </CartCon>
            </Container>
            </>
        )
    }

    return(
        <>
            <Header session={true}/>
            <Container>
                <LeftSetting />
                <CartCon>
                    <CartTop>
                      <Title>Purchase History</Title>
                      <MiniTitle>Review your past purchases here</MiniTitle>
                    </CartTop>

                    <CartDet>
                        <HistoryTitleCon>
                            <HistoryTitleNo>No</HistoryTitleNo>
                            <HistoryTitle style={{width: '35%'}}>Item</HistoryTitle>
                            <HistoryTitleNo>Qty</HistoryTitleNo>
                            <HistoryTitle style={{width: '10%'}}>Price</HistoryTitle>
                            <HistoryTitle>Total Price</HistoryTitle>
                            <HistoryTitle>Payment Status</HistoryTitle>
                        </HistoryTitleCon>

                        {purchaseHistoryData.map((item, index) => ( // change to purchaseHistory , because purchaseHistoryData is for example show the data only
                            <HistoryCon key={index}>
                                <HText style={{width: '5%'}}>{index+1}</HText>
                                <HText style={{width: '35%' , textAlign: 'left' , justifyContent: 'left'}}>{item.item}</HText>
                                <HText style={{width: '5%'}}>{item.qty}</HText>
                                <HText style={{width: '10%'}}>$ {item.price.toFixed(2)}</HText>
                                <HText>$ {(item.price*item.qty).toFixed(2)}</HText>
                                <HText>
                                    <Btn type="button" success={item.paymentStatus}>
                                        {item.paymentStatus ? 'Success' : 'Failed'}
                                    </Btn>
                                </HText>
                            </HistoryCon>
                        ))}

                        <PrtBtn type="button" onClick={handlePrint}>Print</PrtBtn>
                    </CartDet>
                </CartCon>
            </Container>
        </>
    )
}