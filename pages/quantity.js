import React, { useRef , useState ,useEffect} from 'react';
import styled from "styled-components";


const Quantity_area = styled.div`
    display: flex;
    flex-direction: row;
    margin-left : 10px;
    border-radius:5px;
`;
const Decrease = styled.button`
    border:none;
    background-color:transparent;
    transform:scale(1.8);
    margin : 10px;
    cursor:pointer;

`;
const Increase = styled(Decrease)``;
const Number = styled.span`
    transform:scale(1.3);
    margin : 10px;
`;
const QuantityArea = () => {
    const [quantity, setQuantity] = useState(1);
    const [showError, setShowError] = useState(false);
  
    useEffect(() => {
      let timeoutId;
  
      if (showError) {
        timeoutId = setTimeout(() => {
          setShowError(false);
        }, 300);
      }
  
      return () => clearTimeout(timeoutId);
    }, [showError]);
  
    const handleIncrease = () => {
      setQuantity((prevQuantity) => prevQuantity + 1);
      setShowError(false);
    };
  
    const handleDecrease = () => {
      if (quantity > 1) {
        setQuantity((prevQuantity) => prevQuantity - 1);
      } else {
        setShowError(true);
      }
    };
  
    return (
      <Quantity_area style={{ background: showError ? 'rgba(255, 0, 0, 0.6)' : 'none' ,transition: 'background 0.3s ease'}}>
        <Decrease id="decrease" onClick={handleDecrease}>
          -
        </Decrease>
        <Number
          id="number"
        >
          {quantity}
        </Number>
        <Increase id="increase" onClick={handleIncrease}>
          +
        </Increase>
      </Quantity_area>
    );
  };
  
  export default QuantityArea;