import React from 'react';
import imgContactWebp1x from '../../images/home/contact.webp';
import imgContactWebp2x from '../../images/home/contact@2x.webp';
import imgContactJpg1x from '../../images/home/contact.jpg';
import imgContactJpg2x from '../../images/home/contact@2x.jpg';
import { Section, Picture, Div } from './ContactSection.styled';

export const ContactSection = () => {
  return (
    <Section id="contact">
      <Picture>
        <source
          srcSet={(imgContactWebp1x, imgContactWebp2x)}
          type="image/webp"
        ></source>

        <source srcSet={(imgContactJpg1x, imgContactJpg2x)}></source>
        <img src={imgContactJpg1x} alt="man at a computer" />
      </Picture>

      <Div>
        <h2>Request Callback</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <button type="submit">Send</button>
      </Div>
    </Section>
  );
};
