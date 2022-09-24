import React from 'react';
import { Logo } from '../logo/Logo';
import { Header, Div } from './Navigate.styled';
import { Container } from '../container/Container';

export const Navigate = () => {
  return (
    <Header>
      <Container>
        <Div>
          <Logo />
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#cases">Cases</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contacts">Contact</a>
            </li>
          </ul>
        </Div>
      </Container>
    </Header>
  );
};
