import styled from "styled-components";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import Link from "next/link";
import {useContext} from "react";
import {CartContext} from "@/components/CartContext";

const ProductWrapper = styled.div`
  
`;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 140px;
  width: 180px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img{
    max-width: 100%;
    max-height: 90px;
  }
  
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size:.9rem;
  color:#000;
  text-decoration:none;
  margin:0;
  
`;

const ProductInfoBox = styled.div`
  margin-top: 10px;
  float: left;
`;

const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  justify-content:space-between;
  margin-top:2px;
  padding-top: 3px;
  gap: 15px;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight:200;
  text-align: right;
  color: #000;
  margin-right: 15px;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight:600;
    text-align: left;
  }
`;

export default function ProductBox({_id,title,description,price,images}) {
  const {addProduct} = useContext(CartContext);
  const url = '/product/'+_id;
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <img src={images?.[0]} alt=""/>
        <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>
            ${price}
          </Price>
          <Button onClick={() => addProduct(_id)} cate>
            Add to cart
          </Button>
        </PriceRow>
      </ProductInfoBox>
      </WhiteBox>
      
    </ProductWrapper>
  );
}