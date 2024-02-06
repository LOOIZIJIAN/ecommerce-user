import React, { useRef , useState } from 'react';
import styled from "styled-components";
import GlobalStyles from './fontstyle';
import QuantityArea from "./quantity";

const Wholepage = styled.div`
    display: flex;
        
    justify-content: center; 
    align-items: flex-start; 
    /* flex-flow: row wrap; */ 
    flex-direction: row; 
    flex-wrap: wrap; 
    align-content: flex-start;

    background-color: #F8F9FA;
    height: 100%;
    margin-top:88px;
    margin-left:88px;
    margin-right:88px;
    gap:5px;
`;
const Left = styled.div`

`;
const Right = styled.div`
    flex-grow:1;
`;
const CurrentImage = styled.img`

`;
const Left_side_Container = styled.div`
    display: flex;
        
    justify-content: flex-start; 
    align-items: flex-start; 
    /* flex-flow: column nowrap; */ 
    flex-direction: column; 
    flex-wrap: nowrap; 

    background-color: #F8F9FA;
    height: 100%;
    margin : 8px;
`;
const Image_Container = styled.div`
    flex-grow:2;
`;
const Slider_Container = styled.div`
    flex-grow:1;
    position: relative;
    // background-color: red;
`;
const Image_slider = styled.img`
    width: 75px;
    height: 75px;
    
`;
const Button_Previous = styled.button`
    border: none;
    left: 0;
    opacity: 0.4;
    position: absolute;
    transform: scale(0.4);
    transform-origin:left;
    &:hover{
        opacity: 1;
    }
`;

const Button_Next = styled.button`
    border: none;
    right:0;
    opacity: 0.4;
    position: absolute;
    transform: scale(0.4);
    transform-origin:right;
    &:hover{
        opacity: 1;
    }
`;
const Icon_Previous = styled.img`
       
`;
const Icon_Next = styled.img`
    
`;
const Rating_Container = styled.div`
    flex-grow:1;

    display: flex;
    
    justify-content: flex-start; 
    align-items: center; 
    /* flex-flow: row wrap; */ 
    flex-direction: row; 
    flex-wrap: wrap; 

    background-color: #F8F9FA;
    height: 100%;
    gap:155px;
`;
const Left_rating = styled.div`
    flex-grow:1;

    display: flex;
    
    justify-content: flex-start; 
    align-items: flex-start; 
    /* flex-flow: column; */ 
    flex-direction: column;  

    background-color: #F8F9FA;
    height: 100%;
    margin: 0 8px;
`;
const Right_rating = styled.div`

`;
const Rating_star = styled.div`

`;
const Star = styled.span`
    color: #DEE2E6;

    &:active{
        color: #f6497e;
    }
`;
const Sold_quantity = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size:14px;
`;
const Love_Icon = styled.span`
    cursor:pointer;

    &:active{
        content:'&#x1f495;';
    }
`;
const Right_side_Container = styled.div`
    margin: 4px;
    display: flex;
    justify-content: center; 
    align-items: flex-start;  //flex-end
    /* flex-flow: column wrap; */ 
    flex-direction: column; 
    flex-wrap: wrap; 

    background-color:#F8F9FA;
    height: 100%;
`;
const Top_part = styled.div`
    flex-grow:1;

    display: flex;
    width: 100%;
    justify-content: center; 
    align-items: flex-end; 
    /* flex-flow: row wrap; */ 
    flex-direction: row; 
    flex-wrap: wrap; 
    align-content: stretch;

    background-color: #F8F9FA;
    // height: 100%;
    margin-top : 6px;
    padding-bottom :6px;
    border-bottom: 1px ridge #495057;
`;
const Tag = styled.span`
    color: #F8F9FA;
    background-color: #0000d9;
    padding:6px;
    border-radius:4px;
    font-family: 'Poppins', sans-serif;
    font-size:20px;
