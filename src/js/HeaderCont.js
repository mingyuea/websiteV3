import React from 'react';
import { NavLink } from 'react-router-dom';

import Style from '../scss/HeaderCont.scss';

function HeaderCont(props){
	//console.log(props.children)
	return(
		<div className={Style.main}>
			<div className={Style.nameCont}>
				<div className={Style.nameChild}>
					<NavLink className={Style.homeLink} exact to='/'>ming</NavLink>
				</div>
			</div>
			<div className={Style.itemCont}>
				{props.children}
			</div>
		</div>
	)
}

export default HeaderCont;