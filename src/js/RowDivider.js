import React from 'react';
import Style from '../scss/RowDivider.scss';

const padding = {
	"left": 3,
	"right": 3,
}

const themes = {
	"dark": {
		color: "white",
		backgroundColor: "rgba(0,0,0,0.92)"
	},
	"light":{
		color: "black",
		backgroundColor: "white"
	}
}

function RowDivider(props){
	let leftStyle = JSON.parse(JSON.stringify(themes[props.leftTheme]));
	let rightStyle = JSON.parse(JSON.stringify(themes[props.rightTheme]));
	/*
	leftStyle.width = String(Number(props.leftWidth) - padding.left)+ "%";
	rightStyle.width = String(100 - Number(props.leftWidth) - padding.right) + "%";
	*/
	return(
		<div className={Style.main}>
			<div className={Style[props.leftSize] + " " + Style[props.leftSlide]} style={leftStyle}>
				{props.children[0]}
			</div>
			<div className={Style[props.rightSize] + " " + Style[props.rightSlide]} style={rightStyle}>
				{props.children[1]}
			</div>
		</div>
	);
}

export default RowDivider;