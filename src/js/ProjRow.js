import React from 'react';

import Style from '../scss/ProjRow.scss';

function ProjRow(props){
	return(
		<div className={Style.rowCont + " " + Style[props.animation]}>
			{props.children}
		</div>
	)
}

export default ProjRow;