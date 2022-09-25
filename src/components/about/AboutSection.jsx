import React from 'react';
import imgPeopleWebp1x from '../../images/home/people.webp';
import imgPeopleWebp2x from '../../images/home/people@2x.webp';
import imgPeopleJpg1x from '../../images/home/people.jpg';
import imgPeopleJpg2x from '../../images/home/people@2x.jpg';
import { Section, Picture, Div, Parag } from './AboutSection.styled';

export const AboutSection = () => {
  return (
    <Section id="about">
      <Picture>
        <source
          srcSet={(imgPeopleWebp1x, imgPeopleWebp2x)}
          type="image/webp"
        ></source>

        <source srcSet={(imgPeopleJpg1x, imgPeopleJpg2x)}></source>
        <img src={imgPeopleJpg1x} alt="people" />
      </Picture>

      <Div>
        <Parag>What you are looking for</Parag>
        <h2>We provide bespoke solutions</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <button type="button">Read More</button>
      </Div>
    </Section>
  );
};
