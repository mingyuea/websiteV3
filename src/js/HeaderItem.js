import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Style from '../scss/HeaderItem.scss';

class HeaderItem extends Component{
	constructor(props){
		super(props);

		this.state = {
			isSelected: false
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		console.log(this.props.path);

	}

	componentDidMount(){

	}

	render(){
		return(
			<div className={Style.itemCont} onClick={this.handleClick}>
				<NavLink className={Style.linkStyle} activeClassName={Style.active} exact to={this.props.path} id={this.props.title}>
					/ {this.props.title}
				</NavLink>
			</div>
		);
	}
}

export default HeaderItem;