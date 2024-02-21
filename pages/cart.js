import Header from "@/components/Header";
import styled from "styled-components";
import Center from "@/components/Center";
import Button from "@/components/Button";
import { useCallback, useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/CartContext";
import axios from "axios";
import Table from "@/components/Table";
import Input from "@/components/Input";
import { useSession } from "next-auth/react";
import Exit from "@/components/Exit";
import SessionOut from "@/components/SessionOut";
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import Footer from "@/components/Footer";
import { FcCheckmark } from "react-icons/fc";
import { TbShoppingCartQuestion } from "react-icons/tb";
import toast from "react-hot-toast";

const ColumnsWrapper = styled.div`
  display: flex;
  /* grid-template-columns: 1fr; */
  width: 100%;
  min-height: 93.1vh;
  height: max-content;
  /* width: auto; */
  margin-top: 50px;
  /* margin-bottom: 150px; */
  padding-top: 10px;
  gap: 80px;
  /* align-items: center; */
  justify-content: center;
  background: linear-gradient(
    285deg,
    #000 58.94%,
    rgba(0, 0, 0, 0) 113.07%,
    rgba(0, 0, 0, 0.11) 113.07%
  );
  background-color: #fff;
`;

const Box = styled.div`
  /* background-color: red; */
  /* background-color: transparent; */
  border-radius: 10px;
  padding: 30px;
  color: #fff;
  align-items: center;
  justify-content: center;
  /* margin: 0 auto 0 auto; */
`;
const H = styled.h1`
  font-weight: 800;
  font-size: 34px;
`;
const P = styled.p`
  font-size: 21px;
`;
const ProductInfoCell = styled.td`
  padding: 10px 0;
`;

const ProductImageBox = styled.div`
  width: 70px;
  height: 100px;
  padding: 2px;
  border: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 60px;
    max-height: 60px;
  }
  @media screen and (min-width: 768px) {
    padding: 10px;
    width: 100px;
    height: 100px;
    img {
      max-width: 80px;
      max-height: 80px;
    }
  }
`;

const QuantityLabel = styled.span`
  padding: 0 15px;
  display: block;
  @media screen and (min-width: 768px) {
    display: inline-block;
    padding: 0 10px;
  }
`;

const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`;

const TickIcon = styled(FcCheckmark)`
  width: 30%;
  height: 18%;
  border-radius: 100%;
  border: 5px solid green;
  filter: brightness(90%);
  margin-top: 30px;
`;

const CartIcon = styled(TbShoppingCartQuestion)`
  width: 30%;
  height: auto;
`;

const EmptyCon = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 500px;
  height: auto;
  margin-top: 80px;
`;
export default function CartPage({ allProducts, fetchedCategory }) {
  const { onCartProducts, addProduct, removeProduct, clearCart } =
    useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [country, setCountry] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const { data: session } = useSession();
  
  // Validation
  const [codeValid , setCodeValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false); // Added state for email validation

  useEffect(() => {
    if (session?.user?.email) {
      const userEmail = session.user.email;
      setAccount(userEmail);
    }
  }, [session]);

  useEffect(() => {
    if (onCartProducts && onCartProducts.length > 0) {
      axios.post("/api/cart", { ids: onCartProducts }).then((response) => {
        setProducts(response.data);
      });
    } else {
      setProducts([]);
    }
  }, [onCartProducts]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (window?.location.href.includes("success")) {
      setIsSuccess(true);
    }
  }, []);


  function moreOfThisProduct(id) {
    addProduct(id);
  }
  function lessOfThisProduct(id) {
    removeProduct(id);
  }

  function Validation(){
    toast.dismiss();  //  clear the toast

    if(!codeValid) {
      toast.error("Pls change postal code to digit format");
    }

    if(!isEmailValid) {
      toast.error("Pls check email format");
    }
    
    if(codeValid && isEmailValid) {
      goToPayment();
    }
  }

  async function goToPayment() {
    try {
      const response = await axios.post("/api/checkout", {
        account,
        name,
        email,
        city,
        postalCode,
        streetAddress,
        country,
        onCartProducts,
      });
      if (response.data.url) {
        window.location = response.data.url;
      }
    } catch (error) {
      toast.error("Network traffic is heavy now");
      return;
    }
  }
  let total = 0;
  
  for (const productId of onCartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }

  const postalCodeRegex = /^\d+$/;

  function validatePostalCode(inputvalue) {
    toast.dismiss();  //  clear the toast

    // Input Empty
    if (inputvalue.trim() === "") {
      return;
    }
    // Input not digit
    if (!postalCodeRegex.test(inputvalue)) {
      toast.error('Only Digits Allowed');
      return;
    }
    setCodeValid(true);
    toast.dismiss();  //  clear the toast
  }

  function validateEmail(inputEmail) {
    toast.dismiss();  // clear the toast

    // Input Empty
    if (inputEmail.trim() === "") {
      toast.error('Email is required');
      return;
    }

    // Simple email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputEmail)) {
      toast.error('Invalid email format');
      return;
    }

    setIsEmailValid(true);
    toast.dismiss();  // clear the toast
  }

  if (!session) {
    return (
      <><SessionOut /></>
    );
  }

  if (isSuccess) {
    const queryParams = new URLSearchParams(window.location.search);
    const originalEmail = decodeURIComponent(queryParams.get("email"));
    // clearCart(); // use in Exit.js after send email
    return (
      <>
        <Center>
          <ColumnsWrapper style={{marginTop: '0' , minHeight: '98.8vh'}}>
            <Box style={{marginTop: '40px'}}>
              <center>
                <TickIcon />
              </center>
              <H>Thanks for your order !</H>
              <P>We will email you when your order is sent.</P>
              <Exit
                email={account}
                amount={total}
                products={products.map((product) => ({
                  images: product.images,
                  name: product.title,
                  price: product.price,
                  quantity: onCartProducts.filter((id) => id === product._id)
                    .length,
                }))}
                to={originalEmail}
              />
            </Box>
          </ColumnsWrapper>
        </Center>
      </>
    );
  }
  return (
    <>
      <Header allProducts={allProducts} fetchedCategory={fetchedCategory} />
      <Center>
        <ColumnsWrapper>
          <Box>
            {onCartProducts?.length > 0 && <h2>Cart</h2>}

            {/* Cart Empty */}
            {!onCartProducts?.length && (
              <EmptyCon>
                <CartIcon />
                <h3 style={{ fontSize: "24px" }}>Your cart is empty</h3>
                <h4
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "lightgray",
                  }}
                >
                  Look like you have not added anything to your cart. Go ahead &
                  explore top categories.
                </h4>
              </EmptyCon>
            )}

            {/* Cart */}
            {products?.length > 0 && (
              <Table style={{ width: "550px" }}>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id}>
                      <ProductInfoCell style={{ borderTopColor: "gray" }}>
                        <ProductImageBox>
                          <img src={product.images[0]} alt="" />
                        </ProductImageBox>
                        <div style={{ marginTop: "10px" }}>{product.title}</div>
                      </ProductInfoCell>
                      <td style={{ borderTopColor: "gray" }}>
                        <Button onClick={() => lessOfThisProduct(product._id)}>
                          -
                        </Button>
                        <QuantityLabel>
                          {
                            onCartProducts.filter((id) => id === product._id)
                              .length
                          }
                        </QuantityLabel>
                        <Button onClick={() => moreOfThisProduct(product._id)}>
                          +
                        </Button>
                      </td>
                      <td style={{ borderTopColor: "gray" }}>
                        ${" "}
                        {onCartProducts.filter((id) => id === product._id)
                          .length * product.price}
                      </td>
                    </tr>
                  ))}

                  <tr style={{ height: "30px" }}>
                    <td style={{ borderTopColor: "gray" }}></td>
                    <td
                      style={{
                        textAlign: "end",
                        paddingRight: "15px",
                        borderTopColor: "gray",
                      }}
                    >
                      Total
                    </td>
                    <td style={{ borderTopColor: "gray" }}>$ {total}</td>
                  </tr>
                </tbody>
              </Table>
            )}
          </Box>
          {!!onCartProducts?.length && (
            <Box>
              <h2>Order information</h2>
              <Input
                type="text"
                placeholder="Name"
                value={name}
                name="name"
                onChange={(ev) => setName(ev.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                name="email"
                onChange={(ev) => {
                  setEmail(ev.target.value);
                  const inputValue = ev.target.value;
                  validateEmail(inputValue);
                }}
                required
              />
              <CityHolder>
                <Input
                  type="text"
                  placeholder="City"
                  value={city}
                  name="city"
                  onChange={(ev) => setCity(ev.target.value)}
                  required
                />
                <Input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="Postal Code"
                  value={postalCode}
                  name="postalCode"
                  onChange={(ev) => {
                    setPostalCode(ev.target.value);
                    const inputValue = ev.target.value;
                    validatePostalCode(inputValue);
                  }}
                  required
                />
              </CityHolder>
              <Input
                type="text"
                placeholder="Street Address"
                value={streetAddress}
                name="streetAddress"
                onChange={(ev) => setStreetAddress(ev.target.value)}
                required
              />
              <Input
                type="text"
                placeholder="Country"
                value={country}
                name="country"
                onChange={(ev) => setCountry(ev.target.value)}
                required
              />
              <div style={{ textAlign: "center", width: "400px" }}>
                <Button cate2  style={{ width: "100%" }} onClick={Validation}>
                  Continue to payment
                </Button>
              </div>
            </Box>
          )}
        </ColumnsWrapper>
      </Center>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const fetchedCategory = await Category.find();
  const allProducts = await Product.find();
  return {
    props: {
      fetchedCategory: JSON.parse(JSON.stringify(fetchedCategory)),
      allProducts: JSON.parse(JSON.stringify(allProducts)),
    },
  };
}
