import React from 'react';

//import Style from '../scss/PageWrapper.scss';
import HeaderMain from './HeaderMain.js';
/*
<div className={Style.body}>
				{props.children}
			</div>
*/
function PageWrapper(props){
	return(
		<div>
			<HeaderMain />
			{props.children}
		</div>
	)
}

export default PageWrapper;