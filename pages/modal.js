import React, { useState , useEffect , useRef } from 'react';
import styled from 'styled-components';
import GlobalStyles from './fontstyle';


const Dlog = styled.div`
  border-radius: 10px;
  border: 1px ridge #6C757D;
  background-color: #D9D9D9;
  width: 489px;
  height: 605px;
  padding: 16px;
  
  z-index:999;
  position : fixed;
  inset: 0;
  margin-left: 500px;
  transform: translateY(15%);
  z-index:999;
`;
const Content = styled.div`
width: 100vw;
height: 100vh;
top: 0;
left: 0;
right: 0;
bottom: 0;
position: fixed;
z-index:1;
  background: rgba(49,49,49,0.8);
`;

const Dlog_2 = styled.div`
  border-radius: 10px;
  border: 1px ridge #6C757D;
  background-color: #D9D9D9;
  width: fit-content;
  height: fit-content;
  padding: 16px;
  
  z-index:1001;
  position : fixed;
  inset: 0;
  margin-left: 50px;
  transform: translateY(40%);
`;
const Content_2 = styled.div`

top: 0;
left: 0;
right: 0;
bottom: 0;
position: fixed;
z-index:1000;
  background: rgba(49,49,49,0.8);
  border-radius: 8px;

`;
const Dialog_full_container = styled.div`
  display: flex;
          
  justify-content: flex-start; 
  align-items: stretch; 

  flex-direction: column; 
  flex-wrap: wrap; 
  align-content: space-around;


  height: 100%;
  gap: 5px;


`;
const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
`;
const Card_details_container = styled.div`

`;
const IMG_DIV = styled.div`
`;
const Open_cvv = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const Close_dialog = styled.button`
  width : 110px;
  height : 50px;
  border-radius : 5px;
  border:none;
 /* align-items: flex-end; */
  background-color: #212529;
  color:#F8F9FA;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  cursor: pointer;

  &:hover{
    background-color: #FF8A1E;
  }
`;
const H3 = styled.h3`
  margin-bottom: 0.5em;
  font-family: 'Poppins', sans-serif;
`;

const Addcardtitle = styled.div`
  align-self:flex-start;
  font-family: 'Poppins', sans-serif;
`;

const Card_details_bar = styled.div`
  display: flex;
      
  justify-content: space-between; 
  align-items: stretch; 
  /* flex-flow: row wrap; */ 
  flex-direction: row; 
  flex-wrap: wrap; 
  align-content: flex-start;

  /* background-color: #bbdefb; */
  width: 100%;
  height: 100%;
`;

const Card_details_bar_H3 = styled.h3`
  margin-bottom: 0.5em;
  font-family: 'Poppins', sans-serif;
  padding-left: 20px;
  flex-grow: 1;
`;

const IMG = styled.img`
  flex-grow:0;
  align-self:center;
`;

const Card_details = styled.div`
  order:0;
  flex-grow:1;
  align-self:flex-start;
`;

const Card_details_info = styled.div`
  display: flex;
      
  justify-content: flex-start; 
  align-items: stretch; 
  /* flex-flow: column wrap; */ 
  flex-direction: column; 
  flex-wrap: wrap; 
  align-content: stretch;

  /* background-color: #bbdefb; */
  height: fit-content;
  /* padding: 15px; */
  gap: 5px;
`;

const Card_address = styled.div`
  display: flex;
      
  justify-content: flex-start; 
  align-items: stretch; 
  /* flex-flow: column wrap; */ 
  flex-direction: column; 
  flex-wrap: wrap; 
  align-content: stretch;

  /* background-color: #bbdefb; */
  height: 100%;
  /* padding: 15px; */
  gap: 5px;
`;

const StyledNumberInput = styled.input`
  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }

  border: 1px ridge #6C757D;
  border-radius: 5px;
  height: 1.5rem;
  padding: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 100%;
  background-color: transparent;

  &:focus {
    /* Uncomment the border property if needed */
    /* border: 1px ridge #212529; */
    outline: 1px ridge #212529;
  }

  &::placeholder {
    color: #6C757D;
    font-family: 'Poppins', sans-serif;
  }
