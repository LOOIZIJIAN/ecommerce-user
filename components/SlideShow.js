import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Slideshow = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 60px;
  overflow: hidden;
  width: 750px;
  height: 950px;
  z-index: 0;
  border-radius: 20px;
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
  border-radius: 20px;
`;

const SlideshowDots = styled.div`
  margin-top: -48px;
  position: absolute;
  z-index: 3;
  width: 650px;
  /* text-align: center; */
  /* margin-left: auto; */
  /* margin-right: auto; */
  margin-left: 325px; 
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
  background-color: ${props => (props.index === props.i ? '#e0dede' : '#403d3d')};
`;

const delay = 2500;

export default function SlideShow({ slides }) {
  const [index, setIndex] = useState(0);
  const isReversed = React.useRef(false);
  console.log('slides:'+slides);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (slides && slides.length) {
        if (isReversed.current) {
          setIndex((prevIndex) => (prevIndex - 1 < 0 ? slides.length - 1 : prevIndex - 1));
        } else {
          setIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }
      }
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [index, slides, delay]);

  useEffect(() => {
    if (slides && slides.length) { 
      if (index === slides.length - 1) {
        isReversed.current = true;
      } else if (index === 0) {
        isReversed.current = false;
      }
    }
  }, [index, slides]);

  return (
    <div>
      {slides && slides.length > 0 && ( 
        <Slideshow>
          <SlideshowSlider index={index}>
            {slides.map((sl, i) => (
              <Slide key={i} src={sl.slides} alt={`Slide ${i + 1}`} />
            ))}
          </SlideshowSlider>
          <SlideshowDots>
            {slides.map((_, i) => (
              <SlideshowDot
                key={i}
                index={index}
                i={i}
                onClick={() => {
                  setIndex(i);
                }}
              ></SlideshowDot>
            ))}
          </SlideshowDots>
        </Slideshow>
      )}
    </div>
  );
}
