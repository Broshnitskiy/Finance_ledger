import React from 'react';
import { Section, P, WrapperImg, Overlay } from './OurTeamSection.styled';
import { galleryOurTeamImages } from '../../gallery/galleryOurTeamImages';
import { BsFacebook, BsTwitter, BsYoutube, BsLinkedin } from 'react-icons/bs';

import { Container } from '../container/Container';

export const OurTeamSection = () => {
  return (
    <Section>
      <Container>
        <P>Who we are</P>
        <h2>Our Professional Team</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
        <ul>
          {galleryOurTeamImages.map(el => (
            <li key={el.id}>
              <WrapperImg>
                <picture>
                  <source
                    srcSet={(el.imageWebp1x, el.imageWebp2x)}
                    type="image/webp"
                  ></source>

                  <source srcSet={(el.imageJpg1x, el.imageJpg2x)}></source>
                  <img src={el.imageJpg1x} alt={el.alt} />
                </picture>
                <Overlay>
                  <a href="##">
                    <BsFacebook size="35px" color="white" />
                  </a>
                  <a href="##">
                    <BsTwitter size="35px" color="white" />
                  </a>
                  <a href="##">
                    <BsYoutube size="35px" color="white" />
                  </a>
                  <a href="##">
                    <BsLinkedin size="35px" color="white" />
                  </a>
                </Overlay>
              </WrapperImg>
              <div>
                <h3>{el.name}</h3>
                <p>{el.position}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};