`;
const Product_Name = styled.span`
    flex-grow:1;
    padding-left: 6px;
    font-family: 'Poppins', sans-serif;
    font-size : 28px;
`;
const Fx_bar = styled.div`
    display: flex;
        
    justify-content: flex-end; 
    align-items: flex-start; 
    /* flex-flow: row wrap-reverse; */ 
    flex-direction: row; 
    flex-wrap: nowrap; 

    background-color: #F8F9FA;
    height: 100%; 
 `;
const Button = styled.button`
    border: none;
    background-color: #343A40;
    border-radius: 4px;
    margin: 0 7px;
    
    &:hover{
        background-color: #fa0366;
    }
`;
const Image = styled.img`
    
`;
const Mid_part = styled.div`
    background-color: #E9ECEF;

    display: flex;
    justify-content: center; 
    align-items: center; 
    /* flex-flow: row wrap; */ 
    flex-direction: row; 
    flex-wrap: wrap; 
    margin-top: 6px;

    border-radius: 6px;

    width: 99%;
    height: 50%;
`;
const Left_Price = styled.div`
    flex-grow:1;

    display: flex;
    
    justify-content: flex-start; 
    
    /* flex-flow: column wrap; */ 
    flex-direction: column; 
    flex-wrap: wrap; 

`;
const Upper_Price = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items: flex-end;
`;

const Main_Price = styled.h1`
    display: inline-block;
    color: #fc0d0d;
    margin-left: 50px;
    margin-top:0;
    margin-bottom:0;
    font-weight: 300;
`;
const Sub_Price = styled.span`
    color: #a8a6a7; 
    margin-left:6px;

`;
const Discout_rate_tag = styled(Tag)`
    padding:3px;
    font-size:13px;
    margin-left:5px;
    font-family: "poppins",sans-serif;
`;
const Right_Cop = styled.div`
    height:fit-content;
`;
const Authentic_Cop = styled.img`
    transform: scale(0.9);
    padding-right: 15vh;
`;
const Bottom_Desc = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left:50px;
    margin-top: 6px;
`;
const Icon_shield = styled.img`

`;
const Desc = styled.span`
    color: #fc0d0d;
    display :flex;
    justify-content: center;
    
`;
const Bottom_part = styled.div`
    flex-grow:2;
   
    display: flex;
    
    justify-content: flex-start; 
    align-items: stretch; 
    /* flex-flow: column wrap; */ 
    flex-direction: column; 
    flex-wrap: wrap; 
    margin-top:30px;
    width: 70%;
    font-family: "poppins", sans-serif;
`;
const Shipping = styled.div`
    display: flex;
        
    justify-content: flex-start; 
    align-items: stretch; 
    
    flex-direction: row; 
    flex-wrap: wrap; 
    margin: 10px;
`;
const Icon_mini = styled.img`
    width:32px;
    height:32px;
    display: flex;
    justify-content: center;
`;
const Directory = styled.span`
    display: flex;
    align-items: center;
    margin-left : 20px;
    justify-content: center;
    width:70px;
    color: #495057;
`;

const Zone = styled.div`
    display:flex;
    justify-content:flex-end;
    align-items: flex-start;
    flex-direction: column;
`;
const Content_text = styled.span`
    display: flex;
    align-items: flex-end;
    margin-left : 20px;
    justify-content: center;
    padding:3px;
`;
const User_Address = styled.span`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-left: 40px;
`;
const Calc_Fee = styled.span`
    display: flex;
    align-items: flex-end;
    margin-left : 20px;
    justify-content: center;
    margin-left: 40px;
`;
const Color = styled.div`
    display: flex;
            
    justify-content: flex-start; 
    align-items: center; 
    /* flex-flow: row wrap; */ 
    flex-direction: row; 
    // flex-wrap: wrap; 
    margin: 10px;
