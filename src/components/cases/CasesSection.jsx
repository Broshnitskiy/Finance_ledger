import React from 'react';
import { Section, P, Div } from './CasesSection.styled';
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import { galleryCasesImages } from '../../gallery/galleryCasesImages';
import { Container } from '../container/Container';

export const CasesSection = () => {
  return (
    <Section id="cases">
      <Container>
        <P>This is what we do</P>
        <h2>Business Cases</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>

        <Gallery>
          <Div>
            {galleryCasesImages.map(el => (
              <Item
                key={el.id}
                cropped
                original={el.small}
                originalSrcset={el.large}
                thumbnail={el.small}
                width="1280"
                height="854"
              >
                {({ ref, open }) => (
                  <img src={el.small} ref={ref} onClick={open} alt={el.alt} />
                )}
              </Item>
            ))}
          </Div>
        </Gallery>
      </Container>
    </Section>
  );
};
