import React from 'react';

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

import s from './Section.module.css';
import { isMobileScreen } from '../helpers/wideScreen.js';

const Section = ({ children }) => {
	const mobileScreen = isMobileScreen();
	return (
		<section className={s.container}>
			<Header />
			{children}
			{mobileScreen && <Footer />}
		</section>
	);
};

export default Section;
