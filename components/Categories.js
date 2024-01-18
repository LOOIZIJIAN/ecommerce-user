import styled, { keyframes } from "styled-components";
import CategoryLeft from "@/components/CategoryLeft";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Button from "./Button";
import { CartContext } from "./CartContext";
import { FcLikePlaceholder } from "react-icons/fc";
import CartIcon from "./icons/CartIcon";


// Cart Top Start
const CartCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 78%;
  margin-left: 22%;
  margin-top: 6%;
`;

const CartTop = styled.div`
  display: flex;
  flex-direction: row;
  width: 98%;
  height: 70px;
  border-bottom: 1px solid black;
`;

const H1 = styled.h1`
  color: #000;
  font-family: PT Sans;
  font-size: 35px;
  font-weight: 400;
  width: 82%;
  height: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  color: #000;
`;
// Cart Top End

//  Cart Item Start
const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 98.86%;
  height: fit-content;
  margin: 12px 10px 25px 10px;
`;

const A = styled.a`
  text-decoration: none;
  color: black;
  cursor: default;
  height:fit-content;
`;

const ItemImg = styled.img`
  width: 210px;
  height: 200px;
`;

const ItemTxtCon = styled.div`
  display: flex;
  width: 100%;
  // height: 110px;
  flex-direction: column;
  justify-content: flex-end;
  align-items:center;
`;

const DetailCon = styled.div`
  
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 210px;
  height: 320px;
  margin-right: 25px;

  border-radius: 5px;
  border: 0.5px solid #ced4da;
  position: relative;
  overflow: hidden;

  box-shadow: -5px 4px 4px 0px rgba(0, 0, 0, 0.25);
  
  img{
    object-fit: cover;
    transition: transform 0.8s ease; /* Add transition for transform */
    transform: scale(1);
  }
  
  &:hover{
    &::before{
      content: "";
      position: absolute;
      // inset :0; //2 select choose 1
      top:0; //2 select choose 1
      left: 0;
      right: 0;
      bottom:26.7%;

      z-index:1;
      transition: background 0.5s ease;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
      
    }
    img{
      transition: transform 0.8s ease; /* Add transition for transform */
      transform: translateY(20px) scale(1.15);

    
    }
`;

const OtherCon = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: fit-content;
  border-radius:10px;
  // border : 1px solid;
  margin-bottom: 6px;
  z-index:1;
  transition: transform 0.8s ease; 

  ${Item}:hover & {
    transform: translateY(-40%);
    

  }
`;

const Btn = styled.a`
  /* background-color: #CED4DA; */
  background-color: transparent;
  border: none;
  height: 45px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  color: black;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  cursor: default;

  &:hover {
    background: #f1645b;
    color: white;
  }
`;

const LeftBtn = styled(Btn)`
  width: 70%;
  border-bottom-left-radius: 5px;
  margin-right: 0;
`;

const Img = styled.img`
  margin-right: 8px;
`;

const RightBtn = styled(Btn)`
  width: 100%;
  padding-left:10px;
  padding-right:10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-left: 0;
  display:flex;
  justify-content: center;
  align-items: center;

  transition: transform 0.8s ease; /* Add transition for transform and border-radius */
  transform: scale(1); 

  &:hover {
    transition: transform 0.5s ease, border-radius 0.5s ease; /* Add transition for transform and border-radius */
    transform: scale(1.4,1.25); /* Enlarge the button */
    border-top-left-radius: 10px; /* Adjust border-radius on hover */
    border-bottom-left-radius: 10px;
  }
  
`;

const RBtnIcon = styled.img`
  width: 25px;
  height: 25px;
`;

const H2 = styled.h2`
  color: #000;
  text-align: center;
  // font-family: Poppins;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 17px;
  // font-weight: 400;
  margin-top: 0;
  padding: 0;
`;

const P = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
`;

// 改这个看
const Container = styled.div`
  margin-top: -30px;
  background-color: #f0f0f0;
  min-height: 91.5vh;
  height: auto;                                                                               
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight:200;
  // text-align: right;
  display:flex;
  justify-content: center;
  color: #000;
  // margin-right: 15px;
  z-index:2;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight:600;
    text-align: left;
  }
  ${Item}:hover & {
    position: relative;
    transform: translateY(-150%);
    font-size:2rem;
    transition: transform 0.8s ease,font-size 0.8s ease;
    color: #F8F9FA;

  }
`;

export default function Categories({product, cate}) {
  // console.log("product:"+product);
  // console.log("cate name:"+cate);

  const {addProduct} = useContext(CartContext);
  return (
    <div>
      <Container>
        <CartCon>
          <CartTop>
            {/* {cate && cate[0] && <H1>{cate[0].name}</H1>} */}
            <H1>{cate.name}</H1>  
          </CartTop>

        
          <CartItem>
           
            {/* {product.map(p=>(
              <Item>
              <A href={`/product/${p._id}`}>
                <ItemImg src={p.images} alt="Item Image" />
                <ItemTxtCon>
                 
                  <DetailCon>
                    <H2>{p.title}</H2>
                    <Price>${p.price}</Price>
                  </DetailCon>
                 
                
              <OtherCon>
                <Button onClick={() => addProduct(_id)} cate>
                 <CartIcon/> Add to cart
                </Button>
                <RightBtn href="#">
                  <FcLikePlaceholder />
                </RightBtn>
              </OtherCon>
              </ItemTxtCon>
              
              </A>
            </Item> */}
            
            

            {product.map(p=>(
              <Item>
                <A href={`/product/${p._id}`}>
                  <ItemImg src={p.images} alt="Item Image" />
                </A>
                <ItemTxtCon>
                  <DetailCon>
                    <H2>{p.title}</H2>
                    <Price>${p.price}</Price>
                  </DetailCon>

                  <OtherCon>
                <Button onClick={() => addProduct(_id)} cate>
                 <CartIcon/> Add to cart
                </Button>
                <RightBtn href="#">
                  <FcLikePlaceholder />
                </RightBtn>
              </OtherCon>
                </ItemTxtCon>

            </Item>
            
            ))}


            
          </CartItem>
        </CartCon>
      </Container>
    </div>
  );
}
