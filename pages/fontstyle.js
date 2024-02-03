
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&family=Raleway&display=swap');

  body {
    font-family: 'Poppins', sans-serif;
    /* Add any additional global styles here */
  }
  .cvv_container{
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
}
.image_cvv { 
    /* flex:1 1 auto; */
    /* flex-grow:1; */
    /* width: fit-content; */
    max-width: fit-content;
}
.image_cvv img{
    /* scale: 0.5; */
    width: 358px;
    height: 195px;
}
.closebuttonarea{
    align-self:flex-end;
}
.closebuttonarea button{
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
}
.closebuttonarea button:hover{
    background-color: #FF8A1E;
}
.del{
    color: #a8a6a7;
}
// .textarea{
//     white-space: pre-line;
// }
`;


export default GlobalStyles;
