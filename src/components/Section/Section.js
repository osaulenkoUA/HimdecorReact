import React from 'react';
import { connect } from 'react-redux';

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import phoneBookSelectors from '../../redux/PhoneBook/phoneBookSelectors.js';


import s from './Section.module.css';

const Section = ({ theme, children }) => {
	return (
		<section className={s.container} >
			<Header />
			{children}
			<Footer />
		</section>
	);
};

const mapStateToProps = (state) => {
	return {
		theme: phoneBookSelectors.getTheme(state),
	};
};

export default connect(mapStateToProps)(Section);
