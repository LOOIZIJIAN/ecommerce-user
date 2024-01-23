import styled from "styled-components";
import CategoryLeft from "@/components/CategoryLeft";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Button from "./Button";
import { CartContext } from "./CartContext";
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';
import CartIcon from "./icons/CartIcon";
import { AiOutlineFileSearch } from "react-icons/ai";


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
`;

const ItemImg = styled.img`
  width: 210px;
  height: 200px;
`;

const ItemTxtCon = styled.div`
  display: flex;
  width: 100%;
  height: 110px;
  flex-direction: column;
  justify-content: center;
`;

const DetailCon = styled.div`
  margin-top: -38px;
`;

const OtherCon = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 100%;
  height: 100%;
  margin-top: -38px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
  height: 320px;
  margin-right: 25px;

  border-radius: 5px;
  border: 0.5px solid #ced4da;
  background: #dee2e6;
  box-shadow: -5px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Btn = styled.a`
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
  cursor: pointer;
`;

const LeftBtn = styled(Btn)``;

const Img = styled.img`
  margin-right: 8px;
`;

const RightBtn = styled(Btn)`
  width: 35%;
  border-bottom-right-radius: 10px;
  margin-left: 0px;
`;

const RBtnIcon = styled.img`
  width: 25px;
  height: 25px;
`;

const H2 = styled.h2`
  color: #000;
  text-align: center;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
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
  font-size: 16px;
  font-weight:200;
  text-align: center;
  color: #000;
  margin-right: 15px;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight:600;
    text-align: center;
  }
`;

const Error = styled.div`
  width: 98%; 
  text-align: center;
  justify-content: center;
  color: gray;
  font-size: 26px;
`;

//  Pink Like Icon
const PinkLike = styled(FcLikePlaceholder)`
  width: 28px;
  height: 28px;
  display: block;
`;

//  Red Like Icon
const RedLike = styled(FcLike)`
  width: 28px;
  height: 28px;
  display: none;
`;

export default function Categories({product, cate}) {
  // console.log("product:"+product);
  // console.log("cate name:"+cate);

  const {addProduct} = useContext(CartContext);
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [LikeValue, setLikeValue] = useState(null);

  const changeIcon = (id) => {
    const pink = document.getElementById(`pinkLike_${id}`);
    const red = document.getElementById(`redLike_${id}`);

    if (pink.style.display === 'block') {
      pink.style.display = 'none';
      red.style.display = 'block';
      setLikeValue(1);
    } else {
      red.style.display = 'none';
      pink.style.display = 'block';
      setLikeValue(0);
    }
  };

  const showIcon = (id, value) => {
    // Check if the window object is defined (to prevent server-side rendering issues)
    if (typeof window !== 'undefined') {
      const pink = document.getElementById(`pinkLike_${id}`);
      const red = document.getElementById(`redLike_${id}`);

      // Check if the elements exist and the LikeValue state is null
      if (pink && red && LikeValue == null) {
        if (value === 0 || value == null) {
          red.style.display = 'none';
          pink.style.display = 'block';
        } else if (value === 1) {
          pink.style.display = 'none';
          red.style.display = 'block';
        }
      }
    }
  };

  useEffect(() => {
    setIsErrorVisible(product.length === 0);
  }, [product]);

  return (
    <div>
      <Container>
        <CartCon>
          <CartTop>
            {/* {cate && cate[0] && <H1>{cate[0].name}</H1>} */}
            <H1>{cate.name}</H1>  
          </CartTop>

        
          <CartItem>
           
            {product.map(p=>(
              <Item>
              <A href={`/product/${p._id}`}>
                <ItemImg src={p.images} alt="Item Image" />
                <ItemTxtCon>
                 
                  <DetailCon>
                    <H2>{p.title}</H2>
                    <Price>${p.price}</Price>
                  </DetailCon>
                 
                </ItemTxtCon>
              </A>

              <OtherCon>
                <Button onClick={() => addProduct(p._id)} cate 
                style={{gap: '5px', width: '70%', marginLeft: '10px'}}
                > {/* added p. */}  

                 <CartIcon/> Add to cart
                </Button>

                <span style={{width: '10px'}}></span>
                
                {/* onChange value 0 can change to take value from database to decide it color of the like icon */}
                <RightBtn type="button" onClick={() => changeIcon(p._id)} onChange={showIcon(p._id , 1)}>
                  <PinkLike id={`pinkLike_${p._id}`} />
                  <RedLike id={`redLike_${p._id}`} />
                </RightBtn>

              </OtherCon>
            </Item>
            ))}
          </CartItem>


          {isErrorVisible &&
            <div>
              <AiOutlineFileSearch style={{ width: '100%', height: '200px', textAlign: 'center', fill: 'gray', marginTop: '100px', marginBottom: '20px' }} />
              <Error>Uh oh! We couldn't find any {cate.name} products listings.</Error>
            </div>
          }

        </CartCon>
      </Container>
    </div>
  );
}
