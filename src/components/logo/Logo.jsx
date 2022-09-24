import React from 'react';
import bookSvg from '../../images/book-open.svg';
import { LinkHome } from './Logo.styled';

export const Logo = () => {
  return (
    <LinkHome href="/">
      <img src={`${bookSvg}`} alt="open book icon" />
      <p>
        Finance <span>Ledger</span>
      </p>
    </LinkHome>
  );
};
