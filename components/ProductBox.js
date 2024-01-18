import styled from "styled-components";
import Button from "@/components/Button";
import Link from "next/link";

const ProductWrapper = styled.div`
  
`;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 235px;
  width: 190px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;

  img{
    max-width: 100%;
    // max-height: 100%;
    max-height: fit-content;
  }
  position: relative;

  &:hover{
    &::before{
      content: "";
      position: absolute;
      inset :0;
      z-index:0;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    }
  }
`;

const Title = styled(Link)`
  color:#000;
  text-decoration:none;
  margin:0;
  display:flex;
  justify-content:center;
  align-items:center;
  opacity: 0; /* 初始时设置为透明 */
  transition: opacity 0.8s ease; /* 添加过渡效果，时长为0.5秒，使用 ease 函数 */
  // visibility:hidden;
  font-weight: bold;
  font-size:1.45rem;
  // font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-family: 'San Francisco', Helvetica, Arial, san-serif;
  ${WhiteBox}:hover & {
    // visibility: visible;
    opacity: 1;
    color: #000000; /* 在 WhiteBox 悬停时修改 Title 的颜色 */
  }
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
  margin-top:2px;
  padding-top: 3px;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight:200;
  text-align: center;
  color: #000;
  margin-right: 15px;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight:600;
    text-align: left;
  }
  visibility: hidden;

  // &:hover{
  //     visibility: visible;
  // }
`;

export default function ProductBox({_id,title,description,price,images}) {
  const url = '/product/'+_id;
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <img src={images?.[0]} alt=""/>
        <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          {/* <Price>
            ${price}
          </Price> */}
        </PriceRow>
      </ProductInfoBox>
      </WhiteBox>
      
    </ProductWrapper>
  );
}