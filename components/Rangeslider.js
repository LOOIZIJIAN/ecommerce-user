import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 85%;
  position: relative;
  height: 5px;
  margin: 18px 0 0 18px;
  background-color: #8a8a8a;
`;

// Sharing DOt Component
const Slider = styled.input`
  position: absolute;
  width: 100%;
  height: 10px;
  background: none;
  pointer-events: none;
  top: 100%;
  transform: translateY(-50%);
  appearance: none;

  &::-webkit-slider-thumb{
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: 3px solid #fff;
    background: #fff;
    pointer-events: auto;
    appearance: none;
    cursor: pointer;
    box-shadow: 0 .125rem .5625rem -0.125rem rbga(0,0,0,.25);
  }

  &::-moz-range-progress-thumb{
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: 3px solid #fff;
    background: #fff;
    pointer-events: auto;
    cursor: pointer;
    -moz-appearance: none;
    box-shadow: 0 .125rem .5625rem -0.125rem rbga(0,0,0,.25);
  }
`;

// Left Dot
const MinSlider = styled(Slider)`
  left: 48%;
  transform: translateX(-50%) translateY(-100%);
  z-index: 5;
`;

// Right Dot
const MaxSlider = styled(Slider)`
  right: 48%;
  transform: translateX(50%) translateY(-100%);
`;

const TxtCon = styled.div`
  display: flex;
  height: 0px;
  width: 65%;
  padding-top: 5px;
  margin-bottom: -6px;

  // Dollar CSS
  margin-left: 40px;

  // RM CSS
  /* margin-left: 45px; */
`;

const P = styled.p`
  color: #fff;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
`;

const P1 = styled(P)`
  margin-left: 72%;
`;

const Span = styled.span`
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-weight: 400;

  // Dollar CSS
  font-size: 20px;
  margin: 25px 10px 0 5px;

  // RM CSS
  /* font-size: 16px; */
  /* margin: 25px 5px 0 0; */

`;

const Span1 = styled(Span)`
  text-align: center;
  height: max-content;

  // Dollar CSS
  margin: 0 15px;

  // RM CSS
  /* margin: 0 10px; */

`;

const Span2 = styled(Span)`
  // Dollar CSS
  margin-left: 5px;

  // RM CSS
  /* margin-left: 5px; */

`;

const Input = styled.input`
  margin-top: 45px;
  display: inline-flex;
  width: 50px;
  height: 30px;
  color: #fff;
  border-radius: 7px;
  border: 1px solid #F8F9FA;
  background: transparent;
  text-align: center; 
  align-items: center;
  padding: 0 2px;

  /* Remove the up and down arrows */
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &:hover {
    color: lightgray;
    border-color: lightgray;
  }
`;

export default function RangeSlider({ onPriceChange }) {  // new code

  const [minValue] = useState(0); // Set your minimum gap here
  const [maxValue] = useState(10000); // Set your minimum gap here
  // const Gap = 100; // Set your minimum gap here
  const Gap = 1; // Set your minimum gap here
  const [value, setValue] = useState({ min: minValue, max: maxValue });

  const handleSliderChange = (event) => {
    let newValue = {
      ...value,
      [event.target.name]: event.target.value
    };

    if (event.target.name === 'min' && newValue.min > newValue.max - Gap) {
      newValue.min = newValue.max - Gap > minValue ? newValue.max - Gap : minValue;

    } else if (event.target.name === 'max' && newValue.max < newValue.min + Gap) {
      newValue.max = newValue.min + Gap < maxValue ? newValue.min + Gap : maxValue;

    }

    // Ensure max slider doesn't go below 0
    if (newValue.max < 0) {
      newValue.max = 0;
    }

    setValue(newValue);
    onPriceChange(newValue);  // new code

  };

  const handleInputChange = (event) => {
    let newValue = {
      ...value,
      [event.target.name]: event.target.value
    };

    if (event.target.name === 'min' && newValue.min > newValue.max - Gap) {
      // newValue.min = newValue.max - Gap;
      newValue.min = newValue.max - Gap > minValue ? newValue.max - Gap : minValue;

    } else if (event.target.name === 'max' && newValue.max < newValue.min + Gap) {
      // newValue.max = newValue.min + Gap;
      newValue.max = newValue.min + Gap < maxValue ? newValue.min + Gap : maxValue;

    }

    // Ensure max slider doesn't go below 0
    if (newValue.max < 0) {
      newValue.max = 0;
    }

    setValue(newValue);
    onPriceChange(newValue);  // new code

  };

    return (
      <Container>
        {/* Minimum Slider Bar */}
        <MinSlider
          type="range"
          name="min"
          min={minValue}
          max={maxValue}
          value={value.min}
          onChange={handleSliderChange}
        />

        <TxtCon>
          <P>Min</P>
          <P1>Max</P1>
        </TxtCon>

        {/* RM */}
        <Span>$</Span>

        {/* USD */}
        {/* <Span>$</Span> */}

        {/* Minimum Input */}
        <Input
          type="number"
          name="min"
          min={minValue}
          max={maxValue}
          value={value.min}
          onChange={handleInputChange}
        />

        <Span1>-</Span1>

        {/* Maximum Slider Bar */}        
        <MaxSlider
          type="range"
          name="max"
          min={minValue}
          max={maxValue}
          value={value.max}
          onChange={handleSliderChange}
        />

        {/* RM */}
        <Span2>$</Span2>

        {/* USD */}
        {/* <Span2>$</Span2> */}

        {/* Maximum Input */}
        <Input
          type="number"
          name="max"
          min={minValue}
          max={maxValue}
          value={value.max}
          onChange={handleInputChange}
        />

      </Container>
    );
};