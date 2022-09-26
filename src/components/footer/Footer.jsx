import React from 'react';
import { BsFacebook, BsTwitter, BsYoutube, BsLinkedin } from 'react-icons/bs';
import { FooterContainer, Div } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterContainer>
      <Div>
        <a href="##">
          <BsFacebook size="35px" />
        </a>
        <a href="##">
          <BsTwitter size="35px" />
        </a>
        <a href="##">
          <BsYoutube size="35px" />
        </a>
        <a href="##">
          <BsLinkedin size="35px" />
        </a>
      </Div>

      <p>Copyright © 2022 - FinanceLedger</p>
    </FooterContainer>
  );
};
