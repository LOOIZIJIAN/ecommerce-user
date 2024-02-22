import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import Button from "./Button";
import { CartContext } from "./CartContext";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import CartIcon from "./icons/CartIcon";
import { AiOutlineFileSearch } from "react-icons/ai";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

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
  margin: 25px 10px 25px 10px;
  /* box-sizing: border-box; */
  flex-wrap: wrap;
`;

const A = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: default;
  height: fit-content;
`;

const ItemImg = styled.img`
  width: 210px;
  height: 200px;
`;

const ItemTxtCon = styled.div`
  display: flex;
  width: 100%;
  /* height: 110px; */
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const DetailCon = styled.div``;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 210px;
  /* height: 320px; */
  height: 400px;
  margin-right: 25px;
  margin-bottom: 30px;
  border-radius: 5px;
  border: 0.5px solid #ced4da;
  position: relative;
  overflow: hidden;

  box-shadow: -5px 4px 4px 0px rgba(0, 0, 0, 0.25);

  img {
    object-fit: cover;
    transition: transform 0.8s ease; /* Add transition for transform */
    transform: scale(1);
  }

  &:hover {
    &::before {
      content: "";
      position: absolute;
      // inset :0; //2 select choose 1
      top: 0; //2 select choose 1
      left: 0;
      right: 0;
      bottom: 41%;

      z-index: 1;
      transition: background 0.5s ease;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    }
    img {
      transition: transform 0.8s ease; /* Add transition for transform */
      transform: translateY(20px) scale(1.15);
    }
  }
`;

const OtherCon = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: fit-content;
  border-radius: 10px;
  // border : 1px solid;
  margin-bottom: 6px;
  z-index: 1;
  transition: transform 0.8s ease;

  ${Item}:hover & {
    transform: translateY(-40%);
  }
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
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: transform 0.8s ease; /* Add transition for transform and border-radius */
  transform: scale(1);

  &:hover {
    transition: transform 0.5s ease, border-radius 0.5s ease; /* Add transition for transform and border-radius */
    transform: scale(1.4, 1.25); /* Enlarge the button */
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
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 17px;
  // font-weight: 400;
  margin-top: 0;
  padding: 0;
  cursor: pointer;
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
  font-weight: 200;
  // text-align: right;
  display: flex;
  justify-content: center;
  color: #000;
  // margin-right: 15px;
  z-index: 2;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: left;
  }
  ${Item}:hover & {
    position: relative;
    transform: translateY(-300%);
    font-size: 2rem;
    transition: transform 0.8s ease, font-size 0.8s ease;
    color: #f8f9fa;
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

export default function Categories({ product, cate }) {
  const { addProduct } = useContext(CartContext);
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [LikeValue, setLikeValue] = useState(null);
  const { data: session } = useSession();

  const router = useRouter();

  function ShowMss() {
    const answer = confirm("Pls Login to add product to cart !");

    if (answer) {
      router.push("/");
    } else {
      const answer2 = confirm("Login to continue");

      if (answer2) {
        router.push("/");
      } else {
        ShowMss();
      }
    }
  }

  function CheckSess(id) {
    if (session) {
      addProduct(id);
    } else {
      ShowMss();
    }
  }

  const changeIcon = (id) => {
    const pink = document.getElementById(`pinkLike_${id}`);
    const red = document.getElementById(`redLike_${id}`);

    if (pink.style.display === "block") {
      pink.style.display = "none";
      red.style.display = "block";
      setLikeValue(1);
    } else {
      red.style.display = "none";
      pink.style.display = "block";
      setLikeValue(0);
    }
  };

  const showIcon = (id, value) => {
    // Check if the window object is defined (to prevent server-side rendering issues)
    if (typeof window !== "undefined") {
      const pink = document.getElementById(`pinkLike_${id}`);
      const red = document.getElementById(`redLike_${id}`);

      // Check if the elements exist and the LikeValue state is null
      if (pink && red && LikeValue == null) {
        if (value === 0 || value == null) {
          red.style.display = "none";
          pink.style.display = "block";
        } else if (value === 1) {
          pink.style.display = "none";
          red.style.display = "block";
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
            <H1>{cate.name}</H1>
          </CartTop>

          <CartItem>
            {product.map((p) => (
              <Item key={p._id}>
                <A href={`/product/${p._id}`}>
                  <ItemImg
                    src={p.images[0]}
                    alt="Item Image"
                    onClick={() => router.push(`/product/${p._id}`)}
                  />
                </A>
                <ItemTxtCon>
                  <DetailCon onClick={() => router.push(`/product/${p._id}`)}>
                    <H2>{p.title}</H2>
                    <Price>${p.price}</Price>
                  </DetailCon>

                  <OtherCon>
                    <Button
                      onClick={() => CheckSess(p._id)}
                      cate
                      style={{ width: "100%", height: "100%" }}
                    >
                      <CartIcon /> Add to cart
                    </Button>

                    <span
                      style={{ width: "10px" }}
                      onClick={() => router.push(`/product/${p._id}`)}
                    ></span>
                    {/* onChange value 0 can change to take value from database to decide it color of the like icon */}
                    <RightBtn
                      type="button"
                      onClick={() => changeIcon(p._id)}
                      onChange={showIcon(p._id, 0)}
                    >
                      <PinkLike id={`pinkLike_${p._id}`} />
                      <RedLike id={`redLike_${p._id}`} />
                    </RightBtn>
                  </OtherCon>
                </ItemTxtCon>
              </Item>
            ))}
          </CartItem>

          {isErrorVisible && (
            <div>
              <AiOutlineFileSearch
                style={{
                  width: "100%",
                  height: "200px",
                  textAlign: "center",
                  fill: "gray",
                  marginTop: "100px",
                  marginBottom: "20px",
                }}
              />
              <Error>
                Uh oh! We couldn&apos;t find any {cate.name} products listings.
              </Error>
            </div>
          )}
        </CartCon>
      </Container>
    </div>
  );
}
