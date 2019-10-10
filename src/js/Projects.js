import React from 'react';
import BodyWrapper from './BodyWrapper.js';

class Projects extends React.PureComponent{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<BodyWrapper 
				title="Projects"
				text="These are a portfolio of projects I completed just for myself"
			>
			</BodyWrapper>
		);
	}
}

export default Projects;