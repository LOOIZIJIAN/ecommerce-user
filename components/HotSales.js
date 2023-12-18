// import { mongooseConnect } from '@/lib/mongoose';
// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';


// const ContentCon = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const BigTitle = styled.h2`
//     width: 80%;
//     text-align: center;
//     font-family: PT Sans;
//     font-size: 40px;
//     font-weight: 400;
//     border-bottom: 1px solid rgba(113, 112, 112, 0.50);
// `;

// // Slide Start
// const SlideshowContainer = styled.div`
//     position: relative;
//     width: 80%;
//     margin-top: 5px;
//     margin-bottom: 20px;
//     margin-left: auto;
//     margin-right: auto;
//     overflow: hidden;
// `;

// const Slides = styled.div`
//     display: flex;
//     transition: transform 0.5s ease-in-out;
// `;

// const Slide = styled.div`
//     flex: 0 0 23.8%; /* width for each slide in a row */
//     box-sizing: border-box;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     margin-right: 15px;
//     box-shadow: 5px 4px 4px 0px rgba(0, 0, 0, 0.25);
//     border-bottom-left-radius: 8px;
//     border-bottom-right-radius: 8px;
//     align-items: center;
// `;

// const Image = styled.img`
//     border-top-left-radius: 8px;
//     border-top-right-radius: 8px;
//     width: 100%;
//     height: auto;
// `;

// const TxtCon = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   background-color: lightgray;
//   border-bottom-left-radius: 8px;
//   border-bottom-right-radius: 8px;
// `;

// const Title = styled.h3`
//   margin: 0;
//   padding: 4px 0;

//   color: #000;
//   text-align: center;
//   font-family: Poppins;
//   font-size: 20px;
//   font-weight: 400;
// `;

// const NavigationButton = styled.a`
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
//     font-size: 24px;
//     cursor: pointer;
// `;

// const PrevButton = styled(NavigationButton)`
//     left: 2px;
// `;

// const NextButton = styled(NavigationButton)`
//     right: 15px;
// `;
// // Slide End

// export default function HotSales(){
//     const [slideIndex, setSlideIndex] = useState(0);
//     // const [products, setProducts] = useState([]);

//     // useEffect(()=>{
//     //   axios.get('api/searchProduct').then(response => {
//     //     setProducts(response.data);
//     //   })
//     // },[]);

//     useEffect(() => {
//         showSlides();
//       }, [slideIndex]);
    
//       const changeSlide = (n) => {
//         setSlideIndex((prevIndex) => prevIndex + n);
//       };
    
//       const showSlides = () => {
//         const slides = document.querySelector('.slides');
//         const totalSlides = slides.children.length;
//         const maxIndex = totalSlides - 4; // Displaying 4 slides at a time
    
//         if (slideIndex > maxIndex) {
//           setSlideIndex(0);
//         }
//         if (slideIndex < 0) {
//           setSlideIndex(maxIndex);
//         }
    
//         const translateValue = -slideIndex * 25; // 25% width for each slide
//         slides.style.transform = `translateX(${translateValue}%)`;
//       };
  
    // return(
    //     <ContentCon>
    //         <BigTitle>Hot Deals</BigTitle>
    //         <SlideshowContainer>
    //           <Slides className="slides">
    //             {products?.length > 0 && products.map(np => (
    //               <Slide key={np._id}> {/* Make sure to provide a unique key for each element in the array */}
    //                 <Image src={np.image} alt="Image 1" />
    //                 <TxtCon>
    //                   <Title>{np.title}</Title>
    //                   <Title>{np.price}</Title>
    //                 </TxtCon>  
    //               </Slide>
    //             ))}
    //           </Slides>
    //           <PrevButton onClick={() => changeSlide(-1)}>&#10094;</PrevButton>
    //           <NextButton onClick={() => changeSlide(1)}>&#10095;</NextButton>
    //         </SlideshowContainer>
    //     </ContentCon>
    // )
// }