`;
const Selection_area = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; 
`;
const Selection = styled.button`
    padding: 7px 30px;
    border-radius: 5px;
    border : 1px ridge #6C757D;
    margin-left: 20px;
    font-family: "poppins", sans-serif;
    background-color:transparent;
    margin-bottom: 10px;

    &:hover{
        background-color : #343A40;
        color: #F8F9FA;
    }
`;
const Spec = styled.div`
    display: flex;
        
    justify-content: flex-start; 
    align-items: center; 
    /* flex-flow: row wrap; */ 
    flex-direction: row; 
    // flex-wrap: wrap; 
    margin: 10px;
`;
const Quantity = styled.div`
    display: flex;
        
    justify-content: flex-start; 
    align-items: stretch; 
    /* flex-flow: row wrap; */ 
    flex-direction: row; 
    flex-wrap: wrap;
    margin: 10px; 
`;
const Quantity_area = styled.div`
    display: flex;
    flex-direction: row;
    margin-left : 10px;
`;
const Decrease = styled.button`
    border:none;
    background-color:transparent;
    transform:scale(1.8);
    margin : 10px;
    cursor:pointer;

`;
const Increase = styled(Decrease)``;
const Number = styled.span`
    transform:scale(1.3);
    margin : 10px;
`;
const Addcart = styled.button`
    width : 110px;
    height : 50px;
    border : none;
    background-color:#212529;
    border-radius : 5px;
    color:#F8F9FA;
    margin: 10px;
    font-size : 15px;
    font-family: 'poppins' , sans-serif;
    &:hover {
        background-color: #FF8A1E;
    }
`;
const Buynow = styled(Addcart)``;

