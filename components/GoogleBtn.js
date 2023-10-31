import React from 'react';
import styled from 'styled-components';

const GoogleBtn = styled.button`
  text-align: center;
  width: 100%; /* Set the button width to 100% */
  background: #ffffff;
  color: #888888;
  font-weight: 600;
  border: none;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: #e5e5e5;
    color: #000000;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(66, 133, 244, 0.5);
  }

  img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
`;

const BtnWrapper = styled.div`
  padding-left: 6px;
  padding-right: 0;
  max-width: 320px;
`;


const GoogleSignInButton = ({ onClick }) => {
  return (
      <BtnWrapper>
        <GoogleBtn onClick={onClick}>
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google logo"
            loading="lazy"
          />
          Login with Google
          <span></span>
        </GoogleBtn>
      </BtnWrapper>
      
    
  );
};

export default GoogleSignInButton;
