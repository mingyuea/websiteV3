import React from 'react';
import Style from '../scss/BodyWrapper.scss';

function BodyWrapper(props){
	return(
		<div className={Style.main}>
			<div className={Style.title}>{props.title}</div>
			{
				props.text != null && 
				<div className={Style.text}>
					{props.text}
				</div>
			}
			{props.children}
		</div>
	);
}

export default BodyWrapper;