`;

const StyledInput = styled.input`
  border: 1px ridge #6C757D;
  border-radius: 5px;
  height: 1.5rem;
  padding: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 100%;
  background-color: transparent;

  &:focus {
    /* Uncomment the border property if needed */
    /* border: 1px ridge #212529; */
    outline: 1px ridge #212529;
  }

   
  &::placeholder {
    color: #6C757D;
    font-family: 'Poppins', sans-serif;
  }
`;

const Rowinput = styled.div`
  display: flex;
      
  justify-content: space-between; 
  align-items: stretch; 
  /* flex-flow: row wrap; */ 
  flex-direction: row; 
  flex-wrap: wrap; 
  align-content: stretch;

  /* background-color: #bbdefb; */
  height: 100%;
  gap: 5px;
`;

const StyledInput_exp = styled(StyledInput)`
  flex-grow:1;
`;

const Cvv_Separate = styled.div`
  display: flex;
  border : 1px ridge #6C757D;
  border-radius: 5px;
`;

const CvvStyledInput = styled(StyledInput)`
  border:0;
  flex-grow: 0;
  align-self: auto;

&:focus{
  outline:none;
}
`;

const Cvv_SeparateButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Cvv_container = styled.div`
  display: flex;
      
  /* align-items: stretch;  */
  justify-content: center; 
  align-items: center; 
  /* flex-flow: column nowrap; */ 
  flex-direction: column; 
  flex-wrap: nowrap; 

  /* background-color: #bbdefb; */
  height: 100%;
  padding: 15px;
  gap: 5px;
  width: fit-content;
`;

const Div_Img_cvv = styled.div`
  /* flex:1 1 auto; */
  /* flex-grow:1; */
  /* width: fit-content; */
  max-width: fit-content
`;

const IMG_cvv = styled.img`
  width: 358px;
  height: 195px;
`;

const Close_Button_Area = styled.div`
  align-self:flex-end;
`;

const Close_Button_Area_Button = styled.button`
  width : 110px;
  height : 50px;
  border-radius : 5px;
  border:none;
  /* align-items: flex-end; */
  background-color: #212529;
  color:#F8F9FA;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  cursor: pointer;

  &:hover{
    background-color: #FF8A1E;
  }
`;

const Card_bill = styled.div`
  /* flex:1 1 auto; */
  flex-grow:1;
  flex-shrink:1;
  align-self:flex-start;
  width: 100%;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap : 5px;
  margin-top: 10px;
`;

const Card_Bill_H3 = styled.h3`
  margin-bottom: 0.5em;
  font-family: 'Poppins', sans-serif;
  padding-left: 20px;
  flex-grow: 1;
