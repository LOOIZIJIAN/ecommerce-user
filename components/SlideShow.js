// import React, { useEffect, useState, useRef } from 'react';

// const styles = `
// /* Slideshow */
// .slideshow {
//   margin: 15px auto;
//   overflow: hidden;
//   max-width: 95%;
//   max-height: 75%;
// }

// .slideshowSlider {
//   white-space: nowrap;
//   transition: ease 1000ms;
// }

// .slide {
//   display: inline-block;
//   height: 400px;
//   width: 100%;
//   border-radius: 20px;
// }

// /* Buttons */
// .slideshowDots {
//   text-align: center;
// }

// .slideshowDot {
//   display: inline-block;
//   height: 20px;
//   width: 20px;
//   border-radius: 50%;
//   cursor: pointer;
//   margin: 15px 7px 0px;
//   background-color: #c4c4c4;
// }

// .slideshowDot.active {
//   background-color: #6a0dad;
// }
// `;

// const imageUrls = ["image3.jpeg", "image1.jpg", "image2.jpg"];
// const delay = 2500;

// export default function Slideshow() {
//   const [index, setIndex] = useState(0);
//   const isReversed = useRef(false);

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       if (isReversed.current) {
//         setIndex((prevIndex) => (prevIndex - 1 < 0 ? imageUrls.length - 1 : prevIndex - 1));
//       } else {
//         setIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
//       }
//     }, delay);

//     return () => {
//       clearTimeout(timeoutId);
//     };
//   }, [index]);

//   useEffect(() => {
//     if (index === 4) {
//       isReversed.current = true;
//     } else if (index === 0) {
//       isReversed.current = false;
//     }
//   }, [index]);

//   return (
//     <div>
//       <style>{styles}</style>
//       <div className="slideshow">
//         <div
//           className="slideshowSlider"
//           style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
//         >
//           {imageUrls.map((imageUrl, i) => (
//             <img className="slide" key={i} src={imageUrl} alt={`Slide ${i + 1}`} />
//           ))}
//         </div>
//         <div className="slideshowDots">
//           {imageUrls.map((_, i) => (
//             <div
//               key={i}
//               className={`slideshowDot${index === i ? " active" : ""}`}
//               onClick={() => {
//                 setIndex(i);
//               }}
//             ></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect } from 'react';
import styled from 'styled-components';

const Slideshow = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 140px;
  overflow: hidden;
  width: 650px;
  height: auto;
  z-index: 0;
`;

const SlideshowSlider = styled.div`
  white-space: nowrap;
  transition: ease 1000ms;
  margin-top: 30px;
  transform: translate3d(${props => -props.index * 100}%, 0, 0);
`;

const Slide = styled.img`
  display: inline-block;
  height: 356px;
  width: 100%;
  border-radius: 40px;
`;

const SlideshowDots = styled.div`
  margin-top: -48px;
  position: absolute;
  z-index: 3;
  width: 650px;
  text-align: center;
`;

const SlideshowDot = styled.div`
  display: inline-block;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  cursor: pointer;
  margin-top: 15px;
  margin-right: 7px;
  margin-bottom: 0px;
  margin-left: 3px;
  background-color: ${props => (props.index === props.i ? '#6a0dad' : '#c4c4c4')};
`;

// Image Array URLs
const imageUrls = ["image3.jpeg", "image1.jpg", "image2.jpg"];

// Delay between slides
const delay = 2500;

export default function SlideShow() {
  const [index, setIndex] = React.useState(0);
  const isReversed = React.useRef(false);

  // Change Slide Effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (isReversed.current) {     // If reversed, go to previous slide
        setIndex((prevIndex) => (prevIndex - 1 < 0 ? imageUrls.length - 1 : prevIndex - 1));
      } else {     // If not reversed, go to next slide
        setIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
      }
    }, delay);

    // Clear timeout
    return () => {
      clearTimeout(timeoutId);
    };
  }, [index]);

  // Change slideshow direction
  useEffect(() => {
    if (index === 4) {  // If the last slide, reverse the direction
      isReversed.current = true;
    } else if (index === 0) {  // If the first slide, set the direction forward
      isReversed.current = false;
    }
  }, [index]);

  return (
    <div>
        <Slideshow>
            <SlideshowSlider index={index}>
                {imageUrls.map((imageUrl, i) => (<Slide key={i} src={imageUrl} alt={`Slide ${i + 1}`} />))}
            </SlideshowSlider>
            <SlideshowDots>
                {imageUrls.map((_, i) => (
                    <SlideshowDot key={i} index={index} i={i} onClick={() => {setIndex(i);}}></SlideshowDot>
                ))}
            </SlideshowDots>
        </Slideshow>
    </div>
  );
}