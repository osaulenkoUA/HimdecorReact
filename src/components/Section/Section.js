import React from 'react';

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

import s from './Section.module.css';

const Section = ({ children }) => {
  return (
    <section className={s.container}>
      <Header />
      {children}
      <Footer />
    </section>
  );
};

export default Section;
