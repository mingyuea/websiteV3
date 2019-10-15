import React from 'react';

import BodyWrapper from './BodyWrapper.js';

class Contact extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<BodyWrapper title="Contact">
				<div>
					Contact Me
				</div>
			</BodyWrapper>
		)
	}
}

export default Contact;