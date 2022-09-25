import React from 'react';
import { Section, P } from './CasesSection.styled';
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import img1_1x from '../../images/cases/cases1.jpg';
import img1_2x from '../../images/cases/cases1@2x.jpg';
import img2_1x from '../../images/cases/cases2.jpg';
import img2_2x from '../../images/cases/cases2@2x.jpg';
import img3_1x from '../../images/cases/cases3.jpg';
import img3_2x from '../../images/cases/cases3@2x.jpg';
import img4_1x from '../../images/cases/cases4.jpg';
import img4_2x from '../../images/cases/cases4@2x.jpg';
import img5_1x from '../../images/cases/cases5.jpg';
import img5_2x from '../../images/cases/cases5@2x.jpg';
import img7_1x from '../../images/cases/cases7.jpg';
import img7_2x from '../../images/cases/cases7@2x.jpg';

export const CasesSection = () => {
  return (
    <Section id="cases">
      <P>This is what we do</P>
      <h2>Business Cases</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>

      <Gallery>
        <div>
          <Item
            cropped
            original={img1_1x}
            originalSrcset={img1_2x}
            thumbnail={img1_1x}
            width="1280"
            height="854"
          >
            {({ ref, open }) => <img src={img1_1x} ref={ref} onClick={open} />}
          </Item>
          <Item
            cropped
            original="https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg"
            thumbnail="https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg"
            width="1600"
            height="1600"
          >
            {({ ref, open }) => (
              <img
                src="https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg"
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
          <Item
            cropped
            original="https://farm6.staticflickr.com/5591/15008867125_b61960af01_h.jpg"
            thumbnail="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg"
            width="1600"
            height="1068"
          >
            {({ ref, open }) => (
              <img
                src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg"
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
          <Item
            cropped
            original="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg"
            thumbnail="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg"
            width="1600"
            height="1066"
          >
            {({ ref, open }) => (
              <img
                src="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg"
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
          <Item
            cropped
            original="https://farm6.staticflickr.com/5584/14985868676_b51baa4071_h.jpg"
            thumbnail="https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg"
            width="1600"
            height="1066"
          >
            {({ ref, open }) => (
              <img
                src="https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg"
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
          <Item
            cropped
            original="https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg"
            thumbnail="https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg"
            width="1600"
            height="1066"
          >
            {({ ref, open }) => (
              <img
                src="https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg"
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
        </div>
      </Gallery>
    </Section>
  );
};
