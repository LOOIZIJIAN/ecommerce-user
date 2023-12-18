import styled from "styled-components";
import React from "react";
import RangeSlider from "@/components/Rangeslider";

const LeftCon = styled.div`
  position: fixed;
  width: 240px;
  height: 640px;
  margin: 20px 0px 30px 15px;
  border-radius: 10px;
  background: #343a40;
  box-shadow: -6px 6px 2px 0px rgba(33, 37, 41, 0.25);
  padding: 0 30px;
`;

const LeftUpCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #f8f9fa;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
`;

const Img1 = styled(Img)``;

const H1 = styled.h1`
  color: #fff;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 400;
  width: 300px;
  margin-left: 15px;
`;

// BRAND CONTAINER START
const BrandCon = styled.div`
  border-radius: 10px;
  border: 1px solid #f8f9fa;
  background: rgba(217, 217, 217, 0);
  height: 308px;
  margin-top: 20px;
`;

const BrandTopCon = styled.div`
  border-radius: 10px 10px 0px 0px;
  background: #e9ecef;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
`;

const H2 = styled.h2`
  color: #000;
  font-family: "Open Sans", sans-serif;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 400;
`;

const Img2 = styled(Img)`
  margin-left: 120px;
`;

const OptionCon = styled.div`
  margin: 5px 10px;
  display: grid;
`;

const Label = styled.label`
  padding: 5px 10px;
  cursor: pointer;
`;

const Input = styled.input.attrs({ type: "radio" })`
  display: none;
`;

const Span = styled.span`
  position: relative;
  line-height: 22px;
  font-size: 16px;
  color: #fff;

  &::before {
    border: 1px solid #fff;
    border-radius: 5px;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    display: inline-block;
    vertical-align: top;
    content: "";
  }

  &::after {
    background: ${(props) => (props.checked ? "#fff" : "transparent")};
    width: 15px;
    height: 15px;
    position: absolute;
    top: 2px;
    left: 3px;
    transition: 300ms;
    content: "";
  }
`;
// BRAND CONTAINER END

// PRICE CONTAINER START
const PriceCon = styled(BrandCon)`
  height: 150px;
`;

const PriceTopCon = styled(BrandTopCon)`
  height: 40px;
`;
// PRICE CONTAINER END

// BOTTOM CONTAINER START
const Btm = styled(BrandCon)`
  height: 35px;
`;

const Button = styled.button`
  color: #fff;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  text-align: center;
  background: transparent;
  text-shadow: -1px 4px 6px rgba(173, 181, 189, 0.25);
  font-family: Poppins;
  font-size: 20px;
  font-weight: 400;

  &:hover {
    cursor: pointer;
    color: #000;
    background: darkgray;
  }
`;

const A = styled.a`
  text-decoration: none;
`;

export default function CategoryLeft() {
  const [checkedOption, setCheckedOption] = React.useState("");

  return (
    <LeftCon>
      <LeftUpCon>
        <Img src="Category/Check_List_Icon.png" />
        <H1>Filter</H1>
        <Img1 src="Category/Filter_Icon.png" />
      </LeftUpCon>

      <BrandCon>
        <BrandTopCon>
          <H2>Brand</H2>
          <Img2 src="Category/Brand_Icon.png" alt="Error" />
        </BrandTopCon>

        <OptionCon>
          {/* APPLE Start */}
          <Label>
            <Input
              checked={checkedOption === "Apple"}
              onChange={() => setCheckedOption("Apple")}
              name="radio"
            />
            <Span checked={checkedOption === "Apple"}>APPLE</Span>
          </Label>
          {/* APPLE END */}

          {/* SAMSUNG Start */}
          <Label>
            <Input
              checked={checkedOption === "Samsung"}
              onChange={() => setCheckedOption("Samsung")}
              name="radio"
            />
            <Span checked={checkedOption === "Samsung"}>SAMSUNG</Span>
          </Label>
          {/* SAMSUNG END */}

          {/* XIAOMI Start */}
          <Label>
            <Input
              checked={checkedOption === "XiaoMi"}
              onChange={() => setCheckedOption("XiaoMi")}
              name="radio"
            />
            <Span checked={checkedOption === "XiaoMi"}>XIAOMI</Span>
          </Label>
          {/* XIAOMI END */}

          {/* OPPO Start */}
          <Label>
            <Input
              checked={checkedOption === "Oppo"}
              onChange={() => setCheckedOption("Oppo")}
              name="radio"
            />
            <Span checked={checkedOption === "Oppo"}>OPPO</Span>
          </Label>
          {/* OPPO END */}

          {/* VIVO Start */}
          <Label>
            <Input
              checked={checkedOption === "Vivo"}
              onChange={() => setCheckedOption("Vivo")}
              name="radio"
            />
            <Span checked={checkedOption === "Vivo"}>VIVO</Span>
          </Label>
          {/* VIVO END */}

          {/* ONEPLUS Start */}
          <Label>
            <Input
              checked={checkedOption === "OnePlus"}
              onChange={() => setCheckedOption("OnePlus")}
              name="radio"
            />
            <Span checked={checkedOption === "OnePlus"}>ONEPLUS</Span>
          </Label>
          {/* ONEPLUS END */}

          {/* HONOR Start */}
          <Label>
            <Input
              checked={checkedOption === "Honor"}
              onChange={() => setCheckedOption("Honor")}
              name="radio"
            />
            <Span checked={checkedOption === "Honor"}>HONOR</Span>
          </Label>
          {/* HONOR END */}

          {/* HUAWEI Start */}
          <Label>
            <Input
              checked={checkedOption === "Huawei"}
              onChange={() => setCheckedOption("Huawei")}
              name="radio"
            />
            <Span checked={checkedOption === "Huawei"}>HUAWEI</Span>
          </Label>
          {/* HUAWEI END */}
        </OptionCon>
      </BrandCon>

      <PriceCon>
        <PriceTopCon>
          <H2>Price</H2>
          <Img2 src="Category/Price_Icon.png" alt="Error" />
        </PriceTopCon>

        <RangeSlider />
      </PriceCon>

      <Btm>
        <A href="#">
          <Button>Update</Button>
        </A>
      </Btm>
    </LeftCon>
  );
}