const Button_area = styled.div``;
const Spec_Desc = styled.div`
    width :95%;    
`;
const Head = styled.h1`

    border: 1px ridge #212529;
    background-color:#212529;
    border-radius : 5px 5px 0 0;
    color:#F8F9FA;
    font-weight:normal;
    font-size:18px;
    padding-left:10px;
    padding-bottom: 6px;
    padding-top: 6px;
    margin-bottom:0;
`;
const Content = styled.div`
    border: 1px ridge #212529;
    padding:20px;
`;
const TextArea = styled.p`
    font-family: 'poppins' , sans-serif;
    
`;
export default function Productdetail(){
    const [loveIconClicked, setLoveIconClicked] = useState(false);
    const [loveCount, setLoveCount] = useState(0);

    const handleLoveIconClick = () => {
        setLoveIconClicked(!loveIconClicked);
        var icon=loveCount;
        setLoveCount(loveIconClicked ? loveCount + 1 : loveCount - 1);
        console.log(icon);
    };


    return(
        <>
        <GlobalStyles/>
        
        <Wholepage>
            <Left>
                <Left_side_Container>
                    <Image_Container>
                        <CurrentImage src="./icon/Item_Image.png" alt="Product Image"></CurrentImage>
                    </Image_Container>

                    <Slider_Container>
                        {/* <Button_Previous>
                            <Icon_Previous src="./icon/icon/right-arrow__3_-removebg-preview.png"></Icon_Previous>
                        </Button_Previous>
                        <Image_slider src="./icon/Item_Image.png"></Image_slider>
                        <Image_slider src="./icon/Item_Image.png"></Image_slider>
                        <Image_slider src="./icon/Item2.png"></Image_slider>
                        <Image_slider src="./icon/Item_Image.png"></Image_slider>
                        <Button_Next>
                            <Icon_Next src="./icon/right-arrow__2_-removebg-preview - Copy.png"></Icon_Next>
                        </Button_Next> */}
                    </Slider_Container>

                    <Rating_Container>
                        <Left_rating>
                        {/* <StarRating rating={5} totalStars={5} onStarClick={(star) => console.log(star)} /> */}
                            <Sold_quantity>
                                6.66k Sold
                            </Sold_quantity>
                        </Left_rating>
                        <Right_rating>
                            <Love_Icon onClick={handleLoveIconClick}>
                            {loveIconClicked ? '❤️' : '🤍'}
                            </Love_Icon>
                        </Right_rating>
                    </Rating_Container>
                </Left_side_Container>
            </Left>
            <Right>
                <Right_side_Container>
                    <Top_part>
                        <Tag>Promotion</Tag>
                        <Product_Name>Apple Iphone 16 Ultra Pro Max</Product_Name>
                            <Fx_bar>
                                <Button><Image src="./icon/wishlist (1).png"></Image></Button>
                                <Button><Image src="./icon/wishlist (1).png"></Image></Button>
                                <Button><Image src="./icon/wishlist (1).png"></Image></Button>
                            </Fx_bar>
                    </Top_part>
                    <Mid_part>
                        <Left_Price>
                            <Upper_Price>
                                <Main_Price>MYR 2340.00</Main_Price>
                                <del className='del'><Sub_Price>MYR 2599.00</Sub_Price></del>
                                <Discout_rate_tag>10% OFF</Discout_rate_tag>
                            </Upper_Price>
                            <Bottom_Desc>
                                <Icon_shield src="./icon/secure.png"></Icon_shield>
                                <Desc>100% Authentic Guarantee</Desc>
                            </Bottom_Desc>
                        </Left_Price>
                        <Right_Cop>
                            <Authentic_Cop src="./icon/Red 120.png"></Authentic_Cop>
                        </Right_Cop>
                    </Mid_part>
                    <Bottom_part>
                        <Shipping>
                            <Icon_mini src="./icon/shipping-cost.png"></Icon_mini>
                            <Directory>Shipping</Directory>
                            <Zone>
                                <Content_text>Shipping To :  <User_Address>City, Country</User_Address></Content_text>
                                <Content_text>Shipping Fee :  <Calc_Fee>MYR 25.00</Calc_Fee></Content_text>
                            </Zone>
                        </Shipping>
                        <Color>
                            <Icon_mini src="./icon/palette.png"></Icon_mini>
                            <Directory>Color</Directory>
                            <Selection_area>
                                <Selection id="Selection">Red</Selection>
                                <Selection id="Selection">Orange</Selection>
                                <Selection id="Selection">Yellow</Selection>
                                <Selection id="Selection">Black Titanium</Selection>
                                <Selection id="Selection">Blue</Selection>
                                <Selection id="Selection">Yellow</Selection>
                                {/* Please dont try over 6 selection dont ask me why!!! */}
                            </Selection_area>
                        </Color>
                        <Spec>
                            <Icon_mini src=".\icon\memory-card (1).png"></Icon_mini>
                            <Directory>Capacity</Directory>
                            <Selection_area>
                                <Selection id="Selection">64 GB</Selection>
                                <Selection id="Selection">128 GB</Selection>
                                <Selection id="Selection">256 GB</Selection>
                                <Selection id="Selection">512 GB</Selection>
                                <Selection id="Selection">1 TB</Selection>
                                <Selection id="Selection">64 GB</Selection>
                                {/* Please dont try over 6 selection dont ask me why!!! */}
                            </Selection_area>
                        </Spec>
                        <Quantity>
                            <Icon_mini src=".\icon\coins.png"></Icon_mini>
                            <Directory>Quantity</Directory>
                            <Quantity_area>
                                <QuantityArea></QuantityArea>
                            </Quantity_area>
                        </Quantity>
                        <Button_area>
                            <Addcart>Add to Cart</Addcart>
                            <Buynow>Buy Now</Buynow>
                        </Button_area>
                    </Bottom_part>
                </Right_side_Container>
                </Right>
                <Spec_Desc>
                    <Head>Spec & Desciption</Head>
                    <Content>
                        <TextArea id="textarea" className='textarea'>
                        {/* <p></p>
                        <p></p>
                        <p></p> */}
                        </TextArea>
                    </Content>
                </Spec_Desc>
        </Wholepage>
        </>
    )
}

