import React from 'react';
import { Section } from './HeroSection.styled';
import { Container } from '../container/Container';
import arrow from '../../images/gallery/angle-right.png';

export const HeroSection = () => {
  return (
    <Section id="home">
      <Container>
        <h1>The Sky Is The Limit</h1>
        <p>We provide world class financial assistance</p>
        <button type="button">
          <img src={arrow} alt="arrow" />
          <span>Read More</span>
        </button>
      </Container>
    </Section>
  );
};
