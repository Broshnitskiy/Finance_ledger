import React from 'react';
import { Section } from './HeroSection.styled';
import { Container } from '../container/Container';

export const HeroSection = () => {
  return (
    <Section>
      <Container>
        <h1>The Sky Is The Limit</h1>
        <p>We provide world class financial assistance</p>
        <button type="button">Read More</button>
      </Container>
    </Section>
  );
};
