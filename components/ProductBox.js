import styled from "styled-components";
import Button from "@/components/Button";
import Link from "next/link";

const ProductWrapper = styled.div`
  width: 230px;
  height: 400px;
`;

const Img = styled.img`
  width: 210px;
  height: 200px;
  object-fit: cover;
  transition: transform 0.8s ease; /* Add transition for transform */
  transform: scale(1);
  margin: 0;
`;

const WhiteBox = styled(Link)`
  background-color: #ffF;
  height: 100%;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  border: 0.5px solid #ced4da;
  box-shadow: -5px 4px 4px 0px rgba(0, 0, 0, 0.25);

  &:hover{
    &::before{
      content: "";
      position: absolute;
      inset :0;
      z-index:1;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    }
    ${Img}{
      transition: transform 0.8s ease; /* Add transition for transform */
      transform: scale(1.15);
    }
    
  }
`;

const Title = styled.span`
  color: gray;
  text-decoration:none;
  /* margin-top: 20px; */
  display:flex;
  justify-content:center;
  align-items:center;
  /* opacity: 0; 初始时设置为透明 */
  /* transition: opacity 0.8s ease;  */
  
  font-weight: bold;
  font-size:1.30rem;
  // font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-family: 'San Francisco', Helvetica, Arial, san-serif;

  ${WhiteBox}:hover & {
    /* margin-top: 20px; */
    /* opacity: 1; */
    color: #000000; /* 在 WhiteBox 悬停时修改 Title 的颜色 */
  }
`;

const ProductInfoBox = styled.div`
  float: left;
  width: 100%;
  height: 80px;
  margin-top: -70px;
`;

const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  margin-top:2px;
  padding-top: 3px;
`;

const Price = styled.div`
  height: 30px;
  width: 100%;
  font-size: 22px;
  font-weight:600;
  text-align: center;
  color: #000;
  @media screen and (min-width: 768px) {
    font-size: 22px;
    font-weight:600;
    text-align: center;
  }
  /* visibility: hidden; */

  // &:hover{
  //     visibility: visible;
  // }

  opacity: 0; // 初始时设置为透明
  transition: opacity 0.8s ease; 

  ${WhiteBox}:hover & {
    opacity: 1;
    color: #000; // 在 WhiteBox 悬停时修改 Title 的颜色
  }
`;

export default function ProductBox({_id,title,description,price,images}) {
  const url = '/product/'+_id;
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <Img src={images?.[0]} alt=""/>
        <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>
            ${price}
          </Price>
        </PriceRow>
      </ProductInfoBox>
      </WhiteBox>
      
    </ProductWrapper>
  );
}