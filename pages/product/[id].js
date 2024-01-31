import Center from "@/components/Center";
import Header from "@/components/Header";
import Title from "@/components/Title";
import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";
import styled from "styled-components";
import WhiteBox from "@/components/WhiteBox";
import ProductImages from "@/components/ProductImages";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import {useContext, useState} from "react";
import {CartContext} from "@/components/CartContext";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import ItemDetail from "@/components/ItemDetail";

const ColWrapper = styled.div`
  margin-top: 90px;
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: .8fr 1.2fr;
  }
  gap: 60px;

  border: 0.5px solid lightgray;
  border-radius: 12px;
  height: 380px;
`;
const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Price = styled.span`
  font-size: 1.4rem;
`;
const Bottom =styled.div`
    height: 30%;
    display: flex;
    flex-direction: row;
    align-items: end;
    gap: 5px;
`;
const H4 = styled.h4`
    color: #FC0D0D;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0 0 5px 0;
`;
const ProtecImg = styled.img`
    width: 25px;
    height: 25px;
`;
export default function ProductPage({product}) {
  const {addProduct} = useContext(CartContext);
  const {data:session} = useSession();

  const router = useRouter();

  function ShowMss () {
    const answer = confirm('Pls Login to add product to cart !');

    if(answer) {
      router.push("/");
    } else {
      const answer2 = confirm('Login to continue');

      if(answer2) {
        router.push("/");
      } else {
        ShowMss();
      }
    }
  }

  if(!session) {
    return (
      <>
        <Header session={false}/>
        <Center>
          <ColWrapper>
            <WhiteBox>
              <ProductImages images={product.images} />

              <Bottom>
                <ProtecImg src="/Protect_Icon.png" alt="Icon"/>
                <H4>100% Authentic Guarantee</H4>
              </Bottom>

            </WhiteBox>

            <div style={{width: '450px' , height: '362px' , display: 'flex' , flexDirection: 'column'}}>
              <Title>{product.title}</Title>

              <p>{product.description}</p>

              <PriceRow>
                <Price>$ {product.price}</Price>
              </PriceRow>

              <ItemDetail />

              <div style={{textAlign: 'center' , width: '400px'}}>
                <Button cate onClick={() => ShowMss()} style={{width: '100%'}}>
                  <CartIcon />Add Cart
                </Button>
              </div>

            </div>
          </ColWrapper>
        </Center>
      </>
    );
  }
  return (
    <>
      <Header session={true}/>
      <Center>
        <ColWrapper>
          <WhiteBox>
            <ProductImages images={product.images} />

            <Bottom>
              <ProtecImg src="/Protect_Icon.png" alt="Icon"/>
              <H4>100% Authentic Guarantee</H4>
            </Bottom>

          </WhiteBox>

          <div style={{width: '450px' , height: '362px' , display: 'flex' , flexDirection: 'column'}}>
            <Title>{product.title}</Title>

            <p>{product.description}</p>

            <PriceRow>
              <Price>$ {product.price}</Price>
            </PriceRow>

            <ItemDetail />

            <div style={{textAlign: 'center' , width: '400px'}}>
              <Button cate onClick={() => addProduct(product._id)} style={{width: '100%'}}>
                <CartIcon />Add Cart
              </Button>
            </div>

          </div>
        </ColWrapper>
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const {id} = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    }
  }
}