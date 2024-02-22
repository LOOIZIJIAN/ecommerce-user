import styled from "styled-components";
import React, { useEffect, useState } from "react";
import RangeSlider from "@/components/Rangeslider";
import { FcFilledFilter } from "react-icons/fc";
import { HiArchive } from "react-icons/hi";
import { GiPriceTag } from "react-icons/gi";

const LeftCon = styled.form`
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
  font-weight: 600;
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
  gap: 120px;
`;

const H2 = styled.h2`
  color: #000;
  font-family: "Open Sans", sans-serif;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 600;
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

  export default function CategoryLeft({ filterCate , cate }) {

    // console.log("FC:"+filterCate);
    const [checkedOption, setCheckedOption] = useState('');

    const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });

    const handlePriceChange = (newPriceRange) => {
      setPriceRange(newPriceRange);
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      let isValid = true;

      if(!checkedOption){
        alert("Please select a brand to continue !!");
        isValid = false;
      }

      if(isValid){
        window.location.href = '/category/'+ checkedOption + '?min=' + priceRange.min + '&max=' + priceRange.max ;
      }
    };


    return (
      <LeftCon onSubmit={handleSubmit} method="post">
        <LeftUpCon>
          <FcFilledFilter style={{ fontSize: "3em" }}/>
          <H1>Filter</H1>
        </LeftUpCon>

        <BrandCon>
          <BrandTopCon>
            {/* <H2>Brand</H2> */}
            <H2>{cate.name === "Phone accessory" ? "Categories" : "Brand"}</H2>
            <HiArchive style={{ fontSize: "2em" }} />
          </BrandTopCon>

          <OptionCon>
            {filterCate && filterCate.map(fc => (
              <Label key={fc._id}>
                <Input
                  type="radio"
                  checked={checkedOption === fc._id} 
                  onChange={() => setCheckedOption(fc._id)}
                  name="radio"
                />
                <Span checked={checkedOption === fc._id}>{fc.name}</Span>
              </Label>
            ))}                  
          </OptionCon>
        </BrandCon>

        <PriceCon>
          <PriceTopCon>
            <H2>Price</H2>
            <GiPriceTag style={{ fontSize: "2em" }}/>
          </PriceTopCon>

          <RangeSlider onPriceChange={handlePriceChange} />
        </PriceCon>

        <Btm>
          <A>
            <Button type="submit">Update</Button>
          </A>
        </Btm>
      </LeftCon>
    );
}
