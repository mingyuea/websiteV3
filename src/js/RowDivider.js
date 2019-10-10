import React from 'react';

function RowDivider(props){
	return(
		<div className={Style.rightDiv} style={this.props.leftTheme}>
			{props.children[0]}
		</div>
		<div className-{Style.leftDiv} style={this.props.rightTheme}>
			{props.children[1]}
		</div>
	);
}

export default RowDivider;