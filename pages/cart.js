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

const ColumnsWrapper = styled.div`
  display: flex;
  /* grid-template-columns: 1fr; */
  /* width: 100%; */
  width: auto;
  margin-bottom: 150px;
  gap: 30px;
  align-items: center;

  background: linear-gradient(
    285deg,
    #000 58.94%,
    rgba(0, 0, 0, 0) 113.07%,
    rgba(0, 0, 0, 0.11) 113.07%
  );
  /* background-color: white; */
`;

const Box = styled.div`
  /* background-color: #fff; */
  background-color: transparent;
  border-radius: 10px;
  padding: 30px;
  color: #fff;
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
  border: 1px solid rgba(0, 0, 0, 0.1);
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
  const [inputEmail, setInputEmail] = useState("");

  useEffect(() => {
    if (session?.user?.email) {
      const userEmail = session.user.email;
      setAccount(userEmail);
    }
  }, [session]);
  useEffect(() => {
    if (onCartProducts.length > 0) {
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
      clearCart();
    }
  }, []);
  function moreOfThisProduct(id) {
    addProduct(id);
  }
  function lessOfThisProduct(id) {
    removeProduct(id);
  }
  async function goToPayment() {
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
  }
  let total = 0;
  for (const productId of onCartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }

  let Shipping = 0; // Shipping Fee
  let Tax = 0; // Taxt

  let ft = total + Shipping + total * (Tax / 100);

  if (!session) {
    return (
      <>
        <SessionOut />
      </>
    );
  }

  if (isSuccess) {
    const queryParams = new URLSearchParams(window.location.search);
    const originalEmail = decodeURIComponent(queryParams.get("email"));

    return (
      <>
        <Header allProducts={allProducts} fetchedCategory={fetchedCategory} />
        <Center>
          <ColumnsWrapper>
            <Box>
              <H>Thanks for your order !</H>
              <P>We will email you when your order is sent.</P>
              <Exit
                email={account}
                amount={ft}
                products={products.map((product) => ({
                  images: product.images,
                  name: product.title,
                  price: product.price,
                  quantity: onCartProducts.filter((id) => id === product._id)
                    .length,
                }))}
                tax={Tax}
                ship={Shipping}
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
            <h2>Cart</h2>
            {!onCartProducts?.length && <div>Your cart is empty</div>}
            {products?.length > 0 && (
              <Table>
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
                      <ProductInfoCell>
                        <ProductImageBox>
                          <img src={product.images[0]} alt="" />
                        </ProductImageBox>
                        <div style={{ marginTop: "10px" }}>{product.title}</div>
                      </ProductInfoCell>
                      <td>
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
                      <td>
                        ${" "}
                        {onCartProducts.filter((id) => id === product._id)
                          .length * product.price}
                      </td>
                    </tr>
                  ))}

                  <tr style={{ height: "30px" }}>
                    <td></td>
                    <td style={{ textAlign: "end", paddingRight: "15px" }}>
                      Subtotal
                    </td>
                    <td>$ {total}</td>
                  </tr>

                  <tr style={{ height: "30px" }}>
                    <td style={{ borderTop: "none" }}></td>
                    <td
                      style={{
                        textAlign: "end",
                        paddingRight: "15px",
                        borderTop: "none",
                      }}
                    >
                      Shipping Fee
                    </td>
                    <td style={{ borderTop: "none" }}>
                      $ {Shipping.toFixed(2)}
                    </td>
                  </tr>

                  <tr style={{ height: "30px" }}>
                    <td></td>
                    <td style={{ textAlign: "end", paddingRight: "15px" }}>
                      Total
                    </td>
                    <td>$ {ft}</td>
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
              />
              <Input
                type="text"
                placeholder="Email"
                value={email}
                name="email"
                onChange={(ev) => setEmail(ev.target.value)}
              />
              <CityHolder>
                <Input
                  type="text"
                  placeholder="City"
                  value={city}
                  name="city"
                  onChange={(ev) => setCity(ev.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Postal Code"
                  value={postalCode}
                  name="postalCode"
                  onChange={(ev) => setPostalCode(ev.target.value)}
                />
              </CityHolder>
              <Input
                type="text"
                placeholder="Street Address"
                value={streetAddress}
                name="streetAddress"
                onChange={(ev) => setStreetAddress(ev.target.value)}
              />
              <Input
                type="text"
                placeholder="Country"
                value={country}
                name="country"
                onChange={(ev) => setCountry(ev.target.value)}
              />
              <Button black block onClick={goToPayment}>
                Continue to payment
              </Button>
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
