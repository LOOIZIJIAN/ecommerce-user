import styled from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ProductWrapper = styled.div`
 
`;

const WhiteBox = styled.div`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img{
    max-width: 100%;
    max-height: 150px;
  }
`;

const Title = styled.h2`
  font-weight: normal;
  font-size:.9rem;
  color:inherit;
  text-decoration:none;
  margin:0;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  margin-top:2px;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight:400;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight:600;
    text-align: left;
  }
`;

export default function ProductBox({_id, title, description, price, images}) {
  const {addProduct} = useContext(CartContext);
  const uri = '/product/'+_id;
  return(
     <ProductWrapper>
      <WhiteBox href={uri}>
        <div>
          <img src={images[0]} alt=""/>
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={uri}>{title}</Title>
        <PriceRow>
          <Price>${price}</Price>
          <Button primary outline onClick={() => addProduct(_id)}><CartIcon/>Add to cart</Button>
        </PriceRow>
      </ProductInfoBox>
     </ProductWrapper>
  );
}