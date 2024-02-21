import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { IoLogOutOutline } from "react-icons/io5";
import { signOut, useSession } from "next-auth/react";
import { FaRegUser } from "react-icons/fa";

const GiShoppingCart = dynamic(
  () => import("react-icons/gi").then((module) => module.GiShoppingCart),
  {
    loading: () => <span>Loading...</span>,
  }
);

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 1rem;
  margin-top: 0.5rem;

  width: 98.5%;

  top: -8px;
  left: -8px;
  z-index: 5;
  background: linear-gradient(
    285deg,
    #000 58.94%,
    rgba(0, 0, 0, 0) 113.07%,
    rgba(0, 0, 0, 0.11) 113.07%
  );
  background-color: white;

  @media (min-width: 640px) {
    height: 40px;
  }

  @media (min-width: 768px) {
    justify-content: center;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex: 1 1 0%;
  padding-left: 20px;

  @media (min-width: 768px) {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 10px;
  }
`;

const LogoSubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-left: 80%;

  @media (min-width: 768px) {
    width: auto;
  }
`;

const LogoImg = styled.img`
  width: 120px;
  height: 40px;
`;

const NavBtn = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Btn = styled.button`
  border: none;
  background: none;
  padding: 8px;
  border-radius: 4px;
  color: #ccc;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    color: #555;
    background-color: #f0f0f0;
  }

  &:focus {
    color: #555;
    background-color: #f0f0f0;
    outline: none;
  }
`;

const Svg = styled.svg`
  height: 1.5rem;
  width: 1.5rem;
`;

const List = styled.div`
  display: ${(props) => (props.showMenu ? "flex" : "none")};
  margin-right: 0.5rem;

  @media (min-width: 768px) {
    display: flex;

    > * + * {
      margin-left: 2.5rem;
    }
  }
`;

const A = styled.a`
  font-size: 22px;
  color: lightgray;
  transition: color 0.15s ease-in-out;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  padding-top: 8px;
  /* font-family: Poppins; */
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SvgArw = styled.svg`
  height: 30px;
  padding-left: 4px;
  padding-top: 4px;
`;

const Path = styled.path`
  fill: white;
`;

const Button = styled.button`
  width: 150px;
  height: 66px;
  border-radius: 6px;
  border-width: 0px;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(217, 217, 217, 0);

  &:hover {
    background: #dad2d2;
    outline: none;

    A {
      color: #262525;
      text-align: center;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    Path {
      fill: black;
    }
  }
`;

const DropDisplay = styled.div`
  display: none;
  /* width: 92.5%; */
  /* width: 8.23%; */
  width: 9.1%;
  min-height: 100px;
  height: auto;
  z-index: 2;
  /* margin-top: 150px; */
  /* margin-top: 185px; */
  /* margin-left: -132.5px; */
  margin-left: -11px;
  position: fixed;
  /* top: 66px; */
  top: 65px;
`;

const SharedBtn = styled.div`
  position: relative;
  width: 150px;
  height: 77px;
  border-radius: 6px;
  border-width: 0px;
  padding: 0;
  margin: 0;
  margin-top: -8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(217, 217, 217, 0);

  &:hover {
    background: #dad2d2;
    outline: none;
    border-radius: 6px 6px 0 0;

    A {
      color: #262525;
      text-align: center;
      font-family: Poppins;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    Path {
      fill: black;
    }

    ${DropDisplay} {
      display: block;
    }
  }
`;

const DropBar = styled.div`
  display: flex;
  flex-direction: column;
`;

const DropA = styled.a`
  font-family: Poppins;
  font-size: 18px !important;
  font-weight: 500 !important;
  text-decoration: none;
  color: black;
`;

const DropBtn = styled.button`
  text-align: left;
  border: none;
  padding: 8px 10px;
  width: 108%;
  cursor: pointer;

  &:hover {
    background-color: gray;

    ${DropA} {
      color: white;
      font-weight: 500;
    }
  }
`;

const RightCol = styled.div`
  height: 65px;
  @media (min-width: 768px) {
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 67.5%;
    padding-right: 10px;
  }
`;

const Search = styled.div`
  // position: fixed;
  // display: flex;
  // flex-direction: column;
  // right: 14.2%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #2f3640;
  position: relative;
`;

const ErrorMss = styled.div`
  position: absolute;
  width: 100%;
  height: 250px;
  top: 50px;
`;

const ResultCon = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  
  scrollbar-width: thin; /* Set the width of the scrollbar */
  scrollbar-color: gray #fff; /* Set the color of the scrollbar thumb and track */
`;

const SearchResultBtn = styled.button`
  text-align: left;
  border: 1px solid #fff;
  border-radius: 6px;
  padding: 8px 10px;
  width: 100%;
  background-color: #a6a9ad;

  &:hover {
    background-color: #2f3640;

    ${DropA} {
      color: white;
      font-weight: 500;
    }
  }
`;

const NotFBtn = styled.button`
  text-align: left;
  border: none;
  padding: 8px 10px;
  width: 100%;
  background-color: #a6a9ad;
  border-radius: 6px;
  border: 1px solid #fff;
`;

const CartIcon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
  filter: brightness(50%);
  margin-left: -5px;
`;

const CartBtn = styled.button`
  height: 100%;
  width: 68px;
  text-align: center;
  border: none;
  background-color: transparent;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;

  cursor: pointer;

  &:hover {
    /* background: #292727; */
    background: lightgray;

    ${CartIcon} {
      filter: brightness(0%);
    }
  }
`;

const CartText = styled.span`
  font-family: Poppins;
  color: lightgray;
  font-size: 20px;
  font-weight: 400;
`;

const Input = styled.input`
  // border-radius: 5px;
  // height: 22px;
  // width: 240px;
  // font-family: Poppins;
  // font-size: 18px;
  // color: orange;
  // padding-left: 10px;
  // background-color: rgba(0,0 , 0, 0.5);
  // backdrop-filter: blur(10px);
  // border:none;
  // border-bottom: 1px ridge orange;

  // outline: none;

  &::placeholder {
    color: orange;
  }
  // &:focus{

  //   &::placeholder{
  //     visibility: hidden;
  //   }
  // }

  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  color: white;
  font-size: 16px;
  transition: 0.4s;
  line-height: 40px;
  width: 240px;
  padding-left: 8px;

  // ${Search}:hover > &{
  //   width:240px;
  // }
`;
const A_search = styled.a`
  width: 35px;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 5px;
  float: right;
  border-radius: 50%;
  // background-color:blue;
`;
const SearchIcon = styled.img`
  cursor: pointer;
  display: flex;
`;
const Span = styled.span`
  display: inline-flex;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;

  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  position: absolute;

  right: 36%;
`;

const DropBar2 = styled.div`
  // New styled component
  display: none;
  flex-direction: column;
  position: absolute;
  left: 73%;
  width: 60%;
  height: 100px;
  background-color: red;
`;

const DropBtn2 = styled.button`
  // New styled component
  text-align: left;
  border: none;
  padding: 8px 10px;
  width: 108%;

  font-family: Poppins;
  font-size: 18px !important;
  font-weight: 500 !important;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: gray;

    color: white;
    font-weight: 500;
  }
`;
const UserIcon = styled(FaRegUser)`
  width: 35px;
  height: 35px;
  color: white;
`;

export default function Header({ allProducts, fetchedCategory }) {
  const [showMenu, setShowMenu] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredP, setFilteredP] = useState([]);
  const [showList, setShowList] = useState(false);
  const [products, setProducts] = useState(allProducts || []);
  const { data: session } = useSession();

  useEffect(() => {
    if (!products) {
      return;
    }

    const filtered = products.filter((product) => {
      const lowerCaseSearchInput = searchInput.toLowerCase();
      const lowerCaseProductTitle = product.title.toLowerCase();

      return lowerCaseProductTitle.includes(lowerCaseSearchInput);
    });

    setFilteredP(filtered);
    setShowList(searchInput.length > 0);
  }, [searchInput, products]);
  // console.log(showList);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnResize = () => {
    if (window.innerWidth >= 768) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", closeMenuOnResize);
    return () => {
      window.removeEventListener("resize", closeMenuOnResize);
    };
  }, []);
  // Resize Navigation End

  // Back To
  const router = useRouter();

  const [categories, setCategories] = useState(fetchedCategory || []);

  const [parents, setParents] = useState([]);
  const [cate, setCate] = useState([]);

  useEffect(() => {
    const uniqueParents = new Set();
    const uniqueCate = new Set();

    categories.forEach((category) => {
      if (category.parent) {
        uniqueCate.add(category);
      } else {
        uniqueParents.add(category);
      }
    });

    setParents(Array.from(uniqueParents));
    setCate(Array.from(uniqueCate));
  }, [categories]);

  return (
    <div>
      <Container>
        <LogoContainer>
          <LogoSubContainer>
            <LogoImg
              src="/Company_Logo_Black_Mode.png"
              onClick={() => router.push("/")}
            />{" "}
          </LogoSubContainer>
        </LogoContainer>

        <List showMenu={showMenu}>
          <Button onClick={() => router.push("/")}>
            <A href="/">Home</A>
          </Button>{" "}
          <SharedBtn>
            <A>Category</A>
            <SvgArw viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <Path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"></Path>
              </g>
            </SvgArw>
            <DropDisplay>
              <DropBar>
                <DropBtn onClick={() => router.push("/products")}>
                  <DropA href="/products">All products</DropA>
                </DropBtn>
                {parents.map((p) => (
                  <DropBtn
                    key={p._id}
                    onClick={() => router.push(`/category/${p._id}`)}
                  >
                    <DropA href={`/category/${p._id}`}>{p.name}</DropA>
                  </DropBtn>
                ))}
              </DropBar>
            </DropDisplay>
            {/* Category Drop Down List End */}
          </SharedBtn>
          {/* Option 4 */}
          <Button onClick={() => router.push("/aboutus")}>
            <A href="/aboutus">About Us</A>
          </Button>{" "}
          <Button onClick={() => router.push("/contactus")}>
            <A href="/contactus">Contact Us</A>
          </Button>{" "}
          {/* Add the page name behide the / */}
        </List>
        {/* Navigation Option End */}

        {/* Screen Width be small then it will function > Start < */}
        <NavBtn>
          <Btn
            type="button"
            id="main-menu"
            aria-label="Main menu"
            aria-haspopup="true"
            onClick={toggleMenu}
          >
            <Svg stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </Svg>
          </Btn>
        </NavBtn>
        {/* Screen Width be small then it will function > End < */}

        <RightCol>
          <Search>
            <Input
              placeholder="Type to search..."
              value={searchInput}
              onChange={(ev) => {
                setSearchInput(ev.target.value);
                setShowList(true);
              }}
            />
            {showList && (
              <ErrorMss>
                <ResultCon>
                  {filteredP.length > 0 ? (
                    filteredP.map((f) => (
                      <SearchResultBtn key={f._id}>
                        <DropA href={`/product/${f._id}`}>{f.title}</DropA>
                      </SearchResultBtn>
                    ))
                  ) : (
                    <NotFBtn>
                      <DropA>Not Found</DropA>
                    </NotFBtn>
                  )}
                </ResultCon>
              </ErrorMss>
            )}
            <A_search>
              <SearchIcon
                src="/Search_Icon.png"
                alt="Search Icon Error"
                title="Search"
              ></SearchIcon>
            </A_search>
          </Search>

          {!session && router.pathname !== "/" ? (
            <div>
              <CartBtn onClick={() => router.push("/")} title="Login">
                <UserIcon />
              </CartBtn>
            </div>
          ) : null}

          {session && (
            <div>
              <CartBtn onClick={() => router.push("/cart")}>
                <GiShoppingCart style={{ fontSize: "3em", color: "white" }} />
              </CartBtn>

              <CartBtn onClick={() => signOut()}>
                <IoLogOutOutline
                  style={{ color: "white", width: "40px", height: "40px" }}
                />
              </CartBtn>
            </div>
          )}
        </RightCol>
      </Container>
    </div>
  );
}
