import React from 'react';
import imgBlogWebp1x from '../../images/home/blog.webp';
import imgBlogWebp2x from '../../images/home/blog@2x.webp';
import imgBlogJpg1x from '../../images/home/blog.jpg';
import imgBlogJpg2x from '../../images/home/blog@2x.jpg';
import { Section, Picture, Div, Parag } from './BlogSection.styled';

export const BlogSection = () => {
  return (
    <Section id="about">
      <Picture>
        <source
          srcSet={(imgBlogWebp1x, imgBlogWebp2x)}
          type="image/webp"
        ></source>

        <source srcSet={(imgBlogJpg1x, imgBlogJpg2x)}></source>
        <img src={imgBlogJpg1x} alt="people" />
      </Picture>

      <Div>
        <Parag>April 16 2020</Parag>
        <h2>Blog Post One</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <button type="button">Read Our Blog</button>
      </Div>
    </Section>
  );
};