`;
// const flashAnimation = keyframes`
//   0%, 100% {
//     color: #dc3545; // 设置为红色
//   }
//   50% {
//     color: #fff; // 设置为白色
//   }
// `;
export default function Modal({onSave}) {

//----------------cvvShowDialog--------------------------------
  const [modal, setModal] = useState(false)
  const toggleModal = () =>{
    setModal(!modal);
  }

    const CvvseparateRef = useRef(null);
    const CVV = useRef(null);
  useEffect(() => {
    const cvv_separate = CvvseparateRef.current;
    const cvv_input = CVV.current;

    if(cvv_separate) {
    cvv_input.addEventListener("focus", function () {
      cvv_separate.style.outline = "1px ridge #212529";
    });

    cvv_input.addEventListener("blur", function () {
      cvv_separate.style.outline = "none";
    });
    }
}, []);

    useEffect(() => {
      const cardNumberInput = document.getElementById("cardnumber");
      cardNumberInput.addEventListener("input", function () {
        this.value = this.value.replace(/\s/g, '').replace(/([0-9a-zA-Z]{4})(?=\d)/g, "$1-");
    
        const inputValue = this.value;
        if (/[a-zA-Z]/.test(inputValue)) {
          alert("Please enter only digits (0-9).");
          this.value = inputValue.replace(/[a-zA-Z]/g, '');
        }
      });
    
      const expireDateInput = document.getElementById("expiredate");
      expireDateInput.addEventListener("input", function () {
        this.value = this.value.replace(/\s/g, '').replace(/([0-9a-zA-Z]{2})(?=\d)/g, "$1/");
    
        const inputValue = this.value;
        if (/[a-zA-Z]/.test(inputValue)) {
          alert("Please follow the formal format (MM/YY).");
          this.value = inputValue.replace(/[a-zA-Z]/g, '');
        }
    
        const mmPart = inputValue.substring(0, 2);
        if (parseInt(mmPart) > 12) {
          alert("Please enter a valid month (01-12).");
          this.value = inputValue.replace(/^[0-9]*$/, '');
        }
      });
    }, []);
    
    
      const [newCard, setNewCard] = useState({
        cardType: "Master Card", // You can set the initial values as needed
        cardNumber: "",
        expireDate: "",
        cvv: "",
        nameOnCard: "",
        address: "",
        postalCode: "",
      });
    
      // const handleSave = () => {
      //   // Validate the input fields if needed
    
      //   // Call the onSave callback and pass the newCard information
      //   onSave(newCard);
      // };

      const [requiredFields, setRequiredFields] = useState({
        cardNumber: true,
        expireDate: true,
        cvv: true,
        nameOnCard: true,
        address: true,
        postalCode: true,
      });
    
      const validateFields = () => {
        const fields = { ...requiredFields };
        let isValid = true;
    
        Object.keys(fields).forEach(field => {
          const value = newCard[field].trim();
          fields[field] = value !== '';
          if (!fields[field]) {
            isValid = false;
          }
        });
    
        setRequiredFields(fields);
        return isValid;
      };
    
      const handleSave = () => {
        if (validateFields()) {
          // 所有必填字段都已填写，可以执行保存操作
          onSave(newCard);
          // 关闭模态框等操作
        }
      };
    
   
    
  return (
    <div>
      <GlobalStyles />
      <Content>
      <Dlog >
        
        <Dialog_full_container>
          <form id="addCardForm">
          <Addcardtitle>
            <Title>Add card</Title>
          </Addcardtitle>
          <Card_details_container>
            <Card_details>
              <Card_details_bar>
              <Card_details_bar_H3>Card Details</Card_details_bar_H3>
              <IMG_DIV>
                <IMG src="./icon/symbols.png" alt="Visa"></IMG>
                <IMG src="./icon/card (1).png" alt="Master Card"></IMG>
              </IMG_DIV>
              </Card_details_bar>
          
          
          <Card_details_info>
            
            <StyledInput type="text" placeholder="Card Number" id="cardnumber" maxlength="19"
            pattern="[0-9]{4}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}" required></StyledInput>
            
            <Rowinput>
              <StyledInput_exp type="text" class="exp" placeholder="Expiry Dates(MM/YY)"  maxlength="5"
              id="expiredate" pattern="[0-9]{2}/?[0-9]{2}" required></StyledInput_exp>
              <Cvv_Separate ref={CvvseparateRef}>
                
                <CvvStyledInput ref={CVV} type="tel" class="CVV" placeholder="CVV" id="cvv" maxlength="3" required></CvvStyledInput>
                <Open_cvv id='open_cvv' onClick={toggleModal}><IMG src="./icon/question (1).png"></IMG></Open_cvv>
                  {modal && (
                    <div>
                      <Content_2>
                        <Dlog_2>
                          <div className="cvv_container">
                            <div className="image_cvv">
                              <img src="./icon/What-is-CVV-Number-in-Debit-Card-1-removebg-preview.png"></img>          
                            </div>
                              <div className="closebuttonarea">
                                <button id="close_cvv_show" onClick={toggleModal}>OK</button>
                              </div>
                        </div>
                        </Dlog_2>
                      </Content_2>
                </div>
                  )}
              </Cvv_Separate>
            </Rowinput>
            <StyledInput type="text" class="name_card" placeholder="Name on Card" required></StyledInput>
          </Card_details_info>
          </Card_details>
          </Card_details_container>

          <Card_bill>
            <Card_Bill_H3>Billing Address</Card_Bill_H3>
            <Card_address>
              <StyledInput type="text" class="name_card" placeholder="Address" required></StyledInput>
              <StyledInput type="text" class="name_card" placeholder="Address"></StyledInput>
              <StyledNumberInput type="number" class="name_card" placeholder="Postal Code" required></StyledNumberInput>
            </Card_address>
          </Card_bill>
          <ButtonArea>
            <Close_dialog type="submit" onClick={handleSave}>Save</Close_dialog>
          </ButtonArea>
          </form>
        </Dialog_full_container>
        
      </Dlog>
      </Content>
      
    </div>
  );
}
