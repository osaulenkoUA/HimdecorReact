import React from 'react';
import map from './map.jpg';
import pic from './ill_contact.png';

import s from './Contacts.module.css';
function Header() {
	return (
		<section>
			<div className={s.contact}>
				<div className={s.phones}>
					<a href="tel:+380674310968" className={s.phones__mobile}>
						+380(67)4310968
					</a>
					<p className={s.phones__works}>0432-55-66-18</p>
				</div>

				<div  className={s.emails}>
					<p className={s.emails__info}>info@himdecor.ua</p>
					<p className={s.emails__employer} >mycola.osaulenko@himdecor.ua (директор)</p>
				</div>

				<div  className={s.address}>
					<p  className={s.address_text} >м.Вінниця, вул. Максима Шимка, 42</p>
				</div>
				<div  className={s.web} >
					<p  className={s.web_text} >www.zakraska.com.ua</p>
					<p  className={s.web_text} >www.himrezerv.com.ua</p>
				</div>

				<picture  className={s.contact__picture} >
					<img src={pic} alt="" />
				</picture>
			</div>
			<div  className={s.contactMap} >
				<img src={map} alt="" />
			</div>
		</section>
	);
}

export default Header;
