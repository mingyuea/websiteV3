import React from 'react';

import Style from '../scss/ProjCell.scss';

function ProjCell(props){
	return(
		<div className={Style.cellOuter}>
		<div className={Style.cellOuterBorder}>
			<div className={Style.cellBorder}>
				<div className={Style.cell}>
					<div className={Style.cellText}>{props.children}</div>
				</div>
			</div>
		</div>
		</div>
	)
}

export default ProjCell;