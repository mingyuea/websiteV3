import React from 'react';

import BodyWrapper from './BodyWrapper.js';
import Style from '../scss/HomePage.scss';

function HomePage(props){
	return(
		<BodyWrapper title="">
			<div className={Style.main}>
				<div className={Style.circle}>
					Hello!
				</div>
				<div className={Style.textDiv}>
					<div className={Style.title}>I'm Ming.</div>
					<div className={Style.subtitle}>I'm a software engineer</div>
				</div>
				<div className={Style.footer}>
					<div className={Style.footerSlant}></div>
					<div className={Style.footerBlock}></div>
					<div className={Style.footerBottom}></div>
				</div>
			</div>

		</BodyWrapper>
	);
}

export default HomePage;