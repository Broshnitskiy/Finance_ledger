import React from 'react';
import imgContactWebp1x from '../../images/home/contact.webp';
import imgContactWebp2x from '../../images/home/contact@2x.webp';
import imgContactJpg1x from '../../images/home/contact.jpg';
import imgContactJpg2x from '../../images/home/contact@2x.jpg';
import {
  Section,
  Picture,
  Div,
  Input,
  ErrorWraper,
  TextError,
} from './ContactSection.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { MdWarning } from 'react-icons/md';

export const ContactSection = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, //eslint-disable-line
        'Invalid e-mail',
      )
      .min(3, 'Must contain at least 3 characters!')
      .max(254, 'Can not contain more than 254 characters!')
      .required(`This is required field!`),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema,
    onSubmit: values => {
      formik.resetForm({ name: '', email: '' });
    },
  });

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
        <form onSubmit={formik.handleSubmit}>
          <Input
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Enter your name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur('name')}
            value={formik.values.name}
          />

          <Input
            type="email"
            name="email"
            placeholder="Enter email *"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur('email')}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <ErrorWraper>
              <MdWarning color="red" />
              <TextError>{formik.errors.email}</TextError>
            </ErrorWraper>
          )}

          <button type="submit">Send</button>
        </form>
      </Div>
    </Section>
  );
};